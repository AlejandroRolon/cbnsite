// Función para manejar clics en imágenes de la galería
// Esta función muestra una alerta con el texto alternativo de la imagen cuando se hace clic
function handleGalleryClick(event) {
    if (event.target.classList.contains('gallery-img')) {
        const altText = event.target.alt;
        showCustomAlert(`Has seleccionado: <b>${altText}</b>. ¡Explora más detalles!`);
    }
}

function showCustomAlert(message) {
    const alertBox = document.getElementById('custom-alert');
    alertBox.innerHTML = message;
    alertBox.style.display = 'block';
    alertBox.style.opacity = '1';
    alertBox.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        alertBox.style.opacity = '0';
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 500);
    }, 3000); // Visible 3 segundos
}



// Función para scroll suave en navegación
// Esta función maneja los clics en los enlaces de navegación para un scroll suave
function handleNavClick(event) {
    const link = event.target.closest('a');
    if (link && link.getAttribute('href').startsWith('#')) {
        event.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;

            // Animación suave manual para que no "salte"
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }

        updateActiveLink(link);

   
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    }
}

// Agrega event listeners cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona la sección de galería y agrega event listener para clics en imágenes
    const gallerySection = document.getElementById('galeria');
    gallerySection.addEventListener('click', handleGalleryClick);

    // Selecciona la navbar y agrega event listener para clics en enlaces
    const navbar = document.querySelector('.navbar-nav');

});
