const variables = document.querySelector(":root");
const paddingElement = document.getElementById("padding");
const blurElement = document.getElementById("blur");
const colorElement = document.getElementById("color");

paddingElement.addEventListener("change", (e) => {
  variables.style.setProperty("--image-padding", `${paddingElement.value}px`);
});
blurElement.addEventListener("change", (e) => {
  variables.style.setProperty("--blur", `${blurElement.value}px`);
});
colorElement.addEventListener("change", (e) => {
  variables.style.setProperty("--color", `${colorElement.value}`);
});

paddingElement.addEventListener("mousemove", (e) => {
  variables.style.setProperty("--image-padding", `${paddingElement.value}px`);
});
blurElement.addEventListener("mousemove", (e) => {
  variables.style.setProperty("--blur", `${blurElement.value}px`);
});
// colorElement.addEventListener("mousemove", (e) => {
//   variables.style.setProperty("--color", `${colorElement.value}`);
// });
