function animate({ timing, draw, duration }) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

const animateCalc = (num, element) => {
  const time = 2000;
  const step = 100;

  const animateNum = () => {
    let n = 0;
    let timeAnimate = Math.round(time / (num / step));

    let interval = setInterval(() => {
      n = n + step;
      if (n === num) {
        clearInterval(interval);
      }
      element.textContent = n;
    }, timeAnimate);
  };
  animateNum();
};

export { animate, animateCalc };
