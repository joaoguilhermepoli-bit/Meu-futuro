document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os elementos que devem aparecer com transição ao rolar
    const reveals = document.querySelectorAll(".reveal");
    const navbar = document.querySelector(".navbar");

    // Observador para ativar a animação quando a seção entra na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.2 // Dispara quando 20% da seção estiver visível
    });

    reveals.forEach((element) => {
        observer.observe(element);
    });

    // Efeito sutil de compactação da barra de navegação ao rolar
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "14px 8%";
        } else {
            navbar.style.padding = "20px 8%";
        }
    });
});