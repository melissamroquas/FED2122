window.addEventListener('load', () => {
    const mobileTriggerEl = document.querySelector('#mobile-menu-trigger');
    const mobileHeaderEl  = document.querySelector('.header-mobile');
    const mobileCloseEl   = document.querySelector('#header-mobile-close');
    
    mobileTriggerEl.addEventListener('click', () => {
      if(mobileHeaderEl.classList.contains('header-mobile-open')) {
        mobileHeaderEl.classList.remove('header-mobile-open');
      } else {
        mobileHeaderEl.classList.add('header-mobile-open');
      }
    });
    
    mobileCloseEl.addEventListener('click', () => {
      if(mobileHeaderEl.classList.contains('header-mobile-open')) {
        mobileHeaderEl.classList.remove('header-mobile-open');
      }
    });
    
  });