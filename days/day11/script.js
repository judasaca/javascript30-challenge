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
function frameAction() {
  if (click) {
    pauseVideo();
    let rate = frameBar.value;
    video.currentTime = rate * video.duration;
  }
}
frameBar.addEventListener("mousemove", frameAction);

frameBar.addEventListener("mousedown", () => {
  click = true;
});

frameBar.addEventListener("mouseup", () => {
  frameAction();
  click = false;
});

function volumeAction() {
  if (click) {
    let rate = volumeBar.value;
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
  let currentTime = video.currentTime;
  let maxTime = video.duration;
  frameBar.value = currentTime / maxTime;
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
