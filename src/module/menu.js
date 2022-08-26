const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');

  const handelMenu = () => {
    menu.classList.toggle('active-menu');
  };

  menuBtn.addEventListener('click', handelMenu);

  closeBtn.addEventListener('click', handelMenu);

  menuItems.forEach((item) => item.addEventListener('click', handelMenu));
};

export default menu;
