// Deterministic generators for the handmade-paper look: torn (deckle) edges and paper fibres.

function rng(seed) {
  let s = seed % 2147483647 || 1;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/** clip-path polygon with ragged, hand-torn edges. `depth` is in px, so it stays fine on any size. */
export function deckle(seed = 1, { steps = 64, depth = 3.2 } = {}) {
  const r = rng(seed);
  const j = () => {
    const nick = r() < 0.06 ? 1.9 : 1; // occasional deeper tear
    return (r() * depth * nick).toFixed(2);
  };
  const p = (i) => ((i / steps) * 100).toFixed(2);
  const pts = [];
  for (let i = 0; i < steps; i++) pts.push(`${p(i)}% ${j()}px`);
  for (let i = 0; i < steps; i++) pts.push(`calc(100% - ${j()}px) ${p(i)}%`);
  for (let i = steps; i > 0; i--) pts.push(`${p(i)}% calc(100% - ${j()}px)`);
  for (let i = steps; i > 0; i--) pts.push(`${j()}px ${p(i)}%`);
  return `polygon(${pts.join(",")})`;
}

/** Tileable SVG of loose fibres and specks, like cotton-rag handmade paper. */
function fibreTile(seed = 7, size = 360) {
  const r = rng(seed);
  const tones = ["#6e4f33", "#8a6a48", "#a3835c", "#fff6e2"];
  let out = "";
  for (let i = 0; i < 110; i++) {
    const x = r() * size;
    const y = r() * size;
    const len = 5 + r() * 22;
    const a = r() * Math.PI * 2;
    const x2 = x + Math.cos(a) * len;
    const y2 = y + Math.sin(a) * len;
    const cx = (x + x2) / 2 + (r() - 0.5) * 8;
    const cy = (y + y2) / 2 + (r() - 0.5) * 8;
    const c = tones[Math.floor(r() * tones.length)];
    const o = (0.12 + r() * 0.28).toFixed(2);
    const w = (0.35 + r() * 0.6).toFixed(2);
    out += `<path d='M${x.toFixed(1)} ${y.toFixed(1)}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}' stroke='${c}' stroke-opacity='${o}' stroke-width='${w}' fill='none' stroke-linecap='round'/>`;
  }
  for (let i = 0; i < 34; i++) {
    const o = (0.15 + r() * 0.35).toFixed(2);
    out += `<circle cx='${(r() * size).toFixed(1)}' cy='${(r() * size).toFixed(1)}' r='${(0.3 + r() * 1.1).toFixed(2)}' fill='#4a3220' fill-opacity='${o}'/>`;
  }
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'>${out}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

export const FIBRES = fibreTile();

export const SHEET_CLIP = deckle(11);
export const UNDER_CLIP_A = deckle(23);
export const UNDER_CLIP_B = deckle(37);
export const SLIP_CLIP = deckle(5, { steps: 40, depth: 2.6 });
export const TAG_CLIPS = Array.from({ length: 8 }, (_, i) => deckle(50 + i * 13, { steps: 14, depth: 1.6 }));
