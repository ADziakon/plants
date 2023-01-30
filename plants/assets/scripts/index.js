(function (){
document.addEventListener('DOMContentLoaded', () => {
    //const menu = document.querySelector('.header__menu');
    const menuLinks = document.querySelectorAll('.header__item');
    const serviceButton = document.querySelectorAll('.service__button');
    //const clickOpen = document.querySelectorAll('.menu__button-burger');
    menuLinks[0].addEventListener('click', () => {
        document.querySelector('.garden').css({
            "filter": "blur(2px)"
          });
    });
    // if (window.innerWidth <= 767){
        for(i=0;i<menuLinks.length;i++){
            menuLinks[i].addEventListener('click', () => {
                document.querySelector('input[type="checkbox"].menu__button-burger').checked = false;
            });
        }
        document.addEventListener('click', (e) => {
            if ( !e.target.matches('.header__menu') && !e.target.matches(".header__item") 
            && !e.target.matches('.menu__button-burger') && !e.target.matches('.menu__label-burger')) {
                document.querySelector('input[type="checkbox"].menu__button-burger').checked = false;
            }
        }); 
    // }
});
}());