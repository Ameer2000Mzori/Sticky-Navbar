// selecting our elements
const navbarEl = document.getElementsByClassName("navbar")[0] as any;

// our functions
const navDown = () => {
  // check if window scroll y is higher then navbar height
  if (window.scrollY > navbarEl.offsetHeight + 50) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
};

// our window eventlisnter
window.addEventListener("scroll", navDown);
