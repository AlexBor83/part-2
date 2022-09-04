const slider = (
  classSlider,
  classSlides,
  classItemActive = 'portfolio-item-active',
  classDotActive = 'dot-active'
) => {

  document.addEventListener('DOMContentLoaded', () => {
    const sliderBlock = document.querySelector(`.${classSlider}`);
    const slides = document.querySelectorAll(`.${classSlides}`);

    if(!sliderBlock || !slides) {
      return;
    }

    const blockDots = document.querySelector('.portfolio-dots');

    let dots;
    const timerInterval = 2000;
    let curentSlide = 0;
    let interval;

    const pushDots = () => {
      for (let i = 0; i < slides.length; i++) {
        blockDots.insertAdjacentHTML('beforeend', `<li class="dot"></li>`);
      }
      dots = document.querySelectorAll('.dot');
      dots[0].classList.add(`${classDotActive}`);
    };

    const prevSlide = (elems, index, classItemActive) => {
      elems[index].classList.remove(classItemActive);
    };

    const nextSlide = (elems, index, classItemActive) => {
      elems[index].classList.add(classItemActive);
    };

    const autoSlide = () => {
      prevSlide(slides, curentSlide, `${classItemActive}`);
      prevSlide(dots, curentSlide, `${classDotActive}`);

      curentSlide++;
      if (curentSlide >= slides.length) {
        curentSlide = 0;
      }

      nextSlide(slides, curentSlide, `${classItemActive}`);
      nextSlide(dots, curentSlide, `${classDotActive}`);
    };

    const startSlide = (timer = 1500) => {
      interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
      e.preventDefault();

      if (!e.target.matches('.dot, .portfolio-btn')) {
        return;
      }

      prevSlide(slides, curentSlide, `${classItemActive}`);
      prevSlide(dots, curentSlide, `${classDotActive}`);

      if (e.target.matches('#arrow-right')) {
        curentSlide++;
      } else if (e.target.matches('#arrow-left')) {
        curentSlide--;
      } else if (e.target.classList.contains('dot')) {
        dots.forEach((dot, index) => {
          if (e.target === dot) {
            curentSlide = index;
          }
        });
      }

      if (curentSlide >= slides.length) {
        curentSlide = 0;
      }

      if (curentSlide < 0) {
        curentSlide = slides.length - 1;
      }

      nextSlide(slides, curentSlide, `${classItemActive}`);
      nextSlide(dots, curentSlide, `${classDotActive}`);
    });

    sliderBlock.addEventListener(
      'mouseenter',
      (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
          stopSlide();
        }
      },
      true
    );

    sliderBlock.addEventListener(
      'mouseleave',
      (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
          startSlide(timerInterval);
        }
      },
      true
    );

    pushDots();
    startSlide(timerInterval);
  });
};

export default slider;
