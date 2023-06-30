const imagenes = document.getElementsByClassName("container");
function closeAllImages() {
  for (let i = 0; i < imagenes.length; i++) {
    const element = imagenes[i];
    element.querySelector(".top-text").style.top = "-50px";
    element.querySelector(".bottom-text").style.bottom = "-50px";
    element.querySelector(".text").style.fontSize = "40px";
    element.querySelector(".text").style.scale = "1";

    element.classList.remove("open");
  }
}

for (let i = 0; i < imagenes.length; i++) {
  const img = imagenes[i];
  img.addEventListener("click", () => {
    // console.log(img.style.flex);
    if (img.classList.contains("open")) {
      closeAllImages();
    } else {
      closeAllImages();
      img.classList.add("open");
      img.querySelector(".top-text").style.top = "20px";
      img.querySelector(".bottom-text").style.bottom = "20px";
      img.querySelector(".text").style.scale = "1.5";
    }
  });
}
