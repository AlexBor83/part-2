const modal = () => {
    const popupBtns = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const modalClose = modal.querySelector('.popup-close');

    popupBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';   
        });
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    console.log(modal);
};


export default modal;