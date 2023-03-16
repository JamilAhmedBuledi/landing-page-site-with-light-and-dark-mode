// Select The Elements
let toggleButton;
let bigWrapper;
let body;
let hamburgerMenu;

function declare() {
  toggleButton = document.querySelector(".toggle-btn");
  bigWrapper = document.querySelector(".big-wrapper");
  body = document.querySelector("body");
  hamburgerMenu = document.querySelector(".hamburger-menu");
}
const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  //clone the wrapper
  dark = !dark;
  let clone = bigWrapper.cloneNode(true);
  console.log("clicked");
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  document.body.classList.add("stop-scrolling");
  clone.classList.add("copy");
  main.appendChild(clone);

  clone.addEventListener("animationend", function () {
    bigWrapper.remove();
    clone.classList.remove("copy");
    declare();
    events();
    body.classList.remove("stop-scrolling");
  });
}

function events() {
  toggleButton.addEventListener("click", toggleAnimation);
  hamburgerMenu.addEventListener("click", function () {
    bigWrapper.classList.toggle("active");
  });
}

events();
