// Esperamos que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // Al hacer clic en el botón hamburguesa
    menuToggle.addEventListener('click', function () {
        // Alternar la clase "active" para mostrar/ocultar el menú
        menu.classList.toggle('active');
    });
});
