// Toggle Navigation
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.add("open");
});

close.addEventListener("click", () => {
  navList.classList.remove("open");
});

// theme
const icons = [...document.querySelectorAll(".theme-icon")];

icons.forEach((icon) => {
  if (icon) {
    icon.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        icon.innerHTML = '<i class="bx bx-sun"></i>';
        icon.style.color = "white";
      } else {
        icon.innerHTML = '<i class="bx bx-moon"></i>';
        icon.style.color = "#121713";
      }
    });
  }
});

// Colors
const widget = document.querySelector(".widget");
const control = document.querySelector(".control");

widget.addEventListener("click", () => {
  control.classList.toggle("open");
});

const colors = [...document.querySelectorAll(".colors span")];
document.querySelector(":root").style.setProperty("--customColor", "#f88d00");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    const currentColor = color.dataset.id;
    document
      .querySelector(":root")
      .style.setProperty("--customColor", currentColor);
  });
});

window.addEventListener("scroll", () => {
  control.classList.remove("open");
});

// Typeit
new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Designer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Developer", {delay: 400})
  .pause(500)
  .delete(9)
  .type("Student", {delay: 400})
  .pause(500)
  .delete(9)
  .type("Programmer")
  .pause(500)
  .delete(9)
  .go();

// Fix Nav
const navBar = document.querySelector(".navigation");
const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Filter Projects

const filterBtn = document.querySelector(".filter-btns");
const spans = [...document.querySelectorAll(".filter-btns span")];
const items = [...document.querySelectorAll(".projects .item")];

filterBtn.addEventListener("click", (e) => {
  const filter = e.target.closest("span");
  if (!filter) return;
  const id = filter.dataset.id;
  spans.forEach((span) => span.classList.remove("active"));
  filter.classList.add("active");

  items.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("active");
    const targetId = item.dataset.id;

    if (targetId === id) {
      item.classList.remove("hide");
      item.classList.add("active");
    } else if (id === "all") {
      item.classList.remove("hide");
    }
  });
});

// Swiper
const swiper = new Swiper(".right-swiper", {
  cssMode: true,
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Scroll To

const links = [...document.querySelectorAll(".scroll-link")];

links.map((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navList.classList.remove("open");
  });
});

AOS.init();
