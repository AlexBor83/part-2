const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);

  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка..';
  const errorText = 'Ошибка..';
  const succsessText = 'Данные отправлены';

  const validate = (list) => {
    let succsess = true;

    return succsess;
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

    if (validate(formElements)) {
      sendData(formBody)
      .then((data) => {
        statusBlock.textContent = succsessText;
        
        formElements.forEach((input) => {
          input.value = '';
        });        
      })
      .catch((error) => {
        statusBlock.textContent = errorText;        
      });     
    }
  };

  try {

    if(!form) {
        throw new Error('Верните форму')
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
