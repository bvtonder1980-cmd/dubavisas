// Generates a seamless six-fold "jali" lattice tile with sharp pointed petals.
// Output: public/images/jali-gold-sharp.svg
import { writeFileSync } from "node:fs"

const R = 30 // flower radius (center to petal tip)
// Hex tiling: flowers on a triangular lattice so petal tips meet.
// Horizontal spacing = R * sqrt(3), vertical = R * 1.5 with column offset.
const dx = R * Math.sqrt(3)
const dy = R * 1.5

// Tile that repeats seamlessly: width = 2*dx, height = 2*dy
const W = 2 * dx
const H = 2 * dy

function petal(cx, cy, angleDeg) {
  const a = (angleDeg * Math.PI) / 180
  const tip = [cx + R * Math.cos(a), cy + R * Math.sin(a)]
  // shoulder points: narrow, pointed petal
  const sA = a - (16 * Math.PI) / 180
  const sB = a + (16 * Math.PI) / 180
  const sr = R * 0.42
  const sh1 = [cx + sr * Math.cos(sA), cy + sr * Math.sin(sA)]
  const sh2 = [cx + sr * Math.cos(sB), cy + sr * Math.sin(sB)]
  const f = (n) => n.map((v) => v.toFixed(2)).join(",")
  // diamond: center -> shoulder1 -> tip -> shoulder2 -> close (sharp points at center & tip)
  return `M${f([cx, cy])} L${f(sh1)} L${f(tip)} L${f(sh2)} Z`
}

function flower(cx, cy) {
  let d = ""
  for (let i = 0; i < 6; i++) d += petal(cx, cy, i * 60) + " "
  return d
}

// Place flowers across an area larger than the tile, then rely on tiling overlap.
const centers = []
for (let row = -1; row <= 3; row++) {
  for (let col = -1; col <= 3; col++) {
    const cx = col * dx + (row % 2 ? dx / 2 : 0)
    const cy = row * dy
    centers.push([cx, cy])
  }
}

const paths = centers.map(([cx, cy]) => `<path d="${flower(cx, cy)}"/>`).join("\n  ")

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W.toFixed(2)}" height="${H.toFixed(2)}" viewBox="0 0 ${W.toFixed(2)} ${H.toFixed(2)}">
  <g fill="none" stroke="#b8893b" stroke-width="1.4" stroke-linejoin="miter">
  ${paths}
  </g>
</svg>
`

writeFileSync(new URL("../public/images/jali-gold-sharp.svg", import.meta.url), svg)
console.log("[v0] wrote jali-gold-sharp.svg", { W, H, flowers: centers.length })
