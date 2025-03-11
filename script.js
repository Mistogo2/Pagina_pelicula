// Inicializar Swiper (carrusel de imágenes)
var swiper = new Swiper(".mySwiper", {
    loop: true, // Habilita el loop para que el carrusel sea infinito
    navigation: {
        nextEl: ".swiper-button-next", // Botón de siguiente imagen
        prevEl: ".swiper-button-prev", // Botón de imagen anterior
    },
    pagination: {
        el: ".swiper-pagination", // Contenedor de la paginación
        clickable: true, // Permite hacer clic en los puntos de paginación
    },
    autoplay: {
        delay: 3000, // Tiempo en milisegundos entre cada cambio de imagen
        disableOnInteraction: false, // Permite que el autoplay continúe después de interactuar con el slider
    },
    speed: 3000 // Velocidad de la transición entre imágenes (3 segundos)
});

// Efecto de reducción del logo y navbar al hacer scroll
window.addEventListener("scroll", function () {
    const logo = document.querySelector(".logo img"); // Selecciona la imagen del logo
    const navbar = document.querySelector(".navbar"); // Selecciona la barra de navegación
    const navLinks = document.querySelectorAll(".nav-links li a"); // Selecciona todos los enlaces del navbar

    if (window.scrollY > 50) { // Si el usuario ha hecho scroll más de 50px
        navbar.classList.add("scrolled"); // Agrega una clase al navbar para cambiar su estilo
        logo.style.height = "30px"; // Reduce el tamaño del logo
        navbar.style.padding = "5px 0"; // Reduce el espacio vertical del navbar
        navLinks.forEach(link => {
            link.style.fontSize = "14px"; // Reduce el tamaño de fuente de los enlaces
            link.style.padding = "5px 10px"; // Ajusta el padding de los enlaces
        });
    } else { // Si el usuario vuelve a la parte superior de la página
        navbar.classList.remove("scrolled"); // Quita la clase "scrolled" para restaurar el estilo original
        logo.style.height = "50px"; // Restaura el tamaño original del logo
        navbar.style.padding = "15px 0"; // Restaura el padding original del navbar
        navLinks.forEach(link => {
            link.style.fontSize = "16px"; // Restaura el tamaño original de los enlaces
            link.style.padding = "10px 15px"; // Restaura el padding original de los enlaces
        });
    }
});

// Esperar a que el documento cargue completamente antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    let galeria = document.getElementById("galeria"); // Selecciona el contenedor de la galería

    // Función para crear estrellas animadas en la galería
    function crearEstrella() {
        let estrella = document.createElement("div"); // Crea un nuevo div para la estrella
        estrella.classList.add("star"); // Agrega la clase CSS "star"
        estrella.style.left = Math.random() * 100 + "vw"; // Posición horizontal aleatoria
        estrella.style.top = Math.random() * 100 + "vh"; // Posición vertical aleatoria
        estrella.style.animationDuration = Math.random() * 3 + 2 + "s"; // Duración de la animación aleatoria entre 2 y 5 segundos
        galeria.appendChild(estrella); // Agrega la estrella a la galería

        setTimeout(() => {
            estrella.remove(); // Elimina la estrella después de 5 segundos para evitar sobrecarga
        }, 5000);
    }

    setInterval(crearEstrella, 200); // Crea una nueva estrella cada 200ms
});

// Agregar efecto de hover a los elementos de la galería
document.querySelectorAll('.galeria-item').forEach(item => {
    const info = item.querySelector('.galeria-info'); // Selecciona la información del item de la galería

    item.addEventListener('mouseenter', () => { // Cuando el mouse entra en el elemento
        info.style.opacity = "1";  // Hace visible la información
        info.style.transform = "translateY(0)"; // Mueve la información a su posición normal
    });

    item.addEventListener('mouseleave', () => { // Cuando el mouse sale del elemento
        info.style.opacity = "0";  // Oculta la información
        info.style.transform = "translateY(20px)"; // Mueve la información hacia abajo para ocultarla
    });
});
