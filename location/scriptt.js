// menu

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader-finish');
});


const revealElements = document.querySelectorAll('section, .trend-box, .t-box, .footer-box');

function revealOnScroll() {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);


const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

function activeLinkOnScroll() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activeLinkOnScroll);