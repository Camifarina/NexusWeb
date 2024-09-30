let fecha = new Date(2024, 10, 15, 16, 0);
//                  año, mes, día, hora, minuto
let msFecha = fecha.getTime();

let parrafoDias = document.querySelector("#dias");
let parrafoHoras = document.querySelector("#horas");
let parrafoMinutos = document.querySelector("#minutos");
let parrafoSegundos = document.querySelector("#segundos");
let spanFecha = document.querySelector("#fecha");
let cuentaAtras = document.querySelector("#cuenta-atras");

spanFecha.innerText = fecha.toLocaleDateString();

let intervalo = setInterval(() => {

    let hoy = new Date().getTime();

    let distancia = msFecha - hoy;

    let msPorDia = 1000 * 60 * 60 * 24;
    let msPorHora = 1000 * 60 * 60;
    let msPorMinuto = 1000 * 60;
    let msPorSegundo = 1000;

    let dias = Math.floor(distancia / msPorDia);
    let horas = Math.floor((distancia % msPorDia) / msPorHora);
    let minutos = Math.floor((distancia % msPorHora) / msPorMinuto);
    let segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo);

    
    parrafoDias.innerText = dias;
    parrafoHoras.innerText = horas < 10 ? "0" + horas : horas;
    parrafoMinutos.innerText = minutos < 10 ? "0" + minutos : minutos;
    parrafoSegundos.innerText = segundos < 10 ? "0" + segundos : segundos;


    if (distancia < 0) {
        clearInterval(intervalo);
        cuentaAtras.innerHTML = "<p class='grande'>¡se acabó el tiempo!</p>"
    }
    
}, 1000)



        const swiper = new Swiper('.mySwiper', {
            slidesPerView: 1,  // Para dispositivos móviles
            spaceBetween: 10,  // Espacio entre tarjetas
            loop: true,        // Carrusel infinito
            pagination: {
                el: '.swiper-pagination',
                clickable: true,  // Permite hacer clic en los puntos
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {  // Pantallas medianas (tablets)
                    slidesPerView: 1,  // Solo una tarjeta visible
                    spaceBetween: 20,  // Más espacio entre tarjetas
                },
                768: {  // Pantallas grandes (tablets o laptops pequeñas)
                    slidesPerView: 2,  // Mostrar dos tarjetas al mismo tiempo
                    spaceBetween: 30,
                },
                1024: {  // Pantallas de escritorio
                    slidesPerView: 3,  // Mostrar tres tarjetas en pantallas de escritorio
                    spaceBetween: 40,
                },
            },
        });

        new Swiper('.carrusel2', {
            slidesPerView: 1,  // Para dispositivos móviles
            spaceBetween: 10,  // Espacio entre tarjetas
            loop: true,        // Carrusel infinito
            pagination: {
                el: '.swiper-pagination',
                clickable: true,  // Permite hacer clic en los puntos
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {  // Pantallas medianas (tablets)
                    slidesPerView: 1,  // Solo una tarjeta visible
                    spaceBetween: 20,  // Más espacio entre tarjetas
                },
                768: {  // Pantallas grandes (tablets o laptops pequeñas)
                    slidesPerView: 1,  // Mostrar dos tarjetas al mismo tiempo
                    spaceBetween: 30,
                },
                1024: {  // Pantallas de escritorio
                    slidesPerView: 1,  // Mostrar tres tarjetas en pantallas de escritorio
                    spaceBetween: 40,
                },
            },
        });

        // Seleccionamos la sección que será el "trigger" y los elementos que serán visibles
const section = document.querySelector('#triggerSection');
const hiddenContents1 = document.querySelectorAll('.hidden-content-img');
const hiddenContents2 = document.querySelectorAll('.hidden-content-tex');

// Función para agregar la clase "visible" cuando el contenido es visible en pantalla
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            hiddenContents1.forEach(content => {
                content.classList.add('visible');
            });
        } else {
            hiddenContents1.forEach(content => {
                content.classList.remove('visible');
            });
        }
    });
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            hiddenContents2.forEach(content => {
                content.classList.add('visible');
            });
        } else {
            hiddenContents2.forEach(content => {
                content.classList.remove('visible');
            });
        }
    });
}, {
    threshold: 0.9  // El contenido aparece cuando el 50% de la sección es visible
});


// Observar la sección que activa el efecto
observer.observe(section);

function verificarCodigo() {
    const codigoCorrecto = "1234"; // El código correcto
    const codigoIngresado = document.getElementById("codigo-input").value;
    const mensajeError = document.getElementById("mensaje-error");
    const codigoSection = document.getElementById("codigo");
    const contenidoSecreto = document.getElementById("contenido-secreto");

    // Verifica si el código ingresado es correcto
    if (codigoIngresado === codigoCorrecto) {
        // Si el código es correcto, oculta la sección del código
        codigoSection.style.display = "none";
    } else {
        // Si el código es incorrecto, muestra un mensaje de error
        mensajeError.style.display = "block";
    }
}

