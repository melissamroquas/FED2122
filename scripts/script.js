

window.addEventListener('load', () => {

    const mobileMenuButton = document.querySelector('.mobile-menu-button');

    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuButton.addEventListener('click', () => {

        if(mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');

            //Make image hamburger
            mobileMenuButton.querySelector('#menu-close').style.display = 'none';
            mobileMenuButton.querySelector('#menu-open').style.display = 'block';
        } else {
            mobileMenu.classList.add('open');

            //Make image cross
            mobileMenuButton.querySelector('#menu-open').style.display = 'none';
            mobileMenuButton.querySelector('#menu-close').style.display = 'block';
        }

    });

    document.addEventListener('keydown', (event) => {
        
        if(event.code == "Escape") {
            mobileMenu.classList.remove('open');

            //Afbeelding hamburger menu
            mobileMenuButton.querySelector('img').src = 'images/menu2.svg';
        }
    });


});

//Dark mode
var colorChangeInput = document.querySelector("header input");
colorChangeInput.addEventListener('change', switchenVanModus);

function switchenVanModus () {
    if(colorChangeInput.checked ) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');    }
}