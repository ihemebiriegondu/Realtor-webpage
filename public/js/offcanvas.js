const showMenu = () => {
    const menuOffcanvas = document.getElementById('menuOffcanvas');

    if (menuOffcanvas.classList.contains('invisible')) {
        menuOffcanvas.classList.remove('invisible')
        document.getElementById('body').classList.add('overflow-hidden')
    }
}

const hideMenu = () => {
    const menuOffcanvas = document.getElementById('menuOffcanvas');
    menuOffcanvas.classList.add('invisible')
    document.getElementById('body').classList.remove('overflow-hidden')
}
