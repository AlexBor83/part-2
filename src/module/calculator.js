const calculator = () => {

    const calc = document.querySelector('.calc-block');
    const calcInputs = calc.querySelectorAll('input');

    const validationCalc = () => {
        calcInputs.forEach((calcInput) => {
            calcInput.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/\D/, '');
            });
        });
    };

    validationCalc();
};

export default calculator;