let openNav = document.querySelector(".open-nav");
let closeNav = document.querySelector(".close-nav");
let body = document.body;
let mobileNav = document.querySelector(".nav");
let mobileMenu = document.querySelector(".mobile")
function openMenu(){
    mobileNav.classList.add("active");
    openNav.classList.add("active");
    closeNav.classList.add("active");
    body.classList.add("menu-active");
}
function closeMenu(){
    mobileNav.classList.remove("active");
    openNav.classList.remove("active");
    closeNav.classList.remove("active");
    body.classList.remove("menu-active");
}
openNav.addEventListener("click", openMenu);
closeNav.addEventListener("click", closeMenu);

// WHEN PRIMARY NAVIGATION LINKS ARE CLICKED

let primaryLinks = document.querySelectorAll(".pn-list-item");

primaryLinks.forEach(plink => {
    plink.addEventListener("click", closeMenu)
})