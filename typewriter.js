"use strict";

let Text = document.querySelector("#typewriter").textContent;
let counter = 0;
init();
function init() {
  document.querySelector("#typewriter").textContent = "";

  Loop();
}
function Loop() {
  counter++;
  document.querySelector("#typewriter").textContent = Text.substring(
    0,
    counter
  );
  if (Text.length > counter) {
    setTimeout(Loop, Math.random() * 200);
  }
}
