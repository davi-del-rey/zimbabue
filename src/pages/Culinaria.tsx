import { useTitle } from "../hooks/useTitle";
import { Link } from "react-router-dom";
import { Page } from "../components/Page";
import { Reveal } from "../components/Reveal";
import { DISHES, FOOD_NOTES, photo } from "../data/content";

export function Culinaria() {
  useTitle("Culinária");
  return (
    <Page>
      <section className="page-hero container-x">
        <p className="kicker">03 — Culinária</p>
        <h1 className="display">
          A mesa gira em <em>volta do sadza</em>
        </h1>
        <div className="intro-grid" style={{ alignItems: "end" }}>
          <p className="lead" style={{ margin: 0, maxWidth: "40ch" }}>
            Milho, amendoim, folhas verdes e o peixe do lago. A comida zimbabuana é simples, generosa e feita
            para dividir — quase sempre em volta de um único prato.
          </p>
          <div className="page-hero__meta">
            <span>8 pratos e bebidas</span>
            <span>Come-se com as mãos</span>
            <span>O milho é a base</span>
          </div>
        </div>
      </section>

      <div className="container-x">
        <Reveal>
          <figure className="hero-media" style={{ margin: 0, aspectRatio: "16 / 8" }}>
            <img
              src={photo("sadza")}
              alt="Mão moldando sadza em um prato colorido com folhas verdes e peixe grelhado"
            />
            <figcaption className="hero-media__caption">Sadza, muriwo e kapenta: o almoço clássico</figcaption>
          </figure>
        </Reveal>
      </div>

      <section className="section container-x">
        <div className="intro-grid" style={{ alignItems: "start" }}>
          <Reveal>
            <p className="kicker">Cardápio</p>
            <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", marginTop: "0.8rem" }}>
              Oito coisas para provar
            </h2>
            <p style={{ color: "var(--ink-soft)", maxWidth: "30ch" }}>
              Passe o mouse para sentir o cheiro — ou quase isso.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="menu-list">
              {DISHES.map((d) => (
                <article className="menu-item" key={d.name}>
                  <span className="menu-item__no">{d.no}</span>
                  <div>
                    <h3>
                      {d.name}
                      <small>{d.tag}</small>
                    </h3>
                    <p>{d.desc}</p>
                  </div>
                  <span className="menu-item__tag">{d.tag}</span>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x" style={{ paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>
        <Reveal>
          <div className="food-note">
            {FOOD_NOTES.map((n) => (
              <div key={n.title}>
                <h3>{n.title}</h3>
                <p>{n.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section container-x" style={{ borderTop: "1px solid rgba(36,17,12,0.1)" }}>
        <div className="split">
          <Reveal className="split__media">
            <img src={photo("sadza-plate")} alt="Prato de sadza servido com carne, folhas e milho na espiga" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="kicker">Como se come</p>
            <h2 className="display">Uma bola na mão, o molho no centro</h2>
            <div className="prose-x">
              <p>
                O sadza chega quente, firme, e vai para o centro da mesa. Cada pessoa lava as mãos, tira um
                pedaço, molda uma bolinha com os dedos e a mergulha no molho de folhas, carne ou peixe.
              </p>
              <p>
                A refeição costuma ser uma só, compartilhada. É comum ver três ou quatro pessoas em volta do
                mesmo prato, conversando, oferecendo a melhor parte a quem chegou depois.
              </p>
              <p>
                No fim, o <strong>mazoe</strong> gelado — e, se for domingo, uma boa conversa à sombra até o
                sol baixar.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section container-x" style={{ textAlign: "center", borderTop: "1px solid rgba(36,17,12,0.1)" }}>
        <Reveal>
          <p className="kicker" style={{ justifyContent: "center" }}>
            Próximo capítulo
          </p>
          <h2 className="display" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", margin: "1rem auto 1.6rem", maxWidth: "22ch" }}>
            Onde a fumaça troveja
          </h2>
          <Link to="/paisagens" className="btn">
            Ver paisagens
            <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
              <path d="M0 6h15M11 1.5 15.5 6 11 10.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </Reveal>
      </section>
    </Page>
  );
}
