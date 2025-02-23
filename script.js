// Activar el menú al hacer clic en el botón hamburguesa
const menuToggle = document.getElementById('menu-Toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
