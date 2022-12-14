const menu = () => {
  const body = document.querySelector('body');
  // const menuBtn = document.querySelector('.menu');
  const scrollBtn = document.querySelector('main>a');

  const menu = document.querySelector('menu');

  const handelMenu = () => {
    menu.classList.toggle('active-menu');
  };

  body.addEventListener('click', (e) => {
    if (e.target.closest('.menu')) {
      handelMenu();
    } else if (
      e.target.classList.contains('close-btn')) {
      e.preventDefault();
      menu.classList.remove('active-menu');
    } else if (
      !e.target.closest('menu')
    ) {
      menu.classList.remove('active-menu');
    }

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
