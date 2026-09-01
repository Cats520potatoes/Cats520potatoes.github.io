const fullscreenButton = document.querySelector("#fullscreenButton");
const slide = document.querySelector(".resume-slide");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function updateFullscreenButton() {
  const isFullscreen = Boolean(document.fullscreenElement);
  fullscreenButton.setAttribute("aria-label", isFullscreen ? "退出全屏" : "进入全屏");
  fullscreenButton.classList.toggle("is-active", isFullscreen);
}

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch (error) {
    console.warn("Fullscreen mode is unavailable in this browser.", error);
  }
}

function updateParallax(event) {
  if (reduceMotion.matches || window.innerWidth <= 720) return;

  const bounds = slide.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
  const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
  slide.style.setProperty("--stage-x", x.toFixed(3));
  slide.style.setProperty("--stage-y", y.toFixed(3));
}

function resetParallax() {
  slide.style.setProperty("--stage-x", "0");
  slide.style.setProperty("--stage-y", "0");
}

fullscreenButton.addEventListener("click", toggleFullscreen);
document.addEventListener("fullscreenchange", updateFullscreenButton);

document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "f") toggleFullscreen();
});

slide.addEventListener("pointermove", updateParallax);
slide.addEventListener("pointerleave", resetParallax);

window.addEventListener("load", () => {
  requestAnimationFrame(() => document.body.classList.add("is-ready"));
});
