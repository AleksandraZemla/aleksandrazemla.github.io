
const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.nav__container');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  navContainer.classList.toggle('nav__container--active');
}

hamburger.addEventListener('click', handleClick);