//menuScroll
const menuItems = document.querySelectorAll('.navigation__link[data-goto]')
console.log(menuItems)
const scrollToBlock = (e) => {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

        if(burger.classList.contains('menu-open')) {
            document.body.classList.toggle('scroll-lock')
            burger.classList.toggle('menu-open')
            document.querySelector('.header__navigation').classList.toggle('header__navigation_active')
        }

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
        e.preventDefault();
    }
}

if (menuItems.length > 0) {
    menuItems.forEach(el => {
        el.addEventListener('click', scrollToBlock)
    })
}

//scrollBTN
const scrollBtn = document.querySelector('.scroll-btn');
const docHeight = document.documentElement.clientHeight;
scrollBtn.addEventListener('click', () => window.scrollTo(0, 0))

const showHideScrollBtn = () => {
    // (window.scrollY + docHeight > docHeight) ? scrollBtn.classList.add('scroll-btn_visible') : scrollBtn.classList.remove('scroll-btn_visible');
    if ((window.scrollY + docHeight) > docHeight) {
        scrollBtn.classList.add('scroll-btn_visible')
    } else {
        scrollBtn.classList.remove('scroll-btn_visible')
    }
}
window.addEventListener('scroll', showHideScrollBtn)
// const scrollUp = () => {
//     window.scrollTo(0, 0)
// }
//
// scrollBtn.addEventListener('click', scrollUp)


//day-night theme
const themeIcon = document.querySelector('.theme-icon')

const changeTheme = () => {
    document.body.classList.toggle('night-theme')
    document.querySelector('.header').classList.toggle('night-theme')
    themeIcon.classList.toggle('icon_moon')
    themeIcon.classList.toggle('icon_sun')
}

themeIcon.addEventListener('click', changeTheme)


//burger-menu
const burger = document.querySelector('.burger');

const showMenu = () => {
    document.body.classList.toggle('scroll-lock')
    burger.classList.toggle('menu-open')
    document.querySelector('.header__navigation').classList.toggle('header__navigation_active')
}

burger.addEventListener('click', showMenu);