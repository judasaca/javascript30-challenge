const canvas = document.getElementById("board");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = "#BADA55";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 5;
let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;
// let lineWidth = 1;
let direction = true;
function draw(e) {
  if (!isDrawing) return;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  hue = (hue + 1) % 360;
  context.strokeStyle = `hsl(${hue}, 100%, 50% )`;
  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
  //   lineWidth = ((lineWidth + 1) % 20) + 1;
  //   context.lineWidth = lineWidth;
  context.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;
}
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
