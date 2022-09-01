const slider = () => {
  const sliderBlock = document.querySelector('.portfolio-content');
  const slides = document.querySelectorAll('.portfolio-item');

  const blockDots = document.querySelector('.portfolio-dots')
  
  let dots;
  const timerInterval = 2000;
  let curentSlide = 0;
  let interval;

  const pushDots = () => {

    for (let i = 0; i < slides.length; i++) {
        blockDots.insertAdjacentHTML('beforeend', `<li class="dot"></li>`);        
    }
    dots = document.querySelectorAll('.dot');
    dots[0].classList.add('dot-active');
  };

  







  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, curentSlide, 'portfolio-item-active');
    prevSlide(dots, curentSlide, 'dot-active');

    curentSlide++;
    if (curentSlide >= slides.length) {
      curentSlide = 0;
    }

    nextSlide(slides, curentSlide, 'portfolio-item-active');
    nextSlide(dots, curentSlide, 'dot-active');
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

    prevSlide(slides, curentSlide, 'portfolio-item-active');
    prevSlide(dots, curentSlide, 'dot-active');

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

    nextSlide(slides, curentSlide, 'portfolio-item-active');
    nextSlide(dots, curentSlide, 'dot-active');
  });

  sliderBlock.addEventListener('mouseenter', (e) => {
    
    if (e.target.matches('.dot, .portfolio-btn')) {
      stopSlide();
    }
  }, true);

  sliderBlock.addEventListener('mouseleave', (e) => {
   
    if (e.target.matches('.dot, .portfolio-btn')) {
        startSlide(timerInterval);
    }
  }, true);

  pushDots();
  startSlide(timerInterval);
};

export default slider;
