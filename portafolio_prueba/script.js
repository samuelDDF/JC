(() => {
  "use strict";

  // ==========================================
  // ELEMENTOS DEL DOM
  // ==========================================
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list a");

  const progressBars = document.querySelectorAll(".progress");

  const contactForm = document.querySelector("#form-contacto");
  const formStatus = document.querySelector("#form-status");


  // ==========================================
  // MENÚ HAMBURGUESA
  // ==========================================
  if (menuToggle && navList) {

    const closeMenu = () => {
      navList.classList.remove("is-open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
    };


    menuToggle.addEventListener("click", () => {

      const isOpen = navList.classList.toggle("is-open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
      );

    });


    // Cerrar menú al seleccionar una opción
    navLinks.forEach((link) => {

      link.addEventListener("click", closeMenu);

    });


    // Cerrar menú al hacer clic fuera
    document.addEventListener("click", (event) => {

      if (
        !navList.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }

    });


    // Cerrar menú con la tecla Escape
    document.addEventListener("keydown", (event) => {

      if (event.key === "Escape") {

        closeMenu();

        menuToggle.focus();

      }

    });

  }


  // ==========================================
  // ANIMACIÓN DE BARRAS DE HABILIDADES
  // ==========================================
  if (progressBars.length) {

    const animateProgressBar = (bar) => {

      const width = bar.dataset.width;

      if (width) {

        bar.style.width = width;

      }

    };


    // Usamos IntersectionObserver en lugar de
    // ejecutar código constantemente durante scroll.
    if ("IntersectionObserver" in window) {

      const observer = new IntersectionObserver(
        (entries, observerInstance) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              animateProgressBar(entry.target);

              // La animamos solamente una vez
              observerInstance.unobserve(entry.target);

            }

          });

        },
        {
          threshold: 0.25
        }
      );


      progressBars.forEach((bar) => {

        observer.observe(bar);

      });

    } else {

      // Compatibilidad con navegadores antiguos
      progressBars.forEach(animateProgressBar);

    }

  }


  // ==========================================
  // FORMULARIO DE CONTACTO
  // ==========================================
  if (contactForm && formStatus) {

    contactForm.addEventListener("submit", (event) => {

      event.preventDefault();


      // Validación HTML5
      if (!contactForm.checkValidity()) {

        contactForm.reportValidity();

        return;

      }


      // Mensaje de confirmación
      formStatus.textContent =
        "¡Gracias! Tu mensaje ha sido preparado correctamente.";


      // Limpiar formulario
      contactForm.reset();

    });

  }

})();