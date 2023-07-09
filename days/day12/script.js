const code = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
let position = -1;
window.addEventListener("keyup", (e) => {
  let nextKey = code[position + 1];
  if (e.key === nextKey) {
    if (position === code.length - 2) {
      position = -1;
      console.log("KONAMI CODE");
      return;
    }
    position += 1;
  } else {
    position = -1;
    console.error("Wrong key! ", e.key);
  }
});
