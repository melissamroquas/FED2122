window.addEventListener('load', () => {

    const mobileMenuButton = document.querySelector('.mobile-menu-button');

    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuButton.addEventListener('click', () => {

        if(mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');

            //Make image hamburger
            mobileMenuButton.querySelector('img').src = 'images/menu2.svg';
        } else {
            mobileMenu.classList.add('open');

            //Make image cross
            mobileMenuButton.querySelector('img').src = 'images/exit2.svg';
        }

    });

});