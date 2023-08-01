// Mobile navbar menu
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Desktop navbar scroll effect
const header = document.getElementById("header");

document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#rgba(31,30,30,0.24";
  } else {
    header.style.backgroundColor = "rgba(31, 30, 30, 0.24)";
  }
});
