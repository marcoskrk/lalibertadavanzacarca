// Código JavaScript para mostrar/ocultar el menú al hacer clic en el botón hamburguesa
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("active");
});
document.getElementById('menu-toggle').addEventListener("click", function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
});
