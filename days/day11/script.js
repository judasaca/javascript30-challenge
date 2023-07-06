const video = document.getElementById("video");
// video.play();
console.dir(video);

const play = document.getElementById("play-container");
const playIcon = document.getElementById("play");
const pauseIcon = document.getElementById("pause");
const volumeBar = document.getElementById("volume");
const volumeBarContainer = document.getElementById("volume-container");
const frameBar = document.getElementById("frame");
const frameBarContainer = document.getElementById("frame-container");

const next = document.getElementById("right-container");
const previous = document.getElementById("left-container");

let state = "paused";

function playVideo() {
  state = "playing";
  pauseIcon.style.display = "flex";
  playIcon.style.display = "none";

  video.play();
}
function pauseVideo() {
  state = "paused";
  pauseIcon.style.display = "none";
  playIcon.style.display = "flex";
  video.pause();
}

function playPause(e) {
  //   console.log(this);
  if (state === "paused") {
    playVideo();
  } else {
    pauseVideo();
  }
}
let click = false;

play.addEventListener("click", playPause);
function frameAction(e) {
  if (click) {
    pauseVideo();
    let maxWidth = parseInt(frameBarContainer.offsetWidth);
    let currentWidth = parseInt(frameBar.style.width.replace("px", ""));
    let rate = currentWidth / maxWidth;
    video.currentTime = rate * video.duration;
  }
}
frameBar.addEventListener("mousemove", frameAction);

frameBar.addEventListener("mousedown", () => {
  click = true;
  console.log("entro");
});

frameBar.addEventListener("mouseup", () => {
  click = false;
  console.log("fuera");
});

function volumeAction(e) {
  if (click) {
    console.log(click);
    let maxWidth = parseInt(volumeBarContainer.offsetWidth);
    let currentWidth = parseInt(volumeBar.style.width.replace("px", ""));
    let rate = currentWidth / maxWidth;
    video.volume = Math.min(rate, 1);
  }
}
volumeBar.addEventListener("mousemove", volumeAction);
volumeBar.addEventListener("mousedown", () => {
  click = true;
});

volumeBar.addEventListener("mouseup", () => {
  click = false;
});

function updateFrameBar() {
  let maxWidth = parseInt(frameBarContainer.offsetWidth);
  let currentTime = video.currentTime;
  let maxTime = video.duration;
  frameBar.style.width = `${(currentTime * maxWidth) / maxTime}px`;
}

function timing() {
  if (state === "playing") {
    updateFrameBar();
  }
}
setInterval(timing, 1000);

next.addEventListener("click", () => {
  video.currentTime = Math.min(video.duration, video.currentTime + 10);
  updateFrameBar();
});
previous.addEventListener("click", () => {
  video.currentTime = Math.max(0, video.currentTime - 10);
  updateFrameBar();
});
