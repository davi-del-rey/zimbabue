import { useTitle } from "../hooks/useTitle";
import { Link } from "react-router-dom";
import { Page } from "../components/Page";
import { Reveal } from "../components/Reveal";
import { TIMELINE, photo } from "../data/content";

export function Historia() {
  useTitle("História");
  return (
    <Page>
      <section className="page-hero container-x">
        <p className="kicker">01 — História</p>
        <h1 className="display">
          Mil anos de <em>pedra e gente</em>
        </h1>
        <div className="intro-grid" style={{ alignItems: "end" }}>
          <p className="lead" style={{ margin: 0, maxWidth: "38ch" }}>
            Do ocre nas paredes das cavernas à cidade de granito, do império do ouro à independência: a
            história do Zimbábue é feita de construtores, comerciantes e gente que não desistiu.
          </p>
          <div className="page-hero__meta">
            <span>12 capítulos</span>
            <span>De ~10.000 a.C. a 2024</span>
            <span>Leitura de 8 minutos</span>
          </div>
        </div>
      </section>

      <div className="container-x">
        <Reveal>
          <figure className="hero-media" style={{ margin: 0 }}>
            <img
              src={photo("gz-overview")}
              alt="Vista aérea das muralhas do Grande Zimbábue no planalto"
              fetchPriority="high"
            />
            <figcaption className="hero-media__caption">Grande Zimbábue, Patrimônio Mundial da UNESCO</figcaption>
          </figure>
        </Reveal>
      </div>

      <section className="section container-x">
        <div className="intro-grid">
          <div style={{ position: "sticky", top: "100px", alignSelf: "start" }}>
            <p className="kicker">Linha do tempo</p>
            <h2 className="display" style={{ fontSize: "clamp(2rem, 3.6vw, 3.2rem)", marginTop: "0.8rem" }}>
              Do ocre ao ZiG
            </h2>
            <p style={{ color: "var(--ink-soft)", maxWidth: "30ch" }}>
              Os marcos que explicam como um reino de pedra virou um país moderno.
            </p>
          </div>

          <div className="timeline">
            {TIMELINE.map((e, i) => (
              <article key={e.title} className={`timeline__item${e.era ? " is-era" : ""}`}>
                <span className="timeline__node" aria-hidden="true" />
                <Reveal delay={i === 0 ? 0 : 0.04} y={20}>
                  <div className={`era-card${e.img ? " has-media" : ""}`}>
                    <div>
                      <span className="era-card__year">{e.year}</span>
                      <h3>{e.title}</h3>
                      <p>{e.text}</p>
                    </div>
                    {e.img && (
                      <div className="era-card__media">
                        <img src={photo(e.img)} alt={e.alt ?? ""} loading="lazy" />
                      </div>
                    )}
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x" style={{ paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>
        <Reveal>
          <div className="stone-note grain">
            <div className="chevron-band" aria-hidden="true" />
            <blockquote>“Sem cimento. Só pedra, encaixada com paciência.”</blockquote>
            <p>
              As muralhas do Grande Zimbábue foram erguidas encaixando blocos de granito uns nos outros, sem
              argamassa. A Grande Cerca tem mais de 250 metros de circunferência e chega a 11 metros de altura —
              um feito de engenharia que atravessou séculos.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "1.5rem",
                marginTop: "2.4rem",
                borderTop: "1px solid rgba(255,246,234,0.2)",
                paddingTop: "1.6rem",
              }}
            >
              {[
                ["11 m", "de altura nas muralhas"],
                ["722 ha", "de área construída"],
                ["≈ 18 mil", "habitantes no auge"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="num" style={{ fontSize: "2rem", color: "var(--sun)" }}>
                    {n}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "rgba(255,246,234,0.7)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section container-x" style={{ textAlign: "center", borderTop: "1px solid rgba(36,17,12,0.1)" }}>
        <Reveal>
          <p className="kicker" style={{ justifyContent: "center" }}>
            Próximo capítulo
          </p>
          <h2 className="display" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", margin: "1rem auto 1.6rem", maxWidth: "20ch" }}>
            Quem faz o som do Zimbábue
          </h2>
          <Link to="/cultura" className="btn">
            Ver cultura
            <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
              <path d="M0 6h15M11 1.5 15.5 6 11 10.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </Reveal>
      </section>
    </Page>
  );
}
