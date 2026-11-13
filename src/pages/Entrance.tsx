import { useTitle } from "../hooks/useTitle";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AfricaMap } from "../components/AfricaMap";
import { SunMark } from "../components/SunMark";

export function Entrance() {
  useTitle("Encontre o Zimbábue no mapa");
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const [zoomed, setZoomed] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const enter = useCallback(() => {
    if (leaving) return;
    setLeaving(true);
    setZoomed(true);
    window.setTimeout(() => navigate("/zimbabue"), reduce ? 200 : 1250);
  }, [leaving, navigate, reduce]);

  return (
    <div className="entrance grain">
      <div
        style={{
          position: "absolute",
          top: "1.4rem",
          left: "clamp(1.5rem, 4vw, 3.5rem)",
          right: "clamp(1.5rem, 4vw, 3.5rem)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 5,
        }}
      >
        <span className="brand">
          <SunMark size={30} />
          <span>
            Zimbábue
            <small style={{ display: "block", lineHeight: 1 }}>o grande celeiro de pedra</small>
          </span>
        </span>
        <Link to="/zimbabue" className="link-arrow entrance__skip" style={{ fontSize: "0.85rem" }}>
          Entrar sem o mapa
          <svg width="16" height="10" viewBox="0 0 16 10" aria-hidden="true">
            <path d="M0 5h14M10 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </Link>
      </div>

      <div className="entrance__copy">
        <motion.p
          className="kicker"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Sul da África · entre o Zambeze e o Limpopo
        </motion.p>
        <motion.h1
          className="display"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          Encontre o
          <br />
          <em>Zimbábue</em>
        </motion.h1>
        <motion.p
          className="lead"
          style={{ maxWidth: "34ch" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Um país de pedra, música e sol. Passeie pelo continente, aproxime-se do sul e clique no país
          que pulsa no mapa para entrar.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{ display: "flex", alignItems: "center", gap: "1.4rem", marginTop: "1.6rem", flexWrap: "wrap" }}
        >
          <button type="button" className="btn" onClick={enter}>
            Entrar no Zimbábue
            <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
              <path d="M0 6h15M11 1.5 15.5 6 11 10.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <span style={{ fontSize: "0.78rem", color: "var(--ink-soft)", maxWidth: "22ch" }}>
            Teclado também vale: <strong>Tab</strong> até o país, <strong>Enter</strong> para entrar.
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: leaving ? 0.9 : 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <AfricaMap onEnter={enter} zoomed={zoomed} />
      </motion.div>

      <div className="entrance__foot">
        <span>20°09′S · 30°33′E — Harare</span>
        <span>Use o mapa ou a navegação · 2026</span>
      </div>

      <AnimatePresence>
        {leaving && (
          <motion.div
            className="entrance__flash"
            initial={{ clipPath: "circle(0% at 66% 72%)" }}
            animate={{ clipPath: "circle(150% at 66% 72%)" }}
            transition={{ duration: reduce ? 0.2 : 1.05, ease: [0.76, 0, 0.24, 1] }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
