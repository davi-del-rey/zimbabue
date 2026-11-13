import { useTitle } from "../hooks/useTitle";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Page } from "../components/Page";
import { Reveal } from "../components/Reveal";
import { ZimbabweMap } from "../components/ZimbabweMap";
import { PLACES, photo } from "../data/content";

export function Paisagens() {
  useTitle("Paisagens");
  const [active, setActive] = useState<string | null>("Victoria Falls");

  const select = (id: string) => {
    setActive(id);
    const el = document.getElementById(`place-${id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Page>
      <section className="page-hero container-x">
        <p className="kicker">04 — Paisagens</p>
        <h1 className="display">
          Lugares que <em>trovejam</em>
        </h1>
        <div className="intro-grid" style={{ alignItems: "end" }}>
          <p className="lead" style={{ margin: 0, maxWidth: "40ch" }}>
            Cachoeiras do tamanho de uma cidade, colinas de granito, rios largos e um lago com árvores mortas
            ainda de pé. Dez lugares para entender o país.
          </p>
          <div className="page-hero__meta">
            <span>5 patrimônios mundiais</span>
            <span>10 lugares</span>
            <span>Toque nos pinos do mapa</span>
          </div>
        </div>
      </section>

      <div className="container-x">
        <Reveal>
          <figure className="hero-media" style={{ margin: 0, aspectRatio: "16 / 7" }}>
            <img
              src={photo("vic-falls-pano")}
              alt="Vista aérea de Victoria Falls com o rio Zambeze e a névoa da queda"
            />
            <figcaption className="hero-media__caption">Mosi-oa-Tunya, a “fumaça que troveja”</figcaption>
          </figure>
        </Reveal>
      </div>

      <section className="section container-x">
        <div className="intro-grid intro-grid--map" style={{ alignItems: "start" }}>
          <div>
            <Reveal>
              <p className="kicker">Mapa</p>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 3.6vw, 3.2rem)", margin: "0.8rem 0 1rem" }}>
                Clique em um pino
              </h2>
              <p style={{ color: "var(--ink-soft)", maxWidth: "30ch", marginBottom: "1.6rem" }}>
                Cada ponto mostra um lugar do país. Escolha um e o texto correspondente aparece logo abaixo.
              </p>
              <div className="place-list">
                {PLACES.map((p) => (
                  <button
                    key={p.id}
                    className={`place-list__item${active === p.id ? " is-active" : ""}`}
                    onClick={() => select(p.id)}
                    aria-pressed={active === p.id}
                  >
                    <span>{p.name}</span>
                    <small>{p.tag}</small>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ZimbabweMap active={active} onSelect={select} />
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)", borderTop: "1px solid rgba(36,17,12,0.08)" }}>
        <div className="container-x">
          <Reveal>
            <p className="kicker">Galeria</p>
            <h2 className="display" style={{ fontSize: "clamp(2rem, 4.2vw, 3.6rem)", margin: "0.7rem 0 clamp(2rem, 4vw, 3rem)" }}>
              Dez lugares, dez histórias
            </h2>
          </Reveal>
          <div className="places-grid">
            {PLACES.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 0.06} className={`place${active === p.id ? " is-highlight" : ""}`}>
                <article
                  id={`place-${p.id}`}
                  onMouseEnter={() => setActive(p.id)}
                  style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}
                >
                  <div className="place__media">
                    <img src={photo(p.img)} alt={p.alt} loading="eager" />
                    <span className="place__tag">{p.tag}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p className="place__region">{p.region}</p>
                  <p>{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section container-x" style={{ textAlign: "center" }}>
        <Reveal>
          <p className="kicker" style={{ justifyContent: "center" }}>
            Fim da viagem
          </p>
          <h2 className="display" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", margin: "1rem auto 1.6rem", maxWidth: "22ch" }}>
            Volte ao mapa e comece de novo
          </h2>
          <Link to="/" className="btn">
            Voltar ao mapa
            <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
              <path d="M0 6h15M11 1.5 15.5 6 11 10.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </Reveal>
      </section>
    </Page>
  );
}
