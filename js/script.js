let menuBtn = document.querySelector(".menu-btn");
let navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// swiper script
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let header = document.querySelector(".header");

window.onscroll = () => {
  if (window.scrollY > 30) {
    header.classList.add("header-active");
  } else {
    header.classList.remove("header-active");
  }
};
