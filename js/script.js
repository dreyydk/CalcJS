import calculate from "./calculate.js";
import { charSet, clear } from "./functions01.js";
import { copy, themeSwitch } from "./functions02.js";

const input = document.getElementById("input");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

document.querySelectorAll(".charKey").forEach(charSet);

document.getElementById("clear").addEventListener("click", clear);

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
});

document.getElementById("equal").addEventListener("click", calculate);

document.getElementById("copyToClipboard").addEventListener("click", copy);

document.getElementById("themeSwitcher").addEventListener("click", themeSwitch);
