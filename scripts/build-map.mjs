// Gera src/data/africaMap.ts a partir do Natural Earth (world-atlas 110m).
import { readFileSync, writeFileSync } from "node:fs";
import { geoGraticule, geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";

const topo = JSON.parse(readFileSync(new URL("./countries-110m.json", import.meta.url)));
const collection = feature(topo, topo.objects.countries);

const AFRICA = new Set([
  "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon",
  "Central African Republic", "Chad", "Congo", "Dem. Rep. Congo", "Djibouti", "Egypt",
  "Equatorial Guinea", "Eritrea", "eSwatini", "Ethiopia", "Gabon", "Gambia", "Ghana",
  "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya",
  "Madagascar", "Malawi", "Mali", "Mauritania", "Morocco", "Mozambique", "Namibia",
  "Niger", "Nigeria", "Rwanda", "Senegal", "Sierra Leone", "Somalia", "Somaliland",
  "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda",
  "W. Sahara", "Zambia", "Zimbabwe",
]);

const africaFeatures = collection.features.filter(
  (f) => AFRICA.has(f.properties.name) && f.properties.name !== "Zimbabwe",
);
const zimbabweFeature = collection.features.find((f) => f.properties.name === "Zimbabwe");

const W = 1000;
const H = 1000;

// Continente africano
const projection = geoMercator().fitExtent(
  [
    [26, 30],
    [W - 26, H - 34],
  ],
  { type: "FeatureCollection", features: [...africaFeatures, zimbabweFeature] },
);
const path = geoPath(projection);

const countries = africaFeatures
  .map((f) => ({
    name: f.properties.name,
    d: path(f),
    c: path.centroid(f),
  }))
  .filter((c) => c.d)
  .map((c) => ({
    name: c.name,
    d: c.d.replace(/\.\d+/g, (n) => n.slice(0, 4)),
    cx: Math.round(c.c[0] * 10) / 10,
    cy: Math.round(c.c[1] * 10) / 10,
  }));

const graticule = geoGraticule().extent([[-25, -40], [58, 40]]).step([15, 15]);
const graticulePath = path(graticule()).replace(/\.\d+/g, (n) => n.slice(0, 3));

const zimbabweD = path(zimbabweFeature);
const zBounds = path.bounds(zimbabweFeature);

// Projeção isolada do Zimbábue (para o mapa de lugares)
const ZW = 900;
const ZH = 620;
const zwProjection = geoMercator().fitExtent(
  [
    [40, 40],
    [ZW - 40, ZH - 40],
  ],
  zimbabweFeature,
);
const zwPath = geoPath(zwProjection);

const PLACES = [
  ["Victoria Falls", 25.857, -17.924],
  ["Hwange", 26.5, -18.75],
  ["Matobo", 28.5, -20.5],
  ["Great Zimbabwe", 30.93, -20.27],
  ["Mana Pools", 29.35, -15.75],
  ["Nyanga", 32.75, -18.22],
  ["Kariba", 27.9, -16.9],
  ["Harare", 31.05, -17.83],
  ["Chinhoyi", 30.13, -17.35],
  ["Gonarezhou", 31.7, -21.4],
];

const points = PLACES.map(([name, lon, lat]) => {
  const [x, y] = zwProjection([lon, lat]);
  return { name, x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
});

const out = `// Gerado por scripts/build-map.mjs — Natural Earth (world-atlas 110m). Não editar à mão.
export type MapCountry = { name: string; d: string; cx: number; cy: number };

export const AFRICA_VIEWBOX = "0 0 ${W} ${H}";

export const ZIMBABWE_ZOOM = {
  x: ${Math.round(zBounds[0][0] - 40)},
  y: ${Math.round(zBounds[0][1] - 40)},
  w: ${Math.round(zBounds[1][0] - zBounds[0][0] + 80)},
  h: ${Math.round(zBounds[1][1] - zBounds[0][1] + 80)},
};

export const ZIMBABWE_CENTER = {
  x: ${Math.round(((zBounds[0][0] + zBounds[1][0]) / 2) * 10) / 10},
  y: ${Math.round(((zBounds[0][1] + zBounds[1][1]) / 2) * 10) / 10},
};

export const ZIMBABWE_PATH = "${zimbabweD}";

export const AFRICA_COUNTRIES: MapCountry[] = ${JSON.stringify(countries)};

export const GRATICULE_PATH = "${graticulePath}";

export const ZIMBABWE_MAP = {
  viewBox: "0 0 ${ZW} ${ZH}",
  outline: "${zwPath(zimbabweFeature)}",
  points: ${JSON.stringify(points)},
};
`;

writeFileSync(new URL("../src/data/africaMap.ts", import.meta.url), out);
console.log(
  `ok: ${countries.length} países, Zimbábue em ${Math.round(zBounds[0][0])},${Math.round(zBounds[0][1])}`,
);
