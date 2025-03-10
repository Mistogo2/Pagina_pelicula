// Inicializar Swiper
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

// Efecto de reducción del logo al hacer scroll
window.addEventListener("scroll", function () {
    const logo = document.querySelector(".logo img");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-links li a");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled"); // Agrega la clase cuando hay scroll
        logo.style.height = "30px"; // Reducir el logo
        navbar.style.padding = "5px 0"; // Reducir el padding del navbar
        navLinks.forEach(link => {
            link.style.fontSize = "14px"; // Reducir el tamaño de los botones
            link.style.padding = "5px 10px"; // Ajustar el padding
        });
    } else {
        navbar.classList.remove("scrolled"); // Quita la clase cuando vuelve arriba
        logo.style.height = "50px"; // Tamaño original del logo
        navbar.style.padding = "15px 0"; // Tamaño original del navbar
        navLinks.forEach(link => {
            link.style.fontSize = "16px"; // Tamaño original de los botones
            link.style.padding = "10px 15px"; // Padding original
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let galeria = document.getElementById("galeria");

    function crearEstrella() {
        let estrella = document.createElement("div");
        estrella.classList.add("star");
        estrella.style.left = Math.random() * 100 + "vw";
        estrella.style.top = Math.random() * 100 + "vh";
        estrella.style.animationDuration = Math.random() * 3 + 2 + "s";
        galeria.appendChild(estrella);

        setTimeout(() => {
            estrella.remove();
        }, 5000);
    }

    setInterval(crearEstrella, 200);
});


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

