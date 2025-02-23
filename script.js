document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // Cuando se haga clic en el botón hamburguesa
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active'); // Alternamos la clase "active" para mostrar/ocultar el menú
    });
});
