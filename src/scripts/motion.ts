/* ==========================================================================
   Motion
   --------------------------------------------------------------------------
   Every scroll-driven effect on the site runs through here: reveals, word
   splitting, stat count-ups and parallax. One IntersectionObserver and one
   rAF-throttled scroll loop serve the whole page.

   With the ClientRouter in play, module scripts evaluate once but the DOM is
   replaced on every navigation — so this exposes init/destroy and Base.astro
   drives them from the astro:page-load / astro:before-swap events.

   Motion is an enhancement. Under prefers-reduced-motion nothing animates and
   `no-motion` renders every element in its final state.
   ========================================================================== */

type Teardown = () => void;

let teardowns: Teardown[] = [];

const prefersReduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* -------------------------------------------------------------------------- */
/* Word splitting — headline words rise out of their own mask                 */
/* -------------------------------------------------------------------------- */

function splitHeadings() {
  const targets = document.querySelectorAll<HTMLElement>(
    "[data-split]:not([data-split-done])",
  );

  targets.forEach((el) => {
    const text = el.textContent?.trim() ?? "";
    if (!text) return;

    const base = Number(el.dataset.splitDelay ?? 0);
    const step = Number(el.dataset.splitStep ?? 65);

    el.textContent = "";

    text.split(/\s+/).forEach((word, i) => {
      const mask = document.createElement("span");
      mask.className = "split-mask";

      const inner = document.createElement("span");
      inner.className = "split-word";
      inner.textContent = word;
      inner.style.transitionDelay = `${base + i * step}ms`;

      mask.appendChild(inner);
      el.appendChild(mask);

      /* A real space between masks so the line wraps and reads normally */
      el.appendChild(document.createTextNode(" "));
    });

    el.dataset.splitDone = "";
  });
}

/* -------------------------------------------------------------------------- */
/* Reveals                                                                    */
/* -------------------------------------------------------------------------- */

function initReveals() {
  const targets = document.querySelectorAll(
    "[data-reveal], [data-reveal-line], [data-split]",
  );
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  targets.forEach((el) => observer.observe(el));
  teardowns.push(() => observer.disconnect());
}

/* -------------------------------------------------------------------------- */
/* Stat count-ups                                                             */
/* -------------------------------------------------------------------------- */

function initCounters() {
  const targets = document.querySelectorAll<HTMLElement>("[data-count]");
  if (!targets.length) return;

  const frames = new Set<number>();

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        observer.unobserve(el);

        const raw = el.dataset.count ?? "0";
        const target = parseFloat(raw);
        const decimals = raw.split(".")[1]?.length ?? 0;
        const duration = 1600;
        const start = performance.now();

        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          el.textContent = (target * eased).toFixed(decimals);
          if (p < 1) frames.add(requestAnimationFrame(tick));
        };
        frames.add(requestAnimationFrame(tick));
      }
    },
    { threshold: 0.5 },
  );

  targets.forEach((el) => {
    /* The markup carries the final figure so it is right without JS.
       Only zero it here, on the path that actually animates. */
    const raw = el.dataset.count ?? "0";
    const decimals = raw.split(".")[1]?.length ?? 0;
    el.textContent = (0).toFixed(decimals);
    observer.observe(el);
  });

  teardowns.push(() => {
    observer.disconnect();
    frames.forEach((id) => cancelAnimationFrame(id));
    frames.clear();
  });
}

/* -------------------------------------------------------------------------- */
/* Parallax + hero scroll-out                                                 */
/* -------------------------------------------------------------------------- */

function initParallax() {
  const layers = Array.from(
    document.querySelectorAll<HTMLElement>("[data-parallax]"),
  ).map((el) => ({
    el,
    /* Maximum travel in px across the element's pass through the viewport */
    amount: parseFloat(el.dataset.parallax || "60"),
  }));

  const heroFades = Array.from(
    document.querySelectorAll<HTMLElement>("[data-hero-fade]"),
  );

  if (!layers.length && !heroFades.length) return;

  let frame = 0;

  const update = () => {
    frame = 0;
    const vh = window.innerHeight;

    for (const { el, amount } of layers) {
      const rect = el.getBoundingClientRect();
      /* Skip anything well outside the viewport */
      if (rect.bottom < -vh * 0.4 || rect.top > vh * 1.4) continue;

      /* -1 when the element sits a screen below centre, +1 a screen above */
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      el.style.transform = `translate3d(0, ${(progress * amount).toFixed(2)}px, 0)`;
    }

    /* Hero content drifts up and dissolves as the page leaves it behind */
    for (const el of heroFades) {
      const y = window.scrollY;
      const fadeOver = vh * 0.62;
      const p = Math.min(y / fadeOver, 1);
      el.style.opacity = String(1 - p);
      el.style.transform = `translate3d(0, ${(y * 0.22).toFixed(2)}px, 0)`;
    }
  };

  const request = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };

  window.addEventListener("scroll", request, { passive: true });
  window.addEventListener("resize", request);
  update();

  teardowns.push(() => {
    window.removeEventListener("scroll", request);
    window.removeEventListener("resize", request);
    if (frame) cancelAnimationFrame(frame);
    /* Leave nothing displaced behind for the next page */
    layers.forEach(({ el }) => (el.style.transform = ""));
    heroFades.forEach((el) => {
      el.style.opacity = "";
      el.style.transform = "";
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Lifecycle                                                                  */
/* -------------------------------------------------------------------------- */

export function destroyMotion() {
  teardowns.forEach((fn) => fn());
  teardowns = [];
}

export function initMotion() {
  destroyMotion();

  if (prefersReduced()) {
    document.documentElement.classList.add("no-motion");
    return;
  }

  document.documentElement.classList.remove("no-motion");
  splitHeadings();
  initReveals();
  initCounters();
  initParallax();
}
