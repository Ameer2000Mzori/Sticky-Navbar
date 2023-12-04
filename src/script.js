// selecting our elements
var navbarEl = document.getElementsByClassName("navbar")[0];
// our functions
var navDown = function () {
    // check if window scroll y is higher then navbar height
    if (window.scrollY > navbarEl.offsetHeight + 50) {
        navbarEl.classList.add("active");
    }
    else {
        navbarEl.classList.remove("active");
    }
};
// our window eventlisnter
window.addEventListener("scroll", navDown);
