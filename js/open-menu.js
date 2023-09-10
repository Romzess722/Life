const btmMenu = document.querySelector(".menu__button");
const openMenu = document.querySelector(".menu__icon-menu");
const closeMenu = document.querySelector(".menu__icon-cross");

const currentExpandedValue = btmMenu.getAttribute("aria-expanded");
const menuContainer = document.querySelector(".mobail-menu");

btmMenu.addEventListener("click", () => {
  if (openMenu.style.opacity === "0") {
    openMenu.style.opacity = "1";
    closeMenu.style.opacity = "0";
    menuContainer.classList.remove("mobail-menu--open");
    document.body.classList.remove("modal-open");
  } else {
    openMenu.style.opacity = "0";
    closeMenu.style.opacity = "1";
    menuContainer.classList.add("mobail-menu--open");
    document.body.classList.add("modal-open");
  }
});

btmMenu.addEventListener("click", function () {
  const currentExpandedValue = btmMenu.getAttribute("aria-expanded");

  if (currentExpandedValue === "false") {
    btmMenu.setAttribute("aria-expanded", "true");
  } else {
    btmMenu.setAttribute("aria-expanded", "false");
  }
});
