import Lenis from "lenis";

let lenisInstance;

export default function smoothScroller() {
  if (lenisInstance) return lenisInstance;

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const handleResize = () => {
    lenis.resize();
  };

  window.addEventListener("resize", handleResize);

  lenisInstance = lenis;

  return lenis;
}
