const menuToggler = document.querySelector('.menu-toggler');
const topNav = document.querySelector('.top-nav');
const navLink = document.querySelectorAll('.top-nav .nav-link');
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000
});

const menu = () => {
    menuToggler.addEventListener('click', () => {
        menuToggler.classList.add('open');
        topNav.classList.add('open');
        menuToggler.addEventListener('click', () => {
            menuToggler.classList.remove('open');
            topNav.classList.remove('open');
            menu();
        })
    })

    navLink.forEach(navLink => {
        navLink.addEventListener('click', () => {
            menuToggler.classList.toggle('open');
            topNav.classList.toggle('open');
            menu();
        })
    });

}
menu();
