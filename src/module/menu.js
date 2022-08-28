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
    item.addEventListener('click', (e) => {
      e.preventDefault();

      const itemId = item.getAttribute('href').substring(1);

      document.getElementById(itemId).scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    });
  });

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const btnId = scrollBtn.getAttribute('href').substring(1);

    document.getElementById(btnId).scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  });
};

export default menu;
