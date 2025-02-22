// Obtener los elementos necesarios
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Agregar el evento para mostrar u ocultar el menú cuando se haga clic en el botón hamburguesa
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
