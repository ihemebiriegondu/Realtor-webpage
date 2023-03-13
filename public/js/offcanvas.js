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

const showMenu2 = () => {
    const menuOffcanvas2 = document.getElementById('menuOffcanvas2');

    if (menuOffcanvas2.classList.contains('invisible')) {
        menuOffcanvas2.classList.remove('invisible')
        document.getElementById('body2').classList.add('overflow-hidden')
    }
}

const hideMenu2 = () => {
    const menuOffcanvas2 = document.getElementById('menuOffcanvas2');
    menuOffcanvas2.classList.add('invisible')
    document.getElementById('body2').classList.remove('overflow-hidden')
}
