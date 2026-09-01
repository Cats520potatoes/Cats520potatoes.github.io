const fullscreenButton = document.querySelector("#fullscreenButton");

function updateFullscreenButton() {
  const isFullscreen = Boolean(document.fullscreenElement);
  fullscreenButton.setAttribute("aria-label", isFullscreen ? "退出全屏" : "进入全屏");
  fullscreenButton.querySelector("span").textContent = isFullscreen ? "退出" : "全屏";
}

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.body.requestFullscreen();
    }
  } catch (error) {
    console.warn("Fullscreen mode is unavailable in this browser.", error);
  }
}

fullscreenButton.addEventListener("click", toggleFullscreen);
document.addEventListener("fullscreenchange", updateFullscreenButton);
document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "f") toggleFullscreen();
});
