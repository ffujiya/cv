const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const menuLinks = document.querySelectorAll(".menu__link");
const sections = document.querySelectorAll("section");

burger.addEventListener("click", function () {
    header.classList.toggle('active-nav');
    burger.classList.toggle('active');
    document.body.classList.toggle('lock');
});

let closeMenu = function () {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        header.classList.remove('active-nav');
        document.body.classList.remove('lock');
    }
};

for (let menuLink of menuLinks) {
    menuLink.addEventListener("click", function () {
        closeMenu();
    });
}

// active menu item
window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;
    for (let i = 0; i < sections.length; i++) {
        let sectionPosition = sections[i].offsetTop;
        if (sectionPosition - header.clientHeight < scrollDistance) {
            for (let menuLink of menuLinks) {
                menuLink.classList.remove("active");
            }
            menuLinks[i].classList.add("active");
        }
    }
});

// typed plugin
var typed = new Typed(".typed", {
    strings: ["Sergei", "Sergei Frolov"],
    typeSpeed: 90,
    startDelay: 1800,
    backSpeed: 60,

});

// header appearance on scroll
window.onscroll = function () {
    if (window.pageYOffset > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
};

// initialize swiper
const swiper = new Swiper('.swiper', {

    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
