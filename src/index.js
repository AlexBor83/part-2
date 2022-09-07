import timer from './module/timer';
import menu from './module/menu';
import modal from './module/modal';
import form from './module/form';
import calculator from './module/calculator';
import tabs from './module/tabs';
import slider from './module/slider';
import sendForm from './module/sendForm';

timer('5 september 2022');
menu();
modal();
form()
calculator(100);
tabs();
slider(
  'portfolio-content',
  'portfolio-item',
  'portfolio-item-active',
  'dot-active'
);
sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block',
      id: 'total',
    },
  ],
});

sendForm({ formId: 'form2' });
sendForm({ formId: 'form3' });

// const sliderBlock = document.querySelector('.portfolio-content');
// const slides = document.querySelectorAll('.portfolio-item');
