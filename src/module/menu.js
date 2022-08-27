const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const scrollBtn = document.querySelector('main>a');
  
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');

  const handelMenu = () => {
    menu.classList.toggle('active-menu');
  };

  menuBtn.addEventListener('click', handelMenu);

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handelMenu();
  });

  menuItems.forEach((item) => {
    item.addEventListener('click', handelMenu);    
  });

  menuItems.forEach((item) => {
    const itemScroll = () => {
      item.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };
    item.addEventListener('click', itemScroll);
  });

  scrollBtn.addEventListener('click', () => {
    scrollBtn.scrollIntoView({ block: 'start', behavior: 'smooth' });    
  });
};

export default menu;
