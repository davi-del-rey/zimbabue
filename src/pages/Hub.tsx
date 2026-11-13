import { useTitle } from "../hooks/useTitle";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Page } from "../components/Page";
import { Reveal } from "../components/Reveal";
import { MARQUEE, STATS, TOPICS, photo } from "../data/content";

export function Hub() {
  useTitle("Zimbábue");
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const mediaY = useTransform(scrollY, [0, 900], [0, 150]);
  const mediaScale = useTransform(scrollY, [0, 900], [1.06, 1.16]);

  return (
    <Page>
      <section className="hub-hero">
        <motion.div className="hub-hero__media" style={reduce ? undefined : { y: mediaY, scale: mediaScale }}>
          <img
            src={photo("gz-aerial")}
            alt="Vista aérea do Grande Zimbábue ao pôr do sol, com muralhas de granito"
          />
        </motion.div>
        <div className="hub-hero__veil" />
        <div className="container-x hub-hero__content">
          <motion.p
            className="kicker"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Zimbabwe · Zimbábue
          </motion.p>
          <motion.h1
            className="display"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Zimbá<span className="accent">bue</span>
          </motion.h1>
          <motion.div
            className="hub-hero__sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span>O Grande Celeiro de Pedra</span>
            <span>16 línguas · 390 mil km² · entre o Zambeze e o Limpopo</span>
          </motion.div>
        </div>
        <div
          className="hub-hero__cue"
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "clamp(1.25rem, 4vw, 3rem)",
            bottom: "clamp(1.6rem, 3vw, 2.6rem)",
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,246,234,0.75)",
          }}
        >
          Role
          <motion.span
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: "inline-block" }}
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <path d="M6 0v17M1 12l5 5 5-5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </motion.span>
        </div>
      </section>

      <section className="container-x" style={{ marginTop: "-2.6rem", position: "relative", zIndex: 4 }}>
        <Reveal>
          <dl className="stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="section container-x">
        <div className="intro-grid">
          <Reveal>
            <p className="kicker">O país</p>
            <h2 className="display">
              Um país de pedra,
              <br />
              <em>entre dois rios</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="prose-x">
              <p>
                O Zimbábue não tem mar. Ocupa o planalto entre o <strong>Zambeze</strong>, ao norte, e o{" "}
                <strong>Limpopo</strong>, ao sul — terras altas, savana de mopane, florestas de teca e um céu
                que fica laranja no fim do dia.
              </p>
              <p>
                O nome vem de <em>dzimba dza mabwe</em>, “casas de pedra”, e aponta para o Grande Zimbábue, a
                cidade de granito que dominou a região entre os séculos XI e XV. Foi capital de um reino que
                negociava ouro com o oceano Índico — e que segue sendo o maior símbolo do país.
              </p>
              <p>
                Cerca de <strong>16 milhões de pessoas</strong> vivem aqui, falando 16 línguas oficiais, com o
                shona e o ndebele como as mais faladas. A capital é Harare; a segunda cidade, Bulawayo.
              </p>
              <div className="pull-quote">
                “Dzimba dza mabwe.”
                <span>Casas de pedra — a origem do nome Zimbábue</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x" style={{ paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>
        <div className="split">
          <Reveal className="split__media">
            <img src={photo("baobab")} alt="Baobá solitário na savana do Zimbábue" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="kicker">Geografia</p>
            <h2 className="display">Quatro paisagens, um país</h2>
            <div className="prose-x">
              <p>
                <strong>Planalto central.</strong> Harare, os campos de milho e as pedras de granito que
                aparecem no horizonte como esculturas.
              </p>
              <p>
                <strong>Terras Altas do Leste.</strong> Florestas, cachoeiras e o Monte Nyangani, o ponto mais
                alto do país, com 2.592 metros.
              </p>
              <p>
                <strong>Vale do Zambeze.</strong> O rio largo, Victoria Falls e os parques de Mana Pools, onde
                elefantes atravessam a água ao entardecer.
              </p>
              <p>
                <strong>Lowveld.</strong> A planície quente do sudeste, com savana, baobás e os cânions de
                Gonarezhou.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)", borderTop: "1px solid rgba(36,17,12,0.08)" }}>
        <div className="container-x">
          <Reveal>
            <p className="kicker">Quatro caminhos</p>
            <h2 className="display" style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)", margin: "0.7rem 0 clamp(2rem, 4vw, 3.5rem)" }}>
              Por onde começar
            </h2>
          </Reveal>
          <div className="cards-mosaic">
            {TOPICS.map((t, i) => (
              <Reveal key={t.to} delay={i * 0.06} className={t.className}>
                <Link to={t.to} className="topic-card" style={{ height: "100%" }}>
                  <img src={photo(t.img)} alt={t.alt} />
                  <span className="topic-card__index">{t.index}</span>
                  <div className="topic-card__body">
                    <h3>{t.title}</h3>
                    <p>{t.desc}</p>
                    <span className="topic-card__go">
                      Explorar
                      <svg width="18" height="10" viewBox="0 0 18 10" aria-hidden="true">
                        <path d="M0 5h15M11 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((k) => (
            <span key={k}>
              {MARQUEE.map(([word, meaning]) => (
                <span key={word + k}>
                  <span>
                    {word} <i>·</i> {meaning}
                  </span>
                  <i>✳</i>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="section container-x" style={{ textAlign: "center" }}>
        <Reveal>
          <p className="kicker" style={{ justifyContent: "center" }}>
            Continue a viagem
          </p>
          <h2 className="display" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", margin: "1rem auto 1.6rem", maxWidth: "18ch" }}>
            Mil anos de história em doze capítulos
          </h2>
          <Link to="/historia" className="btn">
            Começar pela história
            <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
              <path d="M0 6h15M11 1.5 15.5 6 11 10.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </Reveal>
      </section>
    </Page>
  );
}
