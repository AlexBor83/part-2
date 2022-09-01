const tabs = () => {
  const tabsContent = document.querySelectorAll('.service-tab');
  const tabPanel = document.querySelector('.service-header');
  const tabBtns = document.querySelectorAll('.service-header-tab');

  tabPanel.addEventListener('click', (e) => {
    if (e.target.closest('.service-header-tab')) {
      const tab = e.target.closest('.service-header-tab');

      tabBtns.forEach((tabBtn, index) => {
        if (tabBtn === tab) {
          tabBtn.classList.add('active');
          tabsContent[index].classList.remove('d-none')
        } else {
          tabBtn.classList.remove('active');
          tabsContent[index].classList.add('d-none');
        }
      });
    }
  });
};

export default tabs;
