import { useEffect } from "react";

const SUFFIX = "Zimbábue — O Grande Celeiro de Pedra";

/** Define o título do documento para a página atual. */
export function useTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${SUFFIX}` : SUFFIX;
  }, [title]);
}
