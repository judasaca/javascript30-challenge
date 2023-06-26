const boton = document.getElementById("box1");

document.addEventListener("keydown", (event) => {
  const key = event.key;
  const avaliableKeys = ["q", "w", "e", "r", "t", "y", "u", "i"];
  if (avaliableKeys.includes(key)) {
    const box = document.getElementById(key);
    const audio = box.getElementsByTagName("audio")[0];
    audio.currentTime = 0;
    audio.play();
    box.classList.add("playing");
  }
});

document.addEventListener("keyup", (event) => {
  const key = event.key;
  const avaliableKeys = ["q", "w", "e", "r", "t", "y", "u", "i"];
  if (avaliableKeys.includes(key)) {
    const box = document.getElementById(key);
    const audio = box.getElementsByTagName("audio")[0];
    // audio.play();
    // audio.pause();
    // audio.currentTime = 0;
    box.classList.remove("playing");
  }
});
