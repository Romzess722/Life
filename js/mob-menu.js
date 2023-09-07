const menuButton = document.querySelector("[data-menu-button]");
const menuList = document.querySelector("[data-menu]");

menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", !expanded);

  menuList.classList.toggle("open");
});
