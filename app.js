// Smooth scroll para los enlaces del menú de navegación
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav__link');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                const offsetTop = target.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
