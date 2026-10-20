import * as T from "three";

/** Procedural light curtains and distant defocused lights; no downloaded assets. */
export class AmbientBackdrop extends T.Group {
  private clock = { value: 0 };
  private pixelRatio = { value: 1 };
  private quiet = matchMedia("(prefers-reduced-motion: reduce)").matches;
  constructor() {
    super();
    const sky = new T.Mesh(
      new T.SphereGeometry(45, 32, 20),
      new T.ShaderMaterial({
        side: T.BackSide,
        depthWrite: false,
        uniforms: { uTime: this.clock },
        vertexShader: `
          varying vec3 vDirection;
          void main() {
            vDirection = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }`,
        fragmentShader: `
          uniform float uTime;
          varying vec3 vDirection;
          void main() {
            vec3 d = normalize(vDirection);
            vec2 p = vec2(atan(d.x, -d.z), asin(clamp(d.y,-1.0,1.0)));
            float t = uTime * .055;
            float bend = .19*sin(p.x*2.5+t) + .07*sin(p.x*5.0-t*.6);
            float curtain = exp(-pow((p.y-.26-bend)*6.0,2.0));
            float folds = .5+.5*sin(p.x*15.0+sin(p.x*3.0+t)*2.0+t);
            float upper = curtain * (.18+.38*folds);
            float veil = exp(-pow((p.y+.15+.12*sin(p.x*3.0-t)) * 4.0,2.0));
            float turquoise = .5+.5*sin(p.x*1.8+t*.3);
            vec3 col = vec3(.003,.008,.022);
            col += mix(vec3(.018,.028,.085), vec3(.012,.105,.13),turquoise) * upper;
            col += vec3(.016,.019,.054) * veil;
            // A restrained warm reflection behind the bouquet ties the scene to its petals.
            float halo = exp(-pow(p.x*2.0,2.0)-pow((p.y+.03)*3.5,2.0));
            col += vec3(.031,.018,.028)*halo;
            col += vec3(.002,.007,.015)*max(0.0,1.0-abs(p.y));
            gl_FragColor = vec4(col,1.0);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }`,
      }),
    );
    sky.renderOrder = -1000;
    sky.frustumCulled = false;
    this.add(sky);

    const count = innerWidth < 700 ? 30 : 55;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const a = i * 2.399963;
      const radius = 3.3 + ((i * 17) % 23) * .29;
      positions.set([Math.cos(a) * radius, Math.sin(a) * radius * .75, -4 - (i % 7) * .55], i * 3);
      sizes[i] = i % 5 === 0 ? 26 + (i % 9) * 3 : 3 + (i % 4);
      phases[i] = i * 1.72;
    }
    const geometry = new T.BufferGeometry();
    geometry.setAttribute("position", new T.BufferAttribute(positions, 3));
    geometry.setAttribute("aSize", new T.BufferAttribute(sizes, 1));
    geometry.setAttribute("aPhase", new T.BufferAttribute(phases, 1));
    const lights = new T.Points(geometry, new T.ShaderMaterial({
      uniforms: { uTime: this.clock, uPixelRatio: this.pixelRatio },
      transparent: true, depthWrite: false, blending: T.AdditiveBlending,
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float aSize;
        attribute float aPhase;
        varying float vOpacity;
        varying float vWarm;
        void main() {
          vec3 p = position;
          p.x += sin(uTime*.07+aPhase)*.15;
          p.y += sin(uTime*.05+aPhase*.7)*.12;
          vec4 mv = modelViewMatrix * vec4(p,1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = min(60.0, aSize*uPixelRatio*12.0/max(4.0,-mv.z));
          vOpacity = .35+.15*sin(uTime*.16+aPhase);
          vWarm = step(.5,fract(aPhase));
        }`,
      fragmentShader: `
        varying float vOpacity;
        varying float vWarm;
        void main() {
          float r = length(gl_PointCoord-.5)*2.0;
          if(r>1.0) discard;
          float glow = exp(-r*r*5.0)*(1.0-smoothstep(.3,1.0,r));
          vec3 col = mix(vec3(.3,.65,.8),vec3(.9,.64,.45),vWarm);
          gl_FragColor=vec4(col,glow*vOpacity*.22);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    }));
    lights.frustumCulled = false;
    this.add(lights);
  }
  tick(seconds: number, ratio: number) {
    this.clock.value = this.quiet ? 0 : seconds;
    this.pixelRatio.value = ratio;
  }
}
