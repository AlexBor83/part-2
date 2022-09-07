const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);

  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка..';
  const errorText = 'Ошибка..';
  const succsessText = 'Данные отправлены';

  const validate = (list) => {
    const inputText = form.querySelector('[type=text]');
    const inputTel = form.querySelector('[type=tel]');
    const inputEmail = form.querySelector('[type=email]');

    let isError = false;

    if (!/[^а-яА-Я\s]/g.test(inputText.value) && inputText.value.trim() != '') {
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

    if(form.querySelector('.mess')) {
      const inputMess = form.querySelector('.mess');

      if (!/[^а-яА-Я]/g.test(inputMess.value) && inputMess.value != '') {
        inputMess.style.border = 'none';
      } else {
        isError = true;
        alert('Введите Ваше сообщение');
        inputMess.style.border = '2px solid red';
      }
    }    
    return isError;
  };  

  const sendData = (data) => {
    // или fetch('/server.php' - для gitPages
    // fetch('https://jsonplaceholder.typicode.com/posts' - локально
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    statusBlock.style.color = 'violet';
    form.append(statusBlock);

    formData.forEach((value, key) => {
      formBody[key] = value;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    });

    if (!validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = succsessText;

          const cleanStatusBlock = () => {
            statusBlock.textContent = '';
          };
          
          const closeModal = () => {
            const modal =document.querySelector('.popup');
            modal.style.display = 'none';
          };
          
          setTimeout(cleanStatusBlock, 2000);
          setTimeout(closeModal, 4000);

          formElements.forEach((input) => {
            input.value = '';
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      statusBlock.textContent = '';
      alert('Данные не валидны');
    }
  };

  try {
    if (!form) {
      throw new Error('Верните форму');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.massage);
  }
};

export default sendForm;
