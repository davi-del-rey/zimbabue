import { useTitle } from "../hooks/useTitle";
import { Link } from "react-router-dom";
import { Page } from "../components/Page";
import { Reveal } from "../components/Reveal";
import { LANGUAGES, photo } from "../data/content";

const RITUALS = [
  {
    title: "Bira",
    text: "Cerimônia em que a mbira é tocada a noite inteira para convidar os ancestrais (vadzimu) a se manifestar. Música, dança e família no mesmo círculo.",
  },
  {
    title: "Hunhu",
    text: "A ideia de humanidade compartilhada: respeitar os mais velhos, cuidar dos vizinhos, receber bem quem chega. O equivalente ao ubuntu de outros povos.",
  },
  {
    title: "Mbakumba",
    text: "Dança de quadril e ombros ao som de tambores, muito presente em casamentos e celebrações ndebele.",
  },
  {
    title: "HIFA",
    text: "O Harare International Festival of the Arts reúne teatro, música e artes visuais na capital — um dos maiores encontros culturais da África Austral.",
  },
];

export function Cultura() {
  useTitle("Cultura");
  return (
    <Page>
      <section className="page-hero container-x">
        <p className="kicker">02 — Cultura</p>
        <h1 className="display">
          Gente, voz <em>e pedra</em>
        </h1>
        <div className="intro-grid" style={{ alignItems: "end" }}>
          <p className="lead" style={{ margin: 0, maxWidth: "40ch" }}>
            Shona e ndebele, mbira e tambor, escultura em pedra e 16 línguas oficiais. A cultura zimbabuana
            é uma conversa antiga entre povos que aprenderam a viver juntos no mesmo planalto.
          </p>
          <div className="page-hero__meta">
            <span>2 povos principais</span>
            <span>16 línguas</span>
            <span>1 instrumento nacional</span>
          </div>
        </div>
      </section>

      <div className="container-x">
        <Reveal>
          <figure className="hero-media" style={{ margin: 0, aspectRatio: "16 / 7" }}>
            <img src={photo("mbira-woman")} alt="Mulher sentada tocando mbira em um sofá" fetchPriority="high" />
            <figcaption className="hero-media__caption">Mbira dzavadzimu, a “mbira dos ancestrais”</figcaption>
          </figure>
        </Reveal>
      </div>

      <section className="section container-x">
        <Reveal>
          <p className="kicker">Povos</p>
          <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", margin: "0.7rem 0 2rem" }}>
            Dois povos, um país
          </h2>
        </Reveal>
        <div className="people-split">
          <Reveal>
            <div className="num">75%</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", margin: "0.8rem 0 0.4rem" }}>
              Shona
            </h3>
            <p style={{ margin: 0, color: "var(--ink-soft)" }}>
              O maior grupo do país, herdeiro direto dos construtores do Grande Zimbábue. Vive sobretudo no
              centro e no leste, com dialetos como zezuru, karanga, korekore e manyika.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="num">15%</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", margin: "0.8rem 0 0.4rem" }}>
              Ndebele
            </h3>
            <p style={{ margin: 0, color: "var(--ink-soft)" }}>
              Descendentes do reino fundado por Mzilikazi no século XIX, no oeste do país. Sua arte é marcada
              por casas pintadas com padrões geométricos e por uma tradição militar forte.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="prose-x" style={{ marginTop: "1.6rem", maxWidth: "70ch" }}>
            <span style={{ color: "var(--ink-soft)" }}>
              Outros grupos — chewa, tonga, venda, kalanga, ndau, sotho, xhosa e mais — completam o mosaico.
              A Constituição de 2013 reconheceu 16 línguas como oficiais, incluindo a língua de sinais.
            </span>
          </p>
          <div className="chip-row">
            {LANGUAGES.map((l) => (
              <span className="chip" key={l}>
                {l}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section
        className="container-x"
        style={{
          background: "var(--paper)",
          borderRadius: "32px",
          padding: "clamp(1.6rem, 4vw, 3.2rem)",
          marginBottom: "clamp(2rem, 4vw, 3rem)",
        }}
      >
        <div className="split">
          <Reveal className="split__media">
            <img src={photo("mbira-hands")} alt="Detalhe das mãos tocando as lâminas de metal de uma mbira" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="kicker">Música</p>
            <h2 className="display">O piano que cabe nas mãos</h2>
            <div className="prose-x">
              <p>
                A <strong>mbira dzavadzimu</strong> é feita de lâminas de metal montadas sobre uma caixa de
                madeira. Cada nota existe em dupla, para produzir um zumbido que os shona consideram a voz dos
                ancestrais.
              </p>
              <p>
                Nas décadas de 1970 e 1980, Thomas Mapfumo levou a mbira para a guitarra elétrica e criou o{" "}
                <strong>chimurenga</strong>, trilha sonora da luta pela independência. Oliver Mtukudzi, o
                “Tuku”, misturou o ritmo com soul e ganhou o mundo. E Stella Chiweshe fez a mbira atravessar
                fronteiras como solista.
              </p>
              <p>
                Hoje, o <strong>sungura</strong> — ritmo rápido de guitarra — domina os bailes, ao lado do
                gospel e do afro-pop que toca nas rádios de Harare.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section container-x">
        <div className="split split--reverse">
          <Reveal className="split__media">
            <img src={photo("shona-sculpture")} alt="Escultura shona em pedra preta representando duas figuras" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="kicker">Arte</p>
            <h2 className="display">Pedra que vira rosto</h2>
            <div className="prose-x">
              <p>
                A <strong>escultura shona</strong> nasceu nos anos 1950 e virou uma das artes mais
                reconhecidas da África. Os artistas trabalham a <em>springstone</em>, uma pedra dura e escura
                que aceita polimento de espelho, sem esboço: a forma está dentro do bloco.
              </p>
              <p>
                O símbolo máximo, porém, é mais antigo: o <strong>pássaro do Zimbábue</strong>, esculpido em
                pedra-sabão nos séculos XIV e XV e hoje na bandeira nacional. Alguns desses pássaros foram
                levados durante a colonização e começaram a voltar ao país nos últimos anos.
              </p>
            </div>
            <figure
              style={{
                margin: "1.8rem 0 0",
                display: "grid",
                gridTemplateColumns: "132px 1fr",
                gap: "1.1rem",
                alignItems: "center",
              }}
            >
              <img
                src={photo("bird")}
                alt="Silhueta do pássaro do Zimbábue, escultura em pedra-sabão, sobre fundo escuro"
                loading="lazy"
                style={{ borderRadius: 14, aspectRatio: "4 / 3", objectFit: "cover" }}
              />
              <figcaption style={{ fontSize: "0.85rem", color: "var(--ink-soft)", lineHeight: 1.5 }}>
                O pássaro de pedra-sabão, um dos oito encontrados no Grande Zimbábue, virou o emblema do país.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--sun)", color: "var(--ink)" }}>
        <div className="container-x">
          <Reveal>
            <p className="kicker" style={{ color: "var(--ink)" }}>
              Costumes e celebrações
            </p>
            <h2 className="display" style={{ fontSize: "clamp(2rem, 4.2vw, 3.6rem)", margin: "0.7rem 0 2rem" }}>
              O que se repete, ano após ano
            </h2>
          </Reveal>
          <div className="culture-grid">
            {RITUALS.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06}>
                <div className="mini-card">
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem 2.5rem", marginTop: "2.5rem", fontSize: "0.9rem" }}>
              <span>
                <strong>18 de abril</strong> — Dia da Independência
              </span>
              <span>
                <strong>Agosto</strong> — Dia dos Heróis
              </span>
              <span>
                <strong>Abril</strong> — Festival HIFA, em Harare
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section container-x" style={{ textAlign: "center" }}>
        <Reveal>
          <p className="kicker" style={{ justifyContent: "center" }}>
            Próximo capítulo
          </p>
          <h2 className="display" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", margin: "1rem auto 1.6rem", maxWidth: "20ch" }}>
            O que se serve à mesa
          </h2>
          <Link to="/culinaria" className="btn">
            Ver culinária
            <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
              <path d="M0 6h15M11 1.5 15.5 6 11 10.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </Reveal>
      </section>
    </Page>
  );
}
