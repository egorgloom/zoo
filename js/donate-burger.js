const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuList = document.querySelector('.menu__list');
const logoAdd = document.querySelector('.logo');
const logoAddStyle = document.querySelector('.h1_petstroy');
const headerPadding = document.querySelector('.header_container');
const headerDesigned = document.querySelector('.header_designed');
const headerDesignedButton = document.querySelector('.designed');
const activeBurgerDonate = document.querySelector('.active_burger_donate');

const body = document.body;
let arr = [iconMenu, menuBody, logoAddStyle, logoAdd, menuList, headerPadding, headerDesigned, headerDesignedButton, activeBurgerDonate];
  if (iconMenu) {
      iconMenu.addEventListener("click", applyActiveClass);
  }
  function applyActiveClass() {
      body.classList.toggle('_lock');
      arr.forEach((e) => e.classList.toggle('_active'))
}