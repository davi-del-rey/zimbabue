import { useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  AFRICA_COUNTRIES,
  AFRICA_VIEWBOX,
  GRATICULE_PATH,
  ZIMBABWE_CENTER,
  ZIMBABWE_PATH,
  ZIMBABWE_ZOOM,
} from "../data/africaMap";

type Props = { onEnter: () => void; zoomed: boolean };

const TINTS = [
  "var(--paper)",
  "rgba(255, 226, 154, 0.55)",
  "var(--paper)",
  "rgba(255, 211, 228, 0.5)",
  "var(--paper)",
  "rgba(255, 198, 63, 0.28)",
];

const FRIENDLY: Record<string, string> = {
  "W. Sahara": "Saara Ocidental",
  "Dem. Rep. Congo": "Rep. Dem. do Congo",
  "Central African Republic": "Rep. Centro-Africana",
  "Equatorial Guinea": "Guiné Equatorial",
  "Ivory Coast": "Costa do Marfim",
  "South Sudan": "Sudão do Sul",
  "Somaliland": "Somalilândia",
  eSwatini: "Essuatíni",
  Congo: "Congo",
  Chad: "Chade",
  Egypt: "Egito",
  Libya: "Líbia",
  Sudan: "Sudão",
  Tunisia: "Tunísia",
  Algeria: "Argélia",
  Morocco: "Marrocos",
  Mauritania: "Mauritânia",
  Mali: "Mali",
  Niger: "Níger",
  Senegal: "Senegal",
  Gambia: "Gâmbia",
  "Guinea-Bissau": "Guiné-Bissau",
  Guinea: "Guiné",
  "Sierra Leone": "Serra Leoa",
  Liberia: "Libéria",
  "Burkina Faso": "Burquina Fasso",
  Ghana: "Gana",
  Togo: "Togo",
  Benin: "Benim",
  Nigeria: "Nigéria",
  Cameroon: "Camarões",
  Gabon: "Gabão",
  Eritrea: "Eritreia",
  Djibouti: "Djibuti",
  Ethiopia: "Etiópia",
  Somalia: "Somália",
  Kenya: "Quênia",
  Uganda: "Uganda",
  Rwanda: "Ruanda",
  Burundi: "Burundi",
  Tanzania: "Tanzânia",
  Zambia: "Zâmbia",
  Malawi: "Malaui",
  Mozambique: "Moçambique",
  Angola: "Angola",
  Namibia: "Namíbia",
  Botswana: "Botsuana",
  "South Africa": "África do Sul",
  Lesotho: "Lesoto",
  Madagascar: "Madagascar",
  Zimbabwe: "Zimbábue",
};

export function AfricaMap({ onEnter, zoomed }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);
  const reduce = useReducedMotion();

  const scale = useMemo(() => 1000 / ZIMBABWE_ZOOM.w / 1.12, []);
  const transform = zoomed
    ? `translate(500px, 500px) scale(${scale.toFixed(3)}) translate(${-ZIMBABWE_CENTER.x}px, ${-ZIMBABWE_CENTER.y}px)`
    : "translate(0px, 0px) scale(1)";

  const labelX = (ZIMBABWE_CENTER.x / 1000) * 100;
  const labelY = (ZIMBABWE_CENTER.y / 1000) * 100;

  return (
    <div className="entrance__map">
      <p className="map-readout" aria-live="polite">
        {hovered ? (
          <>
            <span aria-hidden="true">◎</span>
            <strong>{FRIENDLY[hovered] ?? hovered}</strong>
          </>
        ) : (
          "Passeie pelo continente"
        )}
      </p>

      <div className="map-shell">
        <svg
          className="africa-svg"
          viewBox={AFRICA_VIEWBOX}
          role="img"
          aria-label="Mapa da África. O Zimbábue, no sul do continente, está destacado em laranja e pode ser selecionado para entrar no site."
        >
          <defs>
            <radialGradient id="map-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff87b7" stopOpacity="0.55" />
              <stop offset="70%" stopColor="#ff87b7" stopOpacity="0" />
            </radialGradient>
            <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#24110c" floodOpacity="0.14" />
            </filter>
          </defs>

          <g
            style={{
              transform,
              transformOrigin: "0 0",
              transition: reduce ? "none" : "transform 1.4s cubic-bezier(0.76, 0, 0.24, 1)",
              filter: "url(#soft-shadow)",
            }}
          >
            <path d={GRATICULE_PATH} className="map-graticule" aria-hidden="true" />

            {AFRICA_COUNTRIES.map((c, i) => (
              <path
                key={c.name}
                d={c.d}
                className="map-country"
                style={{
                  fill: TINTS[i % TINTS.length],
                  opacity: zoomed ? 0.18 : 1,
                  transition: "opacity 0.8s ease, fill 0.4s ease",
                }}
                onMouseEnter={() => setHovered(c.name)}
                onMouseLeave={() => setHovered(null)}
              />
            ))}

            {/* halo + ondas de pulso */}
            <g style={{ opacity: zoomed ? 0 : 1, transition: "opacity 0.5s ease" }}>
              <circle cx={ZIMBABWE_CENTER.x} cy={ZIMBABWE_CENTER.y} r="120" fill="url(#map-glow)" />
              <circle
                cx={ZIMBABWE_CENTER.x}
                cy={ZIMBABWE_CENTER.y}
                r="34"
                fill="none"
                stroke="#ff6a2b"
                strokeWidth="1"
                strokeDasharray="3 6"
                opacity="0.7"
              >
                {!reduce && (
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from={`0 ${ZIMBABWE_CENTER.x} ${ZIMBABWE_CENTER.y}`}
                    to={`360 ${ZIMBABWE_CENTER.x} ${ZIMBABWE_CENTER.y}`}
                    dur="28s"
                    repeatCount="indefinite"
                  />
                )}
              </circle>
              <circle className="map-pulse" cx={ZIMBABWE_CENTER.x} cy={ZIMBABWE_CENTER.y} r="22" />
              <circle className="map-pulse map-pulse--2" cx={ZIMBABWE_CENTER.x} cy={ZIMBABWE_CENTER.y} r="22" />
            </g>

            <path
              d={ZIMBABWE_PATH}
              className="map-country is-zw"
              role="button"
              tabIndex={0}
              aria-label="Entrar no Zimbábue"
              onMouseEnter={() => setHovered("Zimbabwe")}
              onMouseLeave={() => setHovered(null)}
              onClick={onEnter}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onEnter();
                }
              }}
            />
          </g>
        </svg>

        <button
          type="button"
          onClick={onEnter}
          className="map-label-btn"
          style={{
            left: `${labelX}%`,
            top: `${labelY}%`,
            opacity: zoomed ? 0 : 1,
            pointerEvents: zoomed ? "none" : "auto",
          }}
          aria-label="Entrar no Zimbábue"
          tabIndex={-1}
        >
          <span className="map-label-btn__dot" aria-hidden="true" />
          <span>
            Zimbábue
            <small>clique para entrar</small>
          </span>
        </button>
      </div>

      <div className="map-hint" aria-hidden="true">
        <span className="map-hint__dot" />
        Toque no país que pulsa
      </div>
    </div>
  );
}
