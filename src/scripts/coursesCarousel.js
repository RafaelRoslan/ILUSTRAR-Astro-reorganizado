
/**
 * ILUSTRAR — CARROSSEL INFINITO DE CURSOS
 *
 * Um único script atende aos três níveis.
 *
 * Recursos:
 * - rolagem nativa por toque;
 * - arrasto com mouse;
 * - navegação pelo teclado;
 * - continuidade nos dois sentidos;
 * - sem movimento automático;
 * - sem dependências externas.
 */

document.querySelectorAll("[data-course-carousel]")
  .forEach((track) => {

  const originals = Array.from(track.children);

  if (originals.length < 2) return;

  let currentCourse = 0;

  /* 1. Criar cópias apenas visuais */

  function makeClone(item) {
    const copy = item.cloneNode(true);

    copy.setAttribute("aria-hidden", "true");
    copy.setAttribute("inert", "");

    // Evita IDs duplicados dentro das cópias.
    copy.querySelectorAll("[id]").forEach((node) => {
      node.removeAttribute("id");
    });

    return copy;
  }

  const before = originals.map(makeClone);
  const after = originals.map(makeClone);

  track.prepend(...before);
  track.append(...after);

  /* 2. Calcular posições reais dos cards */

  const padding = () =>
    parseFloat(getComputedStyle(track).paddingLeft) || 0;

  const itemPosition = (item) =>
    item.offsetLeft - padding();

  const cycleWidth = () =>
    originals[0].offsetLeft - before[0].offsetLeft;

  /* 3. Reposicionar sem movimento visível */

  function jumpWithoutAnimation(position) {
    const oldSnap = track.style.scrollSnapType;

    track.style.scrollSnapType = "none";
    track.scrollLeft = position;

    requestAnimationFrame(() => {
      track.style.scrollSnapType = oldSnap;
    });
  }

  // Começa na primeira carta original.
  requestAnimationFrame(() => {
    jumpWithoutAnimation(itemPosition(originals[0]));
  });

  /* 4. Reciclar a posição quando necessário */

  function recycle() {
    const width = cycleWidth();
    if (width <= 0) return;

    const start = itemPosition(originals[0]);
    const x = track.scrollLeft;

    // Identifica o curso atual dentro dos quatro originais,
    // mesmo quando a posição corresponde a uma cópia.
    const nearest = nearestIndex();

    currentCourse =
    ((nearest - originals.length) % originals.length
        + originals.length) % originals.length;

    if (x < start - 1 || x >= start + width - 1) {
      const offset =
        ((x - start) % width + width) % width;

      jumpWithoutAnimation(start + offset);
    }
  }

  track.addEventListener("scrollend", recycle);

  // Alternativa para navegadores antigos.
  if (!("onscrollend" in track)) {
    let scrollTimer;

    track.addEventListener("scroll", () => {
      clearTimeout(scrollTimer);

      scrollTimer = setTimeout(recycle, 160);
    }, { passive: true });
  }

  /* 5. Identificar o card mais próximo */

  function nearestIndex() {
    const items = Array.from(track.children);

    let found = 0;
    let minDistance = Infinity;

    items.forEach((item, index) => {
      const distance = Math.abs(
        itemPosition(item) - track.scrollLeft
      );

      if (distance < minDistance) {
        found = index;
        minDistance = distance;
      }
    });

    return found;
  }

  /* 6. Navegar para um card específico */

  function scrollToItem(index) {
    const items = Array.from(track.children);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    track.scrollTo({
      left: itemPosition(items[index]),
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  /* 7. Navegação pelo teclado */

  track.addEventListener("keydown", (event) => {
    if (event.target !== track) return;

    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) {
      return;
    }

    event.preventDefault();

    const delta = event.key === "ArrowRight" ? 1 : -1;
    const lastIndex = track.children.length - 1;

    const next = Math.max(
      0,
      Math.min(lastIndex, nearestIndex() + delta)
    );

    scrollToItem(next);
  });

  /* 8. Permitir arrastar com o mouse */

  let dragging = false;
  let pointerId;
  let pointerX;
  let initialScroll;

  track.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) {
      return;
    }

    // Preserva possíveis links futuros dos cards.
    if (
      event.target instanceof Element &&
      event.target.closest("a, button")
    ) {
      return;
    }

    dragging = true;
    pointerId = event.pointerId;
    pointerX = event.clientX;
    initialScroll = track.scrollLeft;

    track.classList.add("is-dragging");
    track.setPointerCapture(pointerId);

    event.preventDefault();
  });

  track.addEventListener("pointermove", (event) => {
    if (!dragging || event.pointerId !== pointerId) return;

    track.scrollLeft =
      initialScroll + pointerX - event.clientX;
  });

  function endDrag(event) {
    if (!dragging || event.pointerId !== pointerId) {
      return;
    }

    dragging = false;
    track.classList.remove("is-dragging");

    scrollToItem(nearestIndex());
  }

  track.addEventListener("pointerup", endDrag);
  track.addEventListener("pointercancel", endDrag);

  /* 9. Recalcular ao mudar a largura da tela */

  let lastWidth = track.clientWidth;
  let resizeTimer;

  window.addEventListener("resize", () => {
    if (Math.abs(lastWidth - track.clientWidth) < 1) {
      return;
    }

    lastWidth = track.clientWidth;

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
    jumpWithoutAnimation(
        itemPosition(originals[currentCourse])
    );
    }, 140);
  });

});
