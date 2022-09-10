import { animateCalc } from './helpers';

const calculator = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcInputs = calcBlock.querySelectorAll('input');
  const calcType = calcBlock.querySelector('.calc-type');
  const calcSquare = calcBlock.querySelector('.calc-square');
  const calcCount = calcBlock.querySelector('.calc-count');
  const calcDay = calcBlock.querySelector('.calc-day');
  const calcTotal = calcBlock.querySelector('#total');

  const validationCalc = () => {
    calcInputs.forEach((calcInput) => {
      calcInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/, '');
      });
    });
  };

  

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = +calcSquare.value;
    
    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcTypeValue && calcSquareValue) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
      
        animateCalc(Math.round(totalValue), calcTotal);

    } else {
      totalValue = 0;
    }    
  };

  calcBlock.addEventListener('input', (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      countCalc();
    }
  });

  validationCalc();
};

export default calculator;
