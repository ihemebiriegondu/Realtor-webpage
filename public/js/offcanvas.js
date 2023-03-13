const showMenu = () => {
    const menuOffcanvas = document.getElementById('menuOffcanvas');

    if (menuOffcanvas.classList.contains('invisible')) {
        menuOffcanvas.classList.remove('invisible')
    }
}

const hideMenu = () => {
    const menuOffcanvas = document.getElementById('menuOffcanvas');

    menuOffcanvas.classList.add('invisible')
}
