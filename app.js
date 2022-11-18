let DEFAULT_SIZE = 16;
let DEFAULT_COLOR = "grey";
currentColor = DEFAULT_COLOR;
const container = document.querySelector(".container");
let num = document.querySelector(".squarenum input");
const changeColor = function () {
    if(rainbow_mode.checked)return randColor();
    else return currentColor;
};
const SetGrid = function (rows = DEFAULT_SIZE, currentColor = DEFAULT_COLOR) {
  container.innerHTML = "";
  document.querySelector(".squarenum p").innerHTML = `${rows} X ${rows}`;
  for (let i = 0; i < rows * rows; i++) {
    div = document.createElement("div");
    div.style.display = "inline-block";
    div.style.boxSizing = "border-box";
    div.style.float = "left";
    div.style.width = `${container.offsetWidth / rows}px`;
    div.style.height = `${container.offsetHeight / rows}px`;
    container.appendChild(div);
  }
  divs = document.querySelectorAll(".container div");
    for (let div of divs) {
      div.addEventListener(
        "mouseover",
        () => (div.style.backgroundColor = changeColor())
      );
    }
  }
;

const color_mode = document.querySelector("#color-mode");
const rainbow_mode = document.querySelector("#rainbow-mode");
const color_select = document.querySelector("#color-picker");
const clear_btn = document.querySelector("#clear");
const eraser = document.querySelector("#eraser");

clear_btn.addEventListener("click", () => SetGrid());

color_select.addEventListener(
  "change",
  () => (currentColor = color_select.value)
);

eraser.addEventListener("click", () => {currentColor = "white";rainbow_mode.checked = false});

color_mode.addEventListener("click", () => {currentColor = color_select.value;rainbow_mode.checked = false});

rainbow_mode.addEventListener("click", () => (rainbow_mode.checked = true));

num.addEventListener("change", () => setTimeout(change(), 500));
const change = function () {
  var rows = parseInt(num.value);
  SetGrid(rows, color_select.value);
};
window.onLoad = SetGrid(16);

const randColor = function () {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};
