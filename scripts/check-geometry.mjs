// CPU verification; this cannot validate GPU rendering or visual composition.
import { readFileSync } from "node:fs";
import ts from "typescript";
import assert from "node:assert/strict";
const src = readFileSync(
  new URL("../src/FlowerGeometry.ts", import.meta.url),
  "utf8",
);
const js = ts
  .transpileModule(src, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
  })
  .outputText.replace(/from ['"]three['"]/, `from '${import.meta.resolve("three")}'`);
const { petalGeometry } = await import(
  "data:text/javascript;base64," + Buffer.from(js).toString("base64")
);
const bounds = [];
for (const kind of ["rose", "peony", "tulip", "cosmos", "aurora"]) {
  const g = petalGeometry(kind);
  g.computeBoundingBox();
  assert.equal(g.attributes.position.count, 330);
  assert.equal(g.attributes.normal.count, 330);
  for (const attr of ["position", "normal", "color"])
    for (const n of g.attributes[attr].array)
      assert(Number.isFinite(n), `${kind}: invalid ${attr}`);
  for (const index of g.index.array) assert(index < 330);
  assert(g.boundingBox.max.z - g.boundingBox.min.z > 0.1);
  assert(g.boundingBox.max.x - g.boundingBox.min.x > 0.3);
  bounds.push(JSON.stringify(g.attributes.position.array));
  console.log(
    `${kind}: ${g.attributes.position.count} vertices, ${g.index.count / 3} triangles, finite positions / colors / normals`,
  );
  g.dispose();
}
assert.equal(
  new Set(bounds).size,
  5,
  "Five flower types must have distinct geometry",
);
const config = JSON.parse(
  readFileSync(new URL("../public/gift-config.json", import.meta.url), "utf8"),
);
assert(config.messages.length >= 15);
assert(config.palette.length >= 5);
assert(config.palette.every((c) => /^#[0-9a-f]{6}$/i.test(c)));
const html = readFileSync(
  new URL("../dist/index.html", import.meta.url),
  "utf8",
);
assert(html.includes("/eternal-bloom/assets/"));
assert(!html.includes("http://"));
console.log(
  "PASS: 5 distinct thick 3D petal surfaces; configuration; production base paths.",
);
