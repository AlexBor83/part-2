import timer from './module/timer';
import menu from './module/menu';
import modal from './module/modal';
import calculator from './module/calculator';
import tabs from './module/tabs';
import slider from './module/slider';
import sendForm from './module/sendForm';

timer('21 september 2022');
menu();
modal();
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
