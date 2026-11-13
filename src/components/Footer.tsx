import { Link } from "react-router-dom";
import { SunMark } from "./SunMark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-x">
        <p className="site-footer__word" aria-hidden="true">
          Zimbábue
        </p>
        <div className="site-footer__grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.9rem" }}>
              <SunMark size={26} />
              <span style={{ color: "var(--cream)", fontWeight: 450 }}>O Grande Celeiro de Pedra</span>
            </div>
            <p style={{ margin: 0, maxWidth: "38ch" }}>
              Um passeio pela história, pela cultura, pela mesa e pelas paisagens do Zimbábue — feito para
              quem quer começar pelo mapa.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <div className="site-footer__links">
              <Link to="/zimbabue">Visão geral</Link>
              <Link to="/historia">História</Link>
              <Link to="/cultura">Cultura</Link>
              <Link to="/culinaria">Culinária</Link>
              <Link to="/paisagens">Paisagens</Link>
            </div>
          </div>
          <div>
            <h4>Nota</h4>
            <p style={{ margin: 0 }}>
              Site educativo e sem fins comerciais. Fotografias de fontes públicas da internet, usadas
              para ilustrar lugares reais do país.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
