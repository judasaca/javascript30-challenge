const boton = document.getElementById("box1");

document.addEventListener("keydown", (event) => {
  const key = event.key;
  const avaliableKeys = ["q", "w", "e", "r", "t", "y", "u", "i"];
  if (avaliableKeys.includes(key)) {
    document.getElementById(key).getElementsByTagName("audio")[0].play();
  }
});
