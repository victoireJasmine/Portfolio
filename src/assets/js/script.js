const $burgerMenu = document.querySelectorAll(".burger-menu");
const $close = document.querySelectorAll(".menu a");
const $menu = document.querySelector(".menu");
$burgerMenu.forEach(element => {
    element.addEventListener("click", showMenu)
    
});
$close.forEach(element => {
    element.addEventListener("click", closeMenu)
    
});
function showMenu() {
    $menu.classList.add("show");
    
}
function closeMenu() {
    $menu.classList.remove("show");
    
}