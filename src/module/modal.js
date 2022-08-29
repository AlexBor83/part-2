const modal = () => {
    const popupBtns = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const modalContent = modal.querySelector('.popup-content');
    const modalClose = modal.querySelector('.popup-close');
    let count = 0;
    let animaite;

    modalContent.style.transform = 'translateX(-50%)'; 
    
    const animaiteModal = () => {
        count++;
       
        animaite = requestAnimationFrame (animaiteModal);

        if (count <= 10) {
            modalContent.style.left = count*5 + '%'; 
        } else {
            cancelAnimationFrame(animaite);
        }        
    };

    popupBtns.forEach((btn) => {
        btn.addEventListener('click', () => {            
            modal.style.display = 'block';
            
            if(window.innerWidth > 768) {
                animaiteModal();
            } else {
                modalContent.style.left = '50%';
                // modalContent.style.transform = 'translateX(-50%)';
            }            
        });
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        count = 0;
    });    
};

export default modal;