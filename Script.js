document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnScrollTop')
        .addEventListener('click', function(){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    );

    const hour = new Date().getHours();
    const isDarkTime = (hour >= 18 || hour < 6);

    if (isDarkTime) {
        document.body.classList.add('dark-mode');

        // Actualiza las <source> de la imagen
        const heroPicture = document.querySelector('.hero__img');
        if (heroPicture) {
            const sources = heroPicture.querySelectorAll('source');
            sources.forEach(source => {
                source.srcset = source.srcset.replace('gray-blank', 'gray');
            });
        }

        // Actualiza la imagen <img> para el modo oscuro
        const heroImg = document.querySelector('.hero__image');
        if (heroImg) {
            heroImg.src = heroImg.src.replace('gray-blank', 'gray');
        }
    } else {
        document.body.classList.remove('dark-mode');
    }
});