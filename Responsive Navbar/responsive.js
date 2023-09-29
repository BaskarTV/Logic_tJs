const menu = document.querySelector('.menu');
const menuList = document.querySelector('nav ul');
const submenu = document.querySelector('.submenu');
const dropdownItem = document.querySelector('.dropdown');

let submenuVisible = false; // Variable to track the visibility of the submenu

menu.addEventListener('click', () => {
    menuList.classList.toggle('showmenu');
});



dropdownItem.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent menu
    
    // Toggle the visibility of the submenu
    if (!submenuVisible) {
        submenu.style.display = 'block'; // Show the submenu
        submenuVisible = true;
    } else {
        submenu.style.display = 'none'; // Hide the submenu
        submenuVisible = false;
    }
});

