const navbar = document.getElementById("navbar");
const navMenu = document.getElementById("nav-menu");
const header = document.querySelector(".header");

hamburger.addEventListener("click", function () {
    if (window.innerWidth <= 900) {
        header.classList.toggle("show"); // Make header column layout
        navMenu.classList.toggle("show"); // Show/hide menu
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
        header.classList.remove("show");
        navMenu.classList.remove("show");
    }
});
