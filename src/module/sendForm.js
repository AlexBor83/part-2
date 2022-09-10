const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const inputText = form.querySelector('[type=text]');
  const inputTel = form.querySelector('[type=tel]');
  const inputEmail = form.querySelector('[type=email]');

  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка..';
  const errorText = 'Ошибка..';
  const succsessText = 'Данные отправлены';

  inputText.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-Я\s]/g, '');
  });

  inputTel.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\d\-\()\+]/g, '');
  });

  inputEmail.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[а-яА-Я\s]/g, '');
  });

  const validate = (list) => {
    let isError = false;

    if (inputText.value.trim().length >=2) {
      inputText.style.border = 'none';
    } else {
      isError = true;
      alert('Введите Ваше Имя на русском не короче двух букв');
      inputText.style.border = '2px solid red';
    }

    if (inputTel.value.trim().length >= 6 && inputTel.value.length <= 16) {
      inputTel.style.border = 'none';
    } else {
      isError = true;
      alert('В ведите номер телефона не короче 6 символов и не длиннее 16');
      inputTel.style.border = '2px solid red';
    }

    if (
      /^[^@\s]+@[^@\s]+\.[a-z]{2,3}$/.test(inputEmail.value) &&
      inputEmail.value != ''
    ) {
      inputEmail.style.border = 'none';
    } else {
      isError = true;
      alert('E-mail не корректный');
      inputEmail.style.border = '2px solid red';
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
      if(value != '') {
        formBody[key] = value;
      }      
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === 'block' && element.textContent != 0) {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input' && element.value != 0) {
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
            const modal = document.querySelector('.popup');
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
