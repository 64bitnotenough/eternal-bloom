import * as T from "three";
export type Species = "rose" | "peony" | "tulip" | "cosmos" | "aurora";
export function petalGeometry(kind: Species) {
  const p: number[] = [],
    c: number[] = [],
    idx: number[] = [];
  const nx = 10,
    ny = 14;
  // Two curved skins joined at every edge give the petal real thickness.
  for (let side = 0; side < 2; side++)
    for (let j = 0; j <= ny; j++)
      for (let i = 0; i <= nx; i++) {
        const t = j / ny,
          u = (i / nx) * 2 - 1;
        const width =
          kind === "cosmos"
            ? 0.28
            : kind === "tulip"
              ? 0.58
              : kind === "aurora"
                ? 0.25
                : kind === "peony"
                  ? 0.65
                  : 0.53;
        const profile =
          Math.pow(Math.sin(Math.PI * t), kind === "aurora" ? 0.9 : 0.58) *
          (kind === "peony" ? 1 + 0.09 * Math.sin(t * 28) : 1);
        const ruffle = Math.sin(u * 8.5 + t * 5) * Math.pow(t, 2.5);
        const x = u * width * profile * (1 + 0.045 * ruffle);
        const y = t * (kind === "tulip" ? 1.25 : 1) + 0.035 * ruffle;
        const z =
          (kind === "rose" ? 0.42 : kind === "tulip" ? 0.12 : 0.29) * t * t +
          0.22 * u * u * profile +
          (kind === "peony" ? 0.075 : 0.025) * Math.sin(t * 17 + u * 4) * t +
          0.075 * Math.sin(u * 10 + t * 4) * Math.pow(t, 3) +
          (side === 0 ? 1 : -1) * (0.018 + 0.009 * Math.abs(u));
        p.push(x, y, z);
        // Peach in the folds, pearl at the tips.
        const shade = 0.84 + 0.16 * t;
        c.push(1, shade * (0.89 + 0.11 * t), shade * (0.87 + 0.13 * t));
      }
  const n = (nx + 1) * (ny + 1);
  for (let s = 0; s < 2; s++)
    for (let j = 0; j < ny; j++)
      for (let i = 0; i < nx; i++) {
        const a = s * n + j * (nx + 1) + i,
          b = a + 1,
          d = a + nx + 1,
          e = d + 1;
        if (s === 0) idx.push(a, b, d, b, e, d);
        else idx.push(a, d, b, b, d, e);
      }
  const edge: number[] = [];
  for (let i = 0; i <= nx; i++) edge.push(i);
  for (let j = 1; j <= ny; j++) edge.push(j * (nx + 1) + nx);
  for (let i = nx - 1; i >= 0; i--) edge.push(ny * (nx + 1) + i);
  for (let j = ny - 1; j > 0; j--) edge.push(j * (nx + 1));
  edge.forEach((a, i) => {
    const b = edge[(i + 1) % edge.length];
    idx.push(a, a + n, b, b, a + n, b + n);
  });
  const g = new T.BufferGeometry();
  g.setAttribute("position", new T.Float32BufferAttribute(p, 3));
  g.setAttribute("color", new T.Float32BufferAttribute(c, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}
export function tube(
  points: T.Vector3[],
  radius: number,
  material: T.Material,
  segments = 22,
) {
  return new T.Mesh(
    new T.TubeGeometry(
      new T.CatmullRomCurve3(points),
      segments,
      radius,
      5,
      false,
    ),
    material,
  );
}
export function ribbon(
  points: T.Vector3[],
  width: number,
  material: T.Material,
) {
  const curve = new T.CatmullRomCurve3(points),
    p: number[] = [],
    ix: number[] = [];
  for (let i = 0; i <= 64; i++) {
    const t = i / 64,
      v = curve.getPoint(t),
      tan = curve.getTangent(t);
    const n = new T.Vector3(-tan.y, tan.x, 0.28 * Math.sin(t * 6)).normalize();
    for (const sign of [-1, 1]) {
      const q = v.clone().addScaledVector(n, (sign * width) / 2);
      p.push(q.x, q.y, q.z);
    }
  }
  for (let i = 0; i < 64; i++) {
    const a = i * 2;
    ix.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  const g = new T.BufferGeometry();
  g.setAttribute("position", new T.Float32BufferAttribute(p, 3));
  g.setIndex(ix);
  g.computeVertexNormals();
  return new T.Mesh(g, material);
}
