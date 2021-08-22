const nav_list = document.querySelectorAll(".nav-list");
const dropMenu = document.querySelector(".drop-menu");

const d_menu_list = document.querySelectorAll(".dropdown-list");

const dropdownMenu = document.querySelector(".dropdown-menu");
const inside_menu = document.querySelector(".inside-menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
});

nav_list.forEach((list) => {
  for (let i = 0; i < nav_list.length; i++) {
    nav_list[i].classList.remove("active");
  }
  list.addEventListener("click", () => {
    for (let i = 0; i < nav_list.length; i++) {
      nav_list[i].classList.remove("active");
    }
    list.classList.add("active");
    if (list.classList.contains("drob-li")) {
      dropMenu.classList.toggle("active");
    } else {
      dropMenu.classList.remove("active");
    }
  });
});

d_menu_list.forEach((list) => {
  list.addEventListener("click", () => {
    if (list.classList.contains("drop-li")) {
      inside_menu.classList.toggle("active");
    } else {
      inside_menu.classList.remove("active");
    }
  });
});

const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");

let index = 0;
function indexs(position) {
  index += position;

  if (index > slide.length) {
    index = 1;
  } else if (index < 1) {
    index = slide.length;
  }
  slides.style.left = `-${index - 1}00%`;

  slideIndex = index;
}

function show() {
  index++;
  if (index > slide.length) {
    index = 1;
  } else if (index < 1) {
    index = slide.length;
  }
  slides.style.left = `-${index - 1}00%`;
}

let interval = setInterval(() => {
  show();
}, 3000);

slider.addEventListener("mouseover", () => {
  clearInterval(interval);
});
slider.addEventListener("mouseout", () => {
  interval = setInterval(() => {
    show();
  }, 3000);
});


$(document).ready(function () {
  $(".sub-btn").click(function () {
    $(this).next(".inside-menu").slideToggle();
  });
});