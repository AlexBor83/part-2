const form = () => {
  const forms = document.querySelectorAll('form');

  const validationForm = () => {
    forms.forEach((form) => {
      const inputText = form.querySelector('[type=text]');
      const inputTel = form.querySelector('[type=tel]');
      const inputEmail = form.querySelector('[type=email]');
      const inputMess = form[1].querySelector('.mess');
      const formBtn = form.querySelector('.form-btn');

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isError = false;

        if (!/[^а-яА-Я]/g.test(inputText.value) && inputText.value != '') {
          inputText.style.border = 'none';
        } else {
          isError = true;
          alert('Введите Ваше Имя на русском');
          inputText.style.border = '2px solid red';
        }

        if (!/[^\d\-\()]/g.test(inputTel.value) && inputTel.value != '') {
          inputTel.style.border = 'none';
        } else {
          isError = true;
          alert('В ведите номер телефона');
          inputTel.style.border = '2px solid red';
        }

        if (
          /[\w\@\-\_\.\!\~\*\']/g.test(inputEmail.value) &&
          inputEmail.value != ''
        ) {
          inputEmail.style.border = 'none';
        } else {
          isError = true;
          alert('В ведите Ваш E-mail');
          inputEmail.style.border = '2px solid red';
        }

        if (!isError) {
          alert('Данные отправлены');
        } else {
          alert('Ошибка отправки данных');
        }
      });
    });

    const inputMess = forms[1].querySelector('.mess');

    forms[1].addEventListener('submit', (e) => {
      e.preventDefault();
      let isError = false;

      if (!/[^а-яА-Я]/g.test(inputMess.value) && inputMess.value != '') {
        inputMess.style.border = 'none';
      } else {
        isError = true;
        alert('Введите Ваше сообщение');
        inputMess.style.border = '2px solid red';
      }

      if (!isError) {
        alert('Данные отправлены');
      } else {
        alert('Ошибка отправки данных');
      }
    });    
  };
  validationForm();  
};

export default form;
