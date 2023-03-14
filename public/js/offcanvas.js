const showMenu = () => {
    const menuOffcanvas = document.getElementById('menuOffcanvas');
    const mainMenuHome = document.getElementById('menu');

    if (menuOffcanvas.classList.contains('invisible')) {
        menuOffcanvas.classList.remove('invisible')
        document.getElementById('body').classList.add('overflow-hidden')
    }

    if (mainMenuHome.classList.contains('w-0')) {
        mainMenuHome.classList.remove('w-0')
    }
}

const hideMenu = () => {
    const menuOffcanvas = document.getElementById('menuOffcanvas');
    const mainMenuHome = document.getElementById('menu');

    menuOffcanvas.classList.add('invisible')
    document.getElementById('body').classList.remove('overflow-hidden')
    mainMenuHome.classList.add('w-0')
}

const showMenu2 = () => {
    const menuOffcanvas2 = document.getElementById('menuOffcanvas2');
    const mainMenuListing = document.getElementById('menu2');

    if (menuOffcanvas2.classList.contains('invisible')) {
        menuOffcanvas2.classList.remove('invisible')
        document.getElementById('body2').classList.add('overflow-hidden')
    }

    if (mainMenuListing.classList.contains('w-0')) {
        mainMenuListing.classList.remove('w-0')
    }
}

const hideMenu2 = () => {
    const menuOffcanvas2 = document.getElementById('menuOffcanvas2');
    const mainMenuListing = document.getElementById('menu2');

    menuOffcanvas2.classList.add('invisible')
    document.getElementById('body2').classList.remove('overflow-hidden')
    mainMenuListing.classList.add('w-0')
}
