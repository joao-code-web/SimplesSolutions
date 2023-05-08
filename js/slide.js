const menu_cell = document.querySelector(".menu_cell");
const btn_open = document.querySelector(".btn_open");
const img_menu = document.querySelector("#img_menu");

const mobileMenu = () => {
  if (menu_cell.classList.contains("open")) {
    menu_cell.classList.remove("open");
    img_menu.src = "../img/homeImg/menu2.png";
  } else {
    menu_cell.classList.add("open");
    img_menu.src = "../img/homeImg/close2.png";
  }
};

mobileMenu();
