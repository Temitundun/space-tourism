// Find the button to open the menu and call it "openMenu"
const openMenu = document.querySelector(".open-menu");

// Find the button to close the menu and call it "closeMenu"
const closeMenu = document.querySelector(".close-menu");

// Find the menu itself inside the header and call it "menu"
const menu = document.querySelector("header nav");

// When we click the openMenu button, add a special label "active" to the menu
openMenu.addEventListener("click", () => {
    menu.classList.add("active");
});

// When we click the closeMenu button, take away the special label "active" from the menu
closeMenu.addEventListener("click", () => {
    menu.classList.remove("active");
});

