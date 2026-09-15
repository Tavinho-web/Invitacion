// ==========================================
// INVITACIÓN DE OCTAVIO PARA TALIANA ❤️
// ==========================================

// Tu número de WhatsApp
// IMPORTANTE: escribe tu número con código de país,
// sin +, espacios ni guiones.
// Ejemplo Colombia: 573001234567
const numeroWhatsApp = "573025425793";


// ==========================================
// ELEMENTOS DE LA PÁGINA
// ==========================================

const abrirInvitacion = document.getElementById("abrirInvitacion");
const inicio = document.getElementById("inicio");
const invitacion = document.getElementById("invitacion");
const confirmar = document.getElementById("confirmar");
const final = document.getElementById("final");
const contenedorCorazones = document.querySelector(".hearts");


// ==========================================
// ABRIR LA INVITACIÓN
// ==========================================

abrirInvitacion.addEventListener("click", () => {

    // Ocultar pantalla inicial
    inicio.classList.add("oculto");

    // Mostrar invitación
    invitacion.classList.remove("oculto");

    // Llevar al comienzo de la invitación
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Crear corazones
    crearCorazones(15);

    // Activar animaciones de las secciones
    activarAnimaciones();
});


// ==========================================
// CORAZONES FLOTANTES
// ==========================================

function crearCorazones(cantidad) {

    for (let i = 0; i < cantidad; i++) {

        const corazon = document.createElement("div");

        corazon.classList.add("heart");

        corazon.innerHTML = "♡";

        // Posición horizontal aleatoria
        corazon.style.left = Math.random() * 100 + "%";

        // Tamaño aleatorio
        const tamaño = Math.random() * 15 + 12;
        corazon.style.fontSize = tamaño + "px";

        // Duración aleatoria
        const duracion = Math.random() * 5 + 5;
        corazon.style.animationDuration = duracion + "s";

        // Retraso aleatorio
        const retraso = Math.random() * 5;
        corazon.style.animationDelay = retraso + "s";

        contenedorCorazones.appendChild(corazon);

        // Eliminar después de un tiempo
        setTimeout(() => {
            corazon.remove();
        }, 12000);
    }
}


// ==========================================
// ANIMACIONES DE LAS SECCIONES
// ==========================================

function activarAnimaciones() {

    const elementos = document.querySelectorAll(
        ".seccion, .razon, .detalle, .foto-album, .tiempo, .mensaje-recuerdo"
    );

    const observer = new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("animar");

                    observer.unobserve(entrada.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    elementos.forEach((elemento) => {
        observer.observe(elemento);
    });
}


// ==========================================
// CONFIRMAR INVITACIÓN
// ==========================================

confirmar.addEventListener("click", () => {

    // Mostrar mensaje final
    final.classList.remove("oculto");

    // Agregar animación
    final.classList.add("animar");

    // Llevar al mensaje final
    setTimeout(() => {

        final.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 100);


    // ======================================
    // MENSAJE DE WHATSAPP
    // ======================================

    const mensaje =
        "Hola Octavio ❤️ Soy Taliana y quiero confirmar mi invitación para el domingo 20 de septiembre a las 7:00 PM. 🥰";

    const mensajeCodificado = encodeURIComponent(mensaje);

    const whatsappURL =
        `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;


    // Abrir WhatsApp después de mostrar el mensaje final
    setTimeout(() => {

        if (numeroWhatsApp !== "57XXXXXXXXXX") {
            window.open(whatsappURL, "_blank");
        } else {
            alert(
                "Antes de entregar la invitación, coloca tu número de WhatsApp en script.js ❤️"
            );
        }

    }, 1200);

});


// ==========================================
// CORAZONES PERIÓDICOS
// ==========================================

setInterval(() => {

    // Solo crear corazones si la invitación está visible
    if (!invitacion.classList.contains("oculto")) {
        crearCorazones(2);
    }

}, 4000);


// ==========================================
// CUENTA REGRESIVA ⏳❤️
// ==========================================

// Fecha de la cita:
// Domingo 20 de septiembre de 2026
// 7:00 PM

const fechaCita = new Date("2026-09-20T19:00:00").getTime();

function actualizarContador() {

    const ahora = new Date().getTime();

    const diferencia = fechaCita - ahora;


    // Si ya llegó la fecha
    if (diferencia <= 0) {

        document.querySelector(".contador").innerHTML = `
            <p class="cuenta-terminada">
                ¡Llegó nuestro día! ❤️
            </p>
        `;

        return;
    }


    // Calcular tiempo restante

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );


    // Mostrar números

    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}


// Actualizar inmediatamente
actualizarContador();


// Actualizar cada segundo
setInterval(actualizarContador, 1000);
