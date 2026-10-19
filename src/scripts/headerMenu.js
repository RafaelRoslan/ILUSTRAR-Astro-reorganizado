
/**
 * MENU RESPONSIVO — ILUSTRAR
 *
 * Controla a abertura e o fechamento
 * da navegação em dispositivos móveis.
 */

const header = document.querySelector(".site-header");
const button = header?.querySelector(".site-header__toggle");
const nav = header?.querySelector(".site-header__nav");

if (header && button && nav) {

  // Atualiza o estado visual e acessível do menu.
  function setMenuOpen(open) {
    header.dataset.menuOpen = String(open);

    button.setAttribute("aria-expanded", String(open));
    button.setAttribute(
      "aria-label",
      open ? "Fechar menu" : "Abrir menu"
    );
  }

  // Abre ou fecha ao clicar no botão.
  button.addEventListener("click", () => {
    const isOpen =
      button.getAttribute("aria-expanded") === "true";

    setMenuOpen(!isOpen);
  });

  // Fecha depois que o visitante escolhe um link.
  nav.addEventListener("click", (event) => {
    if (
      event.target instanceof Element &&
      event.target.closest("a")
    ) {
      setMenuOpen(false);
    }
  });

  // Fecha com Escape e devolve o foco ao botão.
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      button.getAttribute("aria-expanded") === "true"
    ) {
      setMenuOpen(false);
      button.focus();
    }
  });

  // Fecha se o visitante clicar fora do cabeçalho.
  document.addEventListener("click", (event) => {
    if (
      event.target instanceof Node &&
      !header.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });

  // Reinicia o menu ao mudar para desktop.
  const desktop = window.matchMedia("(min-width: 1120px)");

  desktop.addEventListener("change", (event) => {
    if (event.matches) {
      setMenuOpen(false);
    }
  });
  /* ==========================================
   CABEÇALHO — ESTADO DURANTE A ROLAGEM
   ========================================== */

  // Evita executar a atualização várias vezes
  // no mesmo quadro de renderização.
  let scrollScheduled = false;

  function updateHeaderState() {
    header.classList.toggle(
      "is-scrolled",
      window.scrollY > 24
    );

    scrollScheduled = false;
  }

  // Executa ao rolar a página.
  window.addEventListener("scroll", () => {
    if (scrollScheduled) return;

    scrollScheduled = true;

    requestAnimationFrame(updateHeaderState);
  }, { passive: true });

  // Define o estado correto ao carregar a página.
  updateHeaderState();
}
