window.addEventListener('load', () => {
    const mobileTriggerEl = document.querySelector('#mobile-menu-trigger');
    const mobileHeaderEl  = document.querySelector('nav .nav-items');
    const mobileCloseEl   = document.querySelector('#mobile-menu-close');
    
    mobileTriggerEl.addEventListener('click', () => {
      if(mobileHeaderEl.classList.contains('mobile-open')) {
        mobileHeaderEl.classList.remove('mobile-open');
      } else {
        mobileHeaderEl.classList.add('mobile-open');
      }
    });
    
    mobileCloseEl.addEventListener('click', () => {
      if(mobileHeaderEl.classList.contains('mobile-open')) {
        mobileHeaderEl.classList.remove('mobile-open');
      }
    });
    
  });