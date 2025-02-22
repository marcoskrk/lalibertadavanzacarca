// Obtén el botón del menú y el menú desplegable
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Añadir el evento de clic para alternar el menú
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Esto agregará o quitará la clase 'active' que controlará la visibilidad del menú
});
