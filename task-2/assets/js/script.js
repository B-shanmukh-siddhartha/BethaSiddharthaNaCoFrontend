const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
    // Toggle the expanded class to expand/collapse the navbar
    if (navMenu.style.display === "none" || navMenu.style.display === "") {
        navMenu.style.display = "block"; // Show the menu
        navbar.style.maxHeight = "1000px"; // Expand the navbar (adjust the height as needed)
    } else {
        navMenu.style.display = "none"; // Hide the menu
        navbar.style.maxHeight = "60px"; // Collapse back to initial height
    }
});
