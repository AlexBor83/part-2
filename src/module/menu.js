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

  menu.addEventListener('click', (e) => {
    
    if (e.target.matches('li a')) {
      e.preventDefault();
      handelMenu();
      const item = e.target.closest('a');
      const itemId = item.getAttribute('href').substring(1);
      
      document.getElementById(itemId).scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }

    if (e.target.classList.contains('close-btn')) {
      e.preventDefault();
      handelMenu();
    }
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
