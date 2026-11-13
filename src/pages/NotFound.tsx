import { useTitle } from "../hooks/useTitle";
import { Link } from "react-router-dom";
import { Page } from "../components/Page";

export function NotFound() {
  useTitle("Página não encontrada");
  return (
    <Page>
      <section className="section container-x" style={{ textAlign: "center", minHeight: "60svh" }}>
        <p className="kicker" style={{ justifyContent: "center" }}>
          Página não encontrada
        </p>
        <h1 className="display" style={{ fontSize: "clamp(3rem, 9vw, 7rem)", margin: "1rem 0" }}>
          Você saiu do mapa
        </h1>
        <p className="lead" style={{ maxWidth: "42ch", margin: "0 auto 2rem" }}>
          Este caminho não existe. Volte ao continente e encontre o Zimbábue de novo.
        </p>
        <Link to="/" className="btn">
          Voltar ao mapa
        </Link>
      </section>
    </Page>
  );
}
