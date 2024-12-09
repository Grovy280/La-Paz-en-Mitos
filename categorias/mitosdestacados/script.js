// Mostrar/Ocultar contenido de leyendas
function showMore(id) {
    const legendImage = document.getElementById(id);
    legendImage.classList.toggle('active');
    if (legendImage.classList.contains('active')) {
        legendImage.style.opacity = 1;
    } else {
        legendImage.style.opacity = 0.4;
    }
}

// Accesibilidad
function enableColorBlindMode() {
    document.body.style.filter = 'grayscale(100%)';
}

function enableHighContrast() {
    document.body.classList.add('high-contrast');
}

function increaseFontSize() {
    document.body.classList.add('large-font');
}

function resetAccessibility() {
    document.body.style.filter = '';
    document.body.classList.remove('high-contrast', 'large-font');
}
