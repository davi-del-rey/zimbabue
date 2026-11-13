import { ZIMBABWE_MAP } from "../data/africaMap";

type Props = { active: string | null; onSelect: (id: string) => void };

const LABELS: Record<string, { dx: number; dy: number; anchor: "start" | "middle" | "end" }> = {
  "Victoria Falls": { dx: 16, dy: 5, anchor: "start" },
  Hwange: { dx: 16, dy: 18, anchor: "start" },
  Matobo: { dx: 16, dy: 5, anchor: "start" },
  "Great Zimbabwe": { dx: 16, dy: 20, anchor: "start" },
  "Mana Pools": { dx: 0, dy: -16, anchor: "middle" },
  Nyanga: { dx: -16, dy: -8, anchor: "end" },
  Kariba: { dx: -16, dy: -6, anchor: "end" },
  Harare: { dx: 16, dy: 0, anchor: "start" },
  Chinhoyi: { dx: -14, dy: -10, anchor: "end" },
  Gonarezhou: { dx: 16, dy: 16, anchor: "start" },
};

const SHORT: Record<string, string> = {
  "Victoria Falls": "Victoria Falls",
  Hwange: "Hwange",
  Matobo: "Matobo",
  "Great Zimbabwe": "Grande Zimbábue",
  "Mana Pools": "Mana Pools",
  Nyanga: "Nyanga",
  Kariba: "Kariba",
  Harare: "Harare",
  Chinhoyi: "Chinhoyi",
  Gonarezhou: "Gonarezhou",
};

export function ZimbabweMap({ active, onSelect }: Props) {
  return (
    <div className="map-panel">
      <svg viewBox={ZIMBABWE_MAP.viewBox} role="img" aria-label="Mapa do Zimbábue com os principais lugares destacados">
        <defs>
          <pattern id="zw-dots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#ff6a2b" opacity="0.35" />
          </pattern>
          <linearGradient id="zw-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffe29a" />
            <stop offset="100%" stopColor="#ffc63f" />
          </linearGradient>
        </defs>

        <path d={ZIMBABWE_MAP.outline} fill="url(#zw-fill)" stroke="#24110c" strokeWidth="2.4" strokeLinejoin="round" />
        <path d={ZIMBABWE_MAP.outline} fill="url(#zw-dots)" stroke="none" />

        {ZIMBABWE_MAP.points.map((p) => {
          const l = LABELS[p.name] ?? { dx: 14, dy: 4, anchor: "start" as const };
          const isActive = active === p.name;
          return (
            <g
              key={p.name}
              className={`zw-pin${isActive ? " is-active" : ""}`}
              onClick={() => onSelect(p.name)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(p.name);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Ver ${SHORT[p.name] ?? p.name}`}
              aria-pressed={isActive}
            >
              <circle cx={p.x} cy={p.y} r="22" fill="transparent" />
              <circle cx={p.x} cy={p.y} r={isActive ? 13 : 10} fill="#fffdf9" stroke="#24110c" strokeWidth="2.4" />
              <circle className="dot" cx={p.x} cy={p.y} r={isActive ? 6.5 : 4.5} fill={isActive ? "#ff6a2b" : "#ff87b7"} />
              <text x={p.x + l.dx} y={p.y + l.dy} textAnchor={l.anchor} style={{ fontWeight: isActive ? 600 : 400 }}>
                {SHORT[p.name] ?? p.name}
              </text>
            </g>
          );
        })}

        <g transform="translate(820 60)" aria-hidden="true">
          <circle r="20" fill="none" stroke="#24110c" strokeWidth="1" opacity="0.5" />
          <path d="M0 -14 L5 6 L0 2 L-5 6 Z" fill="#24110c" />
          <text y="30" textAnchor="middle" style={{ fontSize: 11, letterSpacing: "0.2em", fill: "#24110c" }}>
            N
          </text>
        </g>
      </svg>
    </div>
  );
}
