(function(){
    var elNav = $('.nav');
    var elToggler = $('#toggler');
    var elMenu = $('.nav__lists');
    var elMenuCurtain = $('#menu-curtain');

    var openMenu = () => {
        elNav.classList.add('has-sidenav');
        elMenu.classList.add('open');
        elMenuCurtain.classList.add('open');
        elToggler.classList.add('open');
        elToggler.addEventListener('click', closeMenu);
    }

    var closeMenu = () => { 
        elNav.classList.remove('has-sidenav');
        elMenu.classList.add('close');
        elMenuCurtain.classList.add('close');
        elToggler.classList.remove('open');
        elMenu.addEventListener('animationend', removeClasses);
        elToggler.removeEventListener('click', closeMenu);
    }

    var removeClasses = () => {
        elMenu.classList.remove('open', 'close');
        elMenuCurtain.classList.remove('open', 'close');
        elMenu.removeEventListener('animationend', removeClasses);
    }

    elToggler.addEventListener('click', openMenu);
    elMenuCurtain.addEventListener('click', closeMenu);
})();