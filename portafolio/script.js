// Menú hamburguesa
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar ul");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Animación de barras al hacer scroll
const skills = document.querySelectorAll(".progreso");
window.addEventListener("scroll", () => {
  skills.forEach(bar => {
    const pos = bar.getBoundingClientRect().top;
    if (pos < window.innerHeight) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});
