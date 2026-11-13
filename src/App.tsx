import { useEffect } from "react";
import { BrowserRouter, HashRouter, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Culinaria } from "./pages/Culinaria";
import { Cultura } from "./pages/Cultura";
import { Entrance } from "./pages/Entrance";
import { Historia } from "./pages/Historia";
import { Hub } from "./pages/Hub";
import { NotFound } from "./pages/NotFound";
import { Paisagens } from "./pages/Paisagens";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const Router = import.meta.env.VITE_GITHUB_PAGES === "true" ? HashRouter : BrowserRouter;

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Entrance />} />
        <Route element={<Layout />}>
          <Route path="/zimbabue" element={<Hub />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/cultura" element={<Cultura />} />
          <Route path="/culinaria" element={<Culinaria />} />
          <Route path="/paisagens" element={<Paisagens />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
