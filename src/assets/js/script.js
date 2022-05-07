// declaration
const $burgerMenu = document.querySelectorAll(".burger-menu");
const $close = document.querySelectorAll(".menu a");
const $menu = document.querySelector(".menu");
const $list = document.querySelectorAll(".menu--list a")


// fonction et evenement 

$burgerMenu.forEach(element => {
    element.addEventListener("click", showMenu)
    
});
$close.forEach(element => {
    element.addEventListener("click", closeMenu)
    
});
$list.forEach(element => {
    element.addEventListener("click", targetSection)
    
});
function showMenu() {
    $menu.classList.add("show");
    
}
function closeMenu() {
    $menu.classList.remove("show");
    
}
function targetSection (e) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior:"smooth"
    })
  
    
}