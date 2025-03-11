// Inicializar Swiper (carrusel de imágenes)
var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 3000
});

// Efecto de reducción del logo y navbar al hacer scroll
window.addEventListener("scroll", function () {
    const logo = document.querySelector(".logo img");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-links li a");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        logo.style.height = "30px";
        navbar.style.padding = "5px 0";
        navLinks.forEach(link => {
            link.style.fontSize = "14px";
            link.style.padding = "5px 10px";
        });
    } else {
        navbar.classList.remove("scrolled");
        logo.style.height = "50px";
        navbar.style.padding = "15px 0";
        navLinks.forEach(link => {
            link.style.fontSize = "16px";
            link.style.padding = "10px 15px";
        });
    }
});


// Efecto de aparición de información en la galería
document.querySelectorAll('.galeria-item').forEach(item => {
    const info = item.querySelector('.galeria-info');

    item.addEventListener('mouseenter', () => {
        info.style.opacity = "1";
        info.style.transform = "translateY(0)";
    });

    item.addEventListener('mouseleave', () => {
        info.style.opacity = "0";
        info.style.transform = "translateY(20px)";
    });
});
