import { AmbientBackdrop } from "./AmbientBackdrop";
import * as T from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { petalGeometry, tube, ribbon, type Species } from "./FlowerGeometry";
interface Flower {
  group: T.Group;
  petals: T.InstancedMesh;
  parts: { angle: number; tilt: number; size: number; radius: number }[];
  delay: number;
  id: number;
  selected: number;
  baseX: number;
}
const v = (x: number, y: number, z: number) => new T.Vector3(x, y, z);
const clamp = T.MathUtils.clamp;
export class BouquetScene {
  renderer: T.WebGLRenderer;
  scene = new T.Scene();
  camera = new T.PerspectiveCamera(38, 1, 0.1, 100);
  controls: OrbitControls;
  private flowers: Flower[] = [];
  private backdrop = new AmbientBackdrop();
  private frame = 0;
  private start = performance.now();
  private ambientStart = performance.now();
  private active = false;
  private reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  private heartStart = 0;
  private visited = new Set<number>();
  private root = new T.Group();
  private heart = new T.Group();
  private particles: T.Points;
  private spark: T.Points;
  private observer: ResizeObserver;
  private dummy = new T.Object3D();
  private down = { x: 0, y: 0 };
  private ray = new T.Raycaster();
  private disposed = false;
  private stems: T.Mesh[] = [];
  private halo = new T.Group();
  private cinematic = false;
  private environment?: T.WebGLRenderTarget;
  private slowFrames = 0;
  private frameTime = performance.now();
  private resumeCleanup: () => void;
  constructor(
    private host: HTMLElement,
    palette: string[],
    private onFlower: (n: number, count: number) => void,
    private onSecret: () => void,
    private minimal = false,
  ) {
    this.renderer = new T.WebGLRenderer({
      antialias: devicePixelRatio < 2,
      alpha: true,
      powerPreference: "high-performance",
    });
    this.renderer.setPixelRatio(
      Math.min(devicePixelRatio, innerWidth < 700 ? 1.35 : 1.8),
    );
    this.renderer.outputColorSpace = T.SRGBColorSpace;
    this.renderer.toneMapping = T.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    // Procedural studio reflections: no HDRI download or image of a flower.
    const studio = new RoomEnvironment();
    const pmrem = new T.PMREMGenerator(this.renderer);
    this.environment = pmrem.fromScene(studio, 0.035);
    this.scene.environment = this.environment.texture;
    this.scene.environmentIntensity = 0.85;
    this.scene.background = new T.Color(0x06142b);
    this.scene.add(this.backdrop);
    studio.dispose();
    pmrem.dispose();
    this.renderer.transmissionResolutionScale = innerWidth < 700 ? 0.35 : 0.6;
    host.append(this.renderer.domElement);
    this.camera.position.set(0, 1.2, 11.5);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0.2, 0);
    this.controls.enableDamping = true;
    this.controls.enablePan = false;
    this.controls.minDistance = 7;
    this.controls.maxDistance = 15;
    this.controls.minPolarAngle = 0.55;
    this.controls.maxPolarAngle = 2.05;
    this.controls.autoRotate = false;
    this.controls.autoRotateSpeed = 0.28;
    this.scene.add(new T.HemisphereLight(0xffeadf, 0x163b65, 1.4));
    const key = new T.DirectionalLight(0xffe5dc, 2.4);
    key.position.set(3, 6, 6);
    this.scene.add(key);
    const pink = new T.DirectionalLight(0xffbdd5, 1.7);
    pink.position.set(-5, 2, -2);
    this.scene.add(pink);
    const rim = new T.DirectionalLight(0x65e6ff, 3.5);
    rim.position.set(4, 3, -4);
    this.scene.add(rim);
    this.scene.add(this.root);
    this.scene.add(this.halo);
    const haloGeo = new T.BufferGeometry().setFromPoints(
      Array.from({ length: 40 }, (_, i) =>
        v(
          Math.cos((i / 40) * Math.PI * 2) * 0.63,
          0,
          Math.sin((i / 40) * Math.PI * 2) * 0.63,
        ),
      ),
    );
    this.halo.add(
      new T.Points(
        haloGeo,
        new T.PointsMaterial({
          color: 0xffd89b,
          size: 0.04,
          transparent: true,
          opacity: 0,
          depthWrite: false,
        }),
      ),
    );
    this.controls.addEventListener("start", () => {
      this.cinematic = false;
    });
    const stem = new T.MeshStandardMaterial({
        color: 0x985849,
        metalness: 0.65,
        roughness: 0.25,
      }),
      leaf = new T.MeshPhysicalMaterial({
        color: 0x90e3ed,
        metalness: 0,
        roughness: 0.08,
        transmission: innerWidth < 700 ? 0.22 : 0.72,
        thickness: 0.17,
        ior: 1.46,
        clearcoat: 1,
        envMapIntensity: 1.45,
        side: T.DoubleSide,
      });
    const kinds: Species[] = ["rose", "peony", "tulip", "cosmos", "aurora"];
    const geos = kinds.map(petalGeometry);
    const materials = palette.map(
      (color) =>
        new T.MeshPhysicalMaterial({
          color,
          vertexColors: true,
          roughness: 0.09,
          metalness: 0,
          transmission: innerWidth < 700 ? 0.26 : 0.68,
          thickness: 0.2,
          ior: 1.46,
          attenuationColor: new T.Color(0xffe4db),
          attenuationDistance: 1.4,
          envMapIntensity: 1.35,
          clearcoat: 1,
          clearcoatRoughness: 0.06,
          iridescence: 0.18,
          iridescenceIOR: 1.3,
          side: T.DoubleSide,
        }),
    );
    const gold = new T.MeshStandardMaterial({
      color: 0xe8c68b,
      metalness: 0.7,
      roughness: 0.3,
      emissive: 0x5b3512,
      emissiveIntensity: 0.3,
    });
    const innerLight = new T.MeshStandardMaterial({
      color: 0xffd487,
      emissive: 0xffb32b,
      emissiveIntensity: 3.5,
      roughness: 0.3,
    });
    const heroPositions = new Map<number, T.Vector3>([
      [0, v(-0.85, 1.4, 1.15)],
      [1, v(0.7, 2.1, 0.8)],
      [5, v(0.95, 0.65, 1.3)],
    ]);
    const leafGeometry = petalGeometry("peony");
    for (let i = 0; i < 29; i++) {
      const angle = i * 2.399963,
        rad = Math.sqrt((i + 0.4) / 29) * 2.14;
      let x = Math.cos(angle) * rad,
        y =
          1.05 +
          Math.sqrt(Math.max(0, 1 - (rad * rad) / 5.6)) * 0.95 +
          Math.sin(i * 3.1) * 0.12,
        z = Math.sin(angle) * rad * 0.64 - 0.35;
      const hero = heroPositions.get(i);
      if (hero) {
        x = hero.x;
        y = hero.y;
        z = hero.z;
      }
      const kind = kinds[i % 5],
        group = new T.Group();
      group.position.set(x, y, z);
      group.rotation.set(0.55 + z * 0.18, 0, -x * 0.19);
      const size =
        (hero
          ? 0.86
          : kind === "peony"
            ? 0.48
            : kind === "cosmos"
              ? 0.36
              : 0.43) *
        (1 + 0.12 * Math.sin(i * 7));
      group.scale.setScalar(size);
      group.userData.flower = i;
      this.root.add(group);
      const parts: Flower["parts"] = [];
      const layers =
        kind === "rose"
          ? 5
          : kind === "peony"
            ? 5
            : kind === "tulip"
              ? 2
              : kind === "aurora"
                ? 3
                : 1;
      for (let l = 0; l < layers; l++) {
        const count =
          kind === "tulip"
            ? 3
            : kind === "cosmos"
              ? 10
              : kind === "aurora"
                ? 7
                : 6 + l * 3;
        for (let j = 0; j < count; j++)
          parts.push({
            angle: (j / count) * Math.PI * 2 + l * 1.63,
            tilt:
              kind === "tulip"
                ? 0.38 + l * 0.3
                : kind === "cosmos"
                  ? 1.34
                  : 0.28 + (l / (layers - 1)) * 1.1,
            size: kind === "cosmos" ? 0.94 : 0.42 + l * 0.14,
            radius: l * 0.05,
          });
      }
      const petals = new T.InstancedMesh(
        geos[i % 5],
        materials[i % materials.length].clone(),
        parts.length,
      );
      petals.instanceMatrix.setUsage(T.DynamicDrawUsage);
      petals.frustumCulled = false;
      petals.boundingSphere = new T.Sphere(v(0, 0.5, 0), 2);
      petals.userData.flower = i;
      group.add(petals);
      const center = new T.Mesh(
        new T.SphereGeometry(kind === "cosmos" ? 0.17 : 0.16, 16, 10),
        innerLight,
      );
      center.scale.y = 0.7;
      if (hero) {
        const light = new T.PointLight(0xffc14c, 1.8, 2.1, 1.5);
        light.position.set(0, 0.27, 0.1);
        group.add(light);
        // Small luminous filaments remain geometry even without postprocessing.
        for (let f = 0; f < 5; f++) {
          const a = (f / 5) * Math.PI * 2;
          group.add(
            tube(
              [
                v(0, 0.08, 0),
                v(Math.sin(a) * 0.12, 0.35, Math.cos(a) * 0.12),
                v(Math.sin(a) * 0.22, 0.24, Math.cos(a) * 0.22),
              ],
              0.014,
              innerLight,
              12,
            ),
          );
        }
      }
      center.position.y = 0.11;
      group.add(center);
      if (kind === "cosmos" || kind === "aurora") {
        const stamens = new T.InstancedMesh(
          new T.SphereGeometry(0.024, 5, 4),
          gold,
          18,
        );
        for (let s = 0; s < 18; s++) {
          const a = s * 2.4,
            r = Math.sqrt(s / 18) * 0.14;
          this.dummy.position.set(
            Math.cos(a) * r,
            0.14 + Math.sin(s) * 0.02,
            Math.sin(a) * r,
          );
          this.dummy.rotation.set(0, 0, 0);
          this.dummy.scale.setScalar(1);
          this.dummy.updateMatrix();
          stamens.setMatrixAt(s, this.dummy.matrix);
        }
        group.add(stamens);
      }
      // Calyx and converging curved stems make a single tied bouquet.
      const calyx = new T.Mesh(new T.ConeGeometry(0.23, 0.37, 5), stem);
      calyx.rotation.z = Math.PI;
      calyx.position.y = -0.12;
      group.add(calyx);
      const stalk = tube(
        [
          v(-x * 0.05, -2.45, z * 0.06),
          v(x * 0.28, -0.65, z * 0.3),
          v(x, y - 0.1, z),
        ],
        0.026,
        stem,
      );
      this.stems.push(stalk);
      this.root.add(stalk);
      const lg = new T.Mesh(leafGeometry, leaf);
      lg.position.set(x * 0.57, -0.1 + Math.sin(i) * 0.35, z * 0.5);
      lg.rotation.set(0.4, i * 1.3, -x * 0.5);
      lg.scale.set(0.65, 0.85, 0.65);
      this.root.add(lg);
      this.root.add(
        tube(
          [lg.position.clone(), lg.localToWorld(v(0, 0.55, 0.11))],
          0.008,
          stem,
          8,
        ),
      );
      this.flowers.push({
        group,
        petals,
        parts,
        delay: i * 0.052,
        id: i,
        selected: -100,
        baseX: group.rotation.x,
      });
    }
    materials.forEach((m) => m.dispose());
    this.wrapping(gold);
    const stars = new Float32Array((innerWidth < 700 ? 220 : 500) * 3);
    for (let i = 0; i < stars.length; i += 3) {
      stars[i] = Math.sin(i * 37.7) * 8;
      stars[i + 1] = Math.cos(i * 13.2) * 6;
      stars[i + 2] = -4 + Math.sin(i * 7.3) * 6;
    }
    this.particles = new T.Points(
      new T.BufferGeometry().setAttribute(
        "position",
        new T.BufferAttribute(stars, 3),
      ),
      new T.PointsMaterial({
        color: 0xf4d39d,
        size: 0.021,
        transparent: true,
        opacity: 0.65,
        depthWrite: false,
      }),
    );
    this.particles.visible = !this.minimal;
    this.halo.visible = !this.minimal;
    this.scene.add(this.particles);
    const hp: T.Vector3[] = [];
    for (let i = 0; i < 100; i++) {
      const a = (i / 99) * Math.PI * 2;
      hp.push(
        v(
          (16 * Math.sin(a) ** 3) / 12,
          (13 * Math.cos(a) -
            5 * Math.cos(2 * a) -
            2 * Math.cos(3 * a) -
            Math.cos(4 * a)) /
            12 +
            3.8,
          Math.sin(a * 2) * 0.25,
        ),
      );
    }
    const hg = new T.BufferGeometry().setFromPoints(hp);
    this.spark = new T.Points(
      hg,
      new T.PointsMaterial({
        color: 0xffd99d,
        size: 0.065,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    );
    this.heart.add(this.spark);
    this.heart.add(
      new T.Line(
        hg,
        new T.LineBasicMaterial({
          color: 0xecc99c,
          transparent: true,
          opacity: 0,
        }),
      ),
    );
    this.scene.add(this.heart);
    // Signature detail: two intertwined golden orbits, like a tiny armillary love seal.
    const seal = new T.Group();
    for (let i = 0; i < 2; i++) {
      const ring = new T.Mesh(new T.TorusGeometry(0.19, 0.012, 6, 48), gold);
      ring.rotation.y = i ? 0.75 : -0.75;
      ring.rotation.x = 0.3;
      seal.add(ring);
    }
    seal.position.set(0.34, -1.84, 0.66);
    this.root.add(seal);
    this.observer = new ResizeObserver(() => this.resize());
    this.observer.observe(host);
    this.resize();
    host.addEventListener("pointerdown", this.pointerDown);
    host.addEventListener("pointerup", this.pointerUp);
    host.addEventListener("dblclick", this.reset);
    const visibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(this.frame);
        this.frame = 0;
      } else if (!this.disposed && !this.frame) this.animate();
    };
    document.addEventListener("visibilitychange", visibility);
    this.resumeCleanup = () =>
      document.removeEventListener("visibilitychange", visibility);
    this.animate();
  }
  private wrapping(gold: T.Material) {
    const satin = new T.MeshPhysicalMaterial({
      color: 0x152c4d,
      metalness: 0.25,
      roughness: 0.37,
      side: T.DoubleSide,
      clearcoat: 0.65,
    });
    for (let layer = 0; layer < 2; layer++) {
      const pos: number[] = [],
        ix: number[] = [];
      const n = 72;
      for (let j = 0; j <= 18; j++)
        for (let i = 0; i <= n; i++) {
          const t = j / 18,
            a = (i / n) * Math.PI * 2,
            r =
              0.26 +
              t * (1.68 + layer * 0.2) +
              Math.sin(a * 7 + t * 2) * t * 0.12;
          pos.push(
            Math.cos(a) * r,
            -2.35 +
              t * (2.6 + layer * 0.23) +
              t * t * (0.22 * Math.sin(a * 3 + 0.7)),
            Math.sin(a) * r * 0.7,
          );
        }
      for (let j = 0; j < 18; j++)
        for (let i = 0; i < n; i++) {
          const a = j * (n + 1) + i;
          ix.push(a, a + 1, a + n + 1, a + 1, a + n + 2, a + n + 1);
        }
      const g = new T.BufferGeometry();
      g.setAttribute("position", new T.Float32BufferAttribute(pos, 3));
      g.setIndex(ix);
      g.computeVertexNormals();
      const paper = new T.Mesh(
        g,
        layer === 0
          ? satin
          : new T.MeshPhysicalMaterial({
              color: 0x9dabbc,
              metalness: 0.2,
              roughness: 0.45,
              side: T.DoubleSide,
              transparent: true,
              opacity: 0.6,
            }),
      );
      this.root.add(paper);
      const edge: T.Vector3[] = [];
      for (let i = 0; i <= n; i++) {
        const a = 18 * (n + 1) * 3 + i * 3;
        edge.push(v(pos[a], pos[a + 1], pos[a + 2]));
      }
      this.root.add(tube(edge, 0.012, gold, 72));
    }
    const silk = new T.MeshPhysicalMaterial({
      color: 0xdab48c,
      metalness: 0.55,
      roughness: 0.28,
      side: T.DoubleSide,
      clearcoat: 0.7,
    });
    for (const s of [-1, 1]) {
      this.root.add(
        ribbon(
          [
            v(0, -1.65, 0.55),
            v(s * 0.8, -1.15, 0.65),
            v(s * 0.94, -1.7, 0.45),
            v(0, -1.7, 0.6),
          ],
          0.22,
          silk,
        ),
      );
      this.root.add(
        ribbon(
          [
            v(s * 0.07, -1.72, 0.6),
            v(s * 0.32, -2.2, 0.76),
            v(s * 0.48, -2.72, 0.73),
            v(s * 0.8, -2.65, 0.62),
          ],
          0.23,
          silk,
        ),
      );
    }
    const knot = new T.Mesh(new T.TorusGeometry(0.2, 0.08, 8, 24), silk);
    knot.scale.set(0.7, 1, 0.6);
    knot.position.set(0, -1.67, 0.6);
    this.root.add(knot);
  }
  private resize() {
    const w = this.host.clientWidth,
      h = this.host.clientHeight;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.fov = w / h < 0.7 ? 49 : 38;
    this.camera.updateProjectionMatrix();
  }
  private pointerDown = (e: PointerEvent) => {
    this.down = { x: e.clientX, y: e.clientY };
  };
  private pointerUp = (e: PointerEvent) => {
    if (
      !this.active ||
      Math.hypot(e.clientX - this.down.x, e.clientY - this.down.y) > 8
    )
      return;
    const r = this.host.getBoundingClientRect();
    this.ray.setFromCamera(
      new T.Vector2(
        ((e.clientX - r.left) / r.width) * 2 - 1,
        (-(e.clientY - r.top) / r.height) * 2 + 1,
      ),
      this.camera,
    );
    const hit = this.ray.intersectObjects(
      this.flowers.map((f) => f.petals),
      false,
    )[0];
    if (hit) this.selectFlower(hit.object.userData.flower as number);
  };
  reset = () => {
    this.camera.position.set(0, 1.2, 11.5);
    this.controls.target.set(0, 0.2, 0);
    this.controls.update();
  };
  selectFlower(id: number) {
    if (!this.active) return;
    this.flowers[id].selected = performance.now();
    this.halo.position.copy(this.flowers[id].group.position);
    this.halo.position.z += 0.3;
    this.halo.userData.start = performance.now();
    this.visited.add(id);
    this.onFlower(id, this.visited.size);
    if (!this.minimal && this.visited.size >= 5 && !this.heartStart) {
      this.heartStart = performance.now();
      this.onSecret();
    }
  }
  bloom() {
    this.active = true;
    this.start = performance.now();
    this.reset();
    this.cinematic = !this.reduced;
  }
  private animate = () => {
    if (this.disposed) return;
    this.frame = requestAnimationFrame(this.animate);
    const now = performance.now(),
      t = (now - this.start) / 1000;
    for (const f of this.flowers) {
      const open = this.active
        ? this.reduced
          ? 1
          : clamp((t - f.delay) / 2.7, 0, 1)
        : 0;
      const pulse = Math.max(0, 1 - (now - f.selected) / 1800);
      const mat = f.petals.material as T.MeshPhysicalMaterial;
      mat.emissive.set(0xffb15e);
      mat.emissiveIntensity = 0.025 + pulse * 0.18;
      f.group.rotation.x =
        f.baseX + (this.reduced ? 0 : Math.sin(t * 0.6 + f.id) * 0.018);
      f.parts.forEach((p, i) => {
        const d = this.dummy;
        d.position.set(
          Math.sin(p.angle) * p.radius,
          0.01,
          Math.cos(p.angle) * p.radius,
        );
        d.rotation.set(0, p.angle, 0);
        const layerOpen = clamp(
          (open - (1 - p.tilt / 1.5) * 0.16) / 0.84,
          0,
          1,
        );
        d.rotateX(
          0.035 +
            layerOpen * layerOpen * (3 - 2 * layerOpen) * p.tilt +
            pulse * 0.1,
        );
        d.scale.setScalar(p.size);
        d.updateMatrix();
        f.petals.setMatrixAt(i, d.matrix);
      });
      f.petals.instanceMatrix.needsUpdate = true;
      f.group.visible = this.active;
    }
    for (const stalk of this.stems)
      stalk.geometry.setDrawRange(
        0,
        Math.floor(
          (clamp(t / 1.8, 0, 1) * (stalk.geometry.index?.count || 0)) / 3,
        ) * 3,
      );
    if (!this.reduced) this.particles.rotation.y = t * 0.012;
    if (this.heartStart) {
      const q = clamp((now - this.heartStart) / 2200, 0, 1);
      const points = this.spark.geometry.attributes.position;
      this.heart.position.y = (1 - q) * -3;
      this.heart.scale.setScalar(0.3 + q * 0.7);
      for (const obj of this.heart.children)
        (obj as T.Points).material instanceof T.Material &&
          ((
            (obj as T.Points).material as T.Material & { opacity: number }
          ).opacity = q * 0.85);
      this.spark.geometry.setDrawRange(0, Math.floor(points.count * q));
    }
    if (this.halo.userData.start) {
      const h = clamp((now - this.halo.userData.start) / 1800, 0, 1);
      this.halo.scale.setScalar(0.6 + h);
      this.halo.rotation.y = h * 2;
      (
        this.halo.children[0] as T.Points<T.BufferGeometry, T.PointsMaterial>
      ).material.opacity = (1 - h) * 0.9;
    }
    if (this.cinematic && this.active) {
      const q = clamp(t / 4, 0, 1),
        ease = q * q * (3 - 2 * q);
      this.camera.position.set(
        0.65 * (1 - ease),
        1.2 + (1 - ease) * 0.6,
        13.2 - ease * 1.7,
      );
      if (q === 1) this.cinematic = false;
    }
    const dt = now - this.frameTime;
    this.frameTime = now;
    if (dt > 42) this.slowFrames++;
    if (this.slowFrames === 120) {
      // Fall back to pearlescent coated glass on slower devices.
      this.scene.traverse((o) => {
        if (o instanceof T.Mesh) {
          const mats = Array.isArray(o.material) ? o.material : [o.material];
          for (const m of mats)
            if (m instanceof T.MeshPhysicalMaterial && m.transmission > 0) {
              m.transmission = 0;
              m.roughness = 0.14;
              m.needsUpdate = true;
            }
        }
      });
      this.renderer.setPixelRatio(1);
      this.resize();
      this.slowFrames++;
    }
    this.backdrop.tick((now - this.ambientStart) / 1000, this.renderer.getPixelRatio());
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };
  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.frame);
    this.observer.disconnect();
    this.resumeCleanup();
    this.controls.dispose();
    this.host.removeEventListener("pointerdown", this.pointerDown);
    this.host.removeEventListener("pointerup", this.pointerUp);
    this.host.removeEventListener("dblclick", this.reset);
    const geometries = new Set<T.BufferGeometry>(),
      materials = new Set<T.Material>();
    this.scene.traverse((o) => {
      if (o instanceof T.Mesh || o instanceof T.Points || o instanceof T.Line) {
        geometries.add(o.geometry);
        for (const m of Array.isArray(o.material) ? o.material : [o.material])
          materials.add(m);
      }
    });
    geometries.forEach((g) => g.dispose());
    materials.forEach((m) => m.dispose());
    this.environment?.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
