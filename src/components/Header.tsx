import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SunMark } from "./SunMark";

const LINKS = [
  { to: "/zimbabue", label: "Zimbábue" },
  { to: "/historia", label: "História" },
  { to: "/cultura", label: "Cultura" },
  { to: "/culinaria", label: "Culinária" },
  { to: "/paisagens", label: "Paisagens" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <div className="container-x site-header__inner">
        <Link to="/" className="brand" aria-label="Voltar ao mapa — início do site">
          <SunMark size={30} />
          <span>
            Zimbábue
            <small style={{ display: "block", lineHeight: 1 }}>o grande celeiro de pedra</small>
          </span>
        </Link>

        <nav className="nav" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fechar" : "Menu"}
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path d="M2 4h10M2 7h10M2 10h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="container-x"
            aria-label="Navegação principal (móvel)"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: "0 0 1.2rem" }}>
              {LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    style={{
                      display: "block",
                      padding: "0.8rem 0",
                      borderBottom: "1px solid rgba(36,17,12,0.12)",
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                    }}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
