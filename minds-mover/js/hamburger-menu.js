const sidebarToggle = document.querySelector('.header__hamburger-menu-checkbox');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('change', () => {
    sidebar.classList.toggle("sidebar--open");
});