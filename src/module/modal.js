import { animate } from './helpers';

const modal = () => {
  const popupBtns = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const modalContent = modal.querySelector('.popup-content');  

  modalContent.style.transform = 'translateX(-50%)';  

  popupBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';

      if (window.innerWidth > 768) {
        animate({
          duration: 500,
          timing(timeFraction) {
            return Math.pow(timeFraction, 2);
          },
          draw(progress) {
            modalContent.style.left = progress * 50 + '%';
          }
        });
      } else {
        modalContent.style.left = '50%';        
      }
    });
  });

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none';      
    }
  });
};

export default modal;
