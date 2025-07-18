// script.js

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    function toggleMenu() {
        body.classList.toggle('sidebar-open');
    }

    // Abre o menu quando o botão de hambúrguer é clicado
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Fecha o menu quando o botão de fechar é clicado
    if (closeMenu) {
        closeMenu.addEventListener('click', toggleMenu);
    }

    // Fecha o menu quando o overlay é clicado
    if (overlay) {
        overlay.addEventListener('click', toggleMenu);
    }

    // Opcional: Fecha o menu quando um item é clicado (útil em mobile)
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Verifica se o menu está aberto e se a tela é pequena
            if (body.classList.contains('sidebar-open') && window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });

    // Opcional: Ajusta a visibilidade do botão de hambúrguer e do overlay
    // quando a janela é redimensionada (ex: de mobile para desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && body.classList.contains('sidebar-open')) {
            body.classList.remove('sidebar-open');
        }
    });
});