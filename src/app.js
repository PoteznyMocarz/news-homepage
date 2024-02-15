let openMenuBtn = document.getElementById("openMenuBtn");
let closeMenuBtn = document.getElementById("closeMenuBtn");
let menu = document.getElementById("menu");

function openMenu() {
    menu.classList.remove("hidden");
}

openMenuBtn.addEventListener("click", openMenu);

function closeMenu() {
    menu.classList.add("hidden");
}

closeMenuBtn.addEventListener("click", closeMenu);

if(window.innerWidth <= 1200) {
    document.getElementById("mainImg").setAttribute("src", "/assets/images/image-web-3-mobile.jpg");
}