const projects = document.querySelectorAll('.project');

document.addEventListener('mousemove', (event) => {
    let closestProject = null; // Variable para almacenar la imagen más cercana
    let closestDistance = Infinity; // Inicializa la distancia más cercana con un número alto

    projects.forEach((project) => {
        const rect = project.getBoundingClientRect();
        const projectCenterX = rect.left + rect.width / 2;
        const projectCenterY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
            Math.pow(event.clientX - projectCenterX, 2) +
            Math.pow(event.clientY - projectCenterY, 2)
        );

        // Verifica si esta imagen es la más cercana
        if (distance < closestDistance) {
            closestDistance = distance;
            closestProject = project; // Guarda la imagen más cercana
        }
    });

    // Si hay un proyecto más cercano, aplica los efectos
    if (closestProject) {
        const maxDistance = 400; // Distancia máxima para el efecto
        const scaleFactor = Math.max(1, (maxDistance - closestDistance) / maxDistance); // Escala
        const opacityFactor = Math.max(0.2, (maxDistance - closestDistance) / maxDistance); // Opacidad

        closestProject.style.transform = `scale(${1 + scaleFactor * 0.5})`; // Escala máxima del 1.5x
        closestProject.style.opacity = opacityFactor; // Ajusta la opacidad
    }

    // Resetea el tamaño y la opacidad de los otros proyectos
    projects.forEach((project) => {
        if (project !== closestProject) {
            project.style.transform = `scale(1)`; // Reset scale
            project.style.opacity = 0.2; // Reset opacity
        }
    });
});

// Resetea el tamaño y la opacidad al salir del mouse de la sección
projects.forEach((project) => {
    project.addEventListener('mouseleave', () => {
        project.style.transform = `scale(1)`; // Reset scale
        project.style.opacity = 0.2; // Reset opacity
    });
});

document.querySelectorAll('.project').forEach((project) => {
    project.addEventListener('click', () => {
        alert('Project clicked!');
    });
});

// Crear rastro de luz al mover el mouse
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'light-trail';
    document.body.appendChild(trail);
    
    // Colocar el rastro donde está el mouse
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;

    // Desvanecer y eliminar el rastro después de un tiempo
    setTimeout(() => {
        trail.style.opacity = 0; // Desvanecer el rastro
        setTimeout(() => {
            trail.remove(); // Eliminar el elemento después del desvanecimiento
        }, 500); // Tiempo de espera para eliminar el elemento
    }, 150); // Tiempo antes de iniciar el desvanecimiento
});
