// change navbar styles on scrool
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// show/hide faq answer **** faqs or faq  are same
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

// show/hide nav menu

nav = document.querySelector(".nav_menu");
menu = document.querySelector("#open-menu-btn");
menu.addEventListener("click", function () {
  nav.classList.toggle("open");

  const icon = document.querySelector("button i");

  if (icon.className === "fa-solid fa-bars") {
    icon.className = "fa-solid fa-xmark";
  } else {
    icon.className = "fa-solid fa-bars";
  }
});
