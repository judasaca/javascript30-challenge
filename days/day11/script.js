const video = document.getElementById("video");
// video.play();
console.dir(video);

const play = document.getElementById("play-container");
const playIcon = document.getElementById("play");
const pauseIcon = document.getElementById("pause");
const volumeBar = document.getElementById("volume");
const frameBar = document.getElementById("frame");
const frameBarContainer = document.getElementById("frame-container");

let state = "paused";
function playPause(e) {
  //   console.log(this);
  if (state === "paused") {
    state = "playing";
    pauseIcon.style.display = "flex";
    playIcon.style.display = "none";

    video.play();
  } else {
    state = "paused";
    pauseIcon.style.display = "none";
    playIcon.style.display = "flex";
    video.pause();
  }
}
let click = false;

play.addEventListener("click", playPause);
function frameAction(e) {
  video.pause();
  if (click) {
    let maxWidth = parseInt(frameBarContainer.offsetWidth);
    let currentWidth = parseInt(frameBar.style.width.replace("px", ""));
    let rate = currentWidth / maxWidth;
    video.currentTime = rate * video.duration;
  }
}
frameBar.addEventListener("mousemove", frameAction);
frameBar.addEventListener("click", () => {
  console.log("click");
});

frameBar.addEventListener("mousedown", () => {
  console.log("entro");
});

frameBar.addEventListener("mouseup", () => {
  console.log("fuera");
});
