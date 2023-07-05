const boxes = Array.from(document.getElementsByTagName("input"));
console.log(boxes);

let lastChecked;
function handleCheck(e) {
  const text =
    this.parentElement.parentElement.getElementsByClassName("text")[0];

  if (!lastChecked) {
    if (this.checked) {
      this.classList.add("checked");
      lastChecked = this;
    } else {
      lastChecked = undefined;
      this.classList.remove("checked");
    }
  } else {
    let ids = [lastChecked.id, this.id];
    ids = ids.map((e) => parseInt(e));
    console.log(ids);
    for (let i = Math.min(...ids); i < Math.max(...ids) + 1; i++) {
      const b = document.getElementById(`${i}`);
      b.setAttribute("checked", true);
      const a = b.parentElement.parentElement.getElementsByClassName("text")[0];
      console.log(a);
      a.classList.add("checked");
    }
  }
}
//   console.log(this);

boxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheck);
});
// for (let i = 0; i < boxes.length; i++) {
//   const checkbox = boxes[i];
//
// }
