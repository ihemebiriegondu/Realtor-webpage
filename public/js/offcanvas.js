//navigation offcanvas

const showMenu = () => {
    const menuOffcanvas = document.getElementById('menuOffcanvas');
    const mainMenuHome = document.getElementById('menu');

    if (menuOffcanvas.classList.contains('invisible')) {
        menuOffcanvas.classList.remove('invisible')
        document.getElementById('body').classList.add('overflow-hidden')
    }

    if (mainMenuHome.classList.contains('max-w-0')) {
        mainMenuHome.classList.add('max-w-screen-sm')
        mainMenuHome.classList.remove('max-w-0')
    }
}

const hideMenu = () => {
    const menuOffcanvas = document.getElementById('menuOffcanvas');
    const mainMenuHome = document.getElementById('menu');

    menuOffcanvas.classList.add('invisible')
    document.getElementById('body').classList.remove('overflow-hidden')

    if (mainMenuHome.classList.contains('max-w-screen-sm')) {
        mainMenuHome.classList.add('max-w-0')
        mainMenuHome.classList.remove('max-w-screen-sm')
    }
}

const showMenu2 = () => {
    const menuOffcanvas2 = document.getElementById('menuOffcanvas2');
    const mainMenuListing = document.getElementById('menu2');

    if (menuOffcanvas2.classList.contains('invisible')) {
        menuOffcanvas2.classList.remove('invisible')
        document.getElementById('body2').classList.add('overflow-hidden')
    }

    if (mainMenuListing.classList.contains('max-w-0')) {
        mainMenuListing.classList.add('max-w-screen-sm')
        mainMenuListing.classList.remove('max-w-0')
    }
}

const hideMenu2 = () => {
    const menuOffcanvas2 = document.getElementById('menuOffcanvas2');
    const mainMenuListing = document.getElementById('menu2');

    menuOffcanvas2.classList.add('invisible')
    document.getElementById('body2').classList.remove('overflow-hidden')

    if (mainMenuListing.classList.contains('max-w-screen-sm')) {
        mainMenuListing.classList.add('max-w-0')
        mainMenuListing.classList.remove('max-w-screen-sm')
    }
}


//filter offCanvas

const showFilterOffcanvas = () => {
    const filterOffcanvas = document.getElementById('filterOffcanvas');
    const filterOffCan = document.getElementById('filterOffCan');

    if (filterOffcanvas.classList.contains('invisible')) {
        filterOffcanvas.classList.remove('invisible')
        document.getElementById('body2').classList.add('overflow-hidden')
    }

    if (filterOffCan.classList.contains('max-w-0')) {
        filterOffCan.classList.add('max-w-screen-sm')
        filterOffCan.classList.remove('max-w-0')
    }
}

const hideFilterOffcanvas = () => {
    const filterOffcanvas = document.getElementById('filterOffcanvas');
    const filterOffCan = document.getElementById('filterOffCan');

    filterOffcanvas.classList.add('invisible')
    document.getElementById('body2').classList.remove('overflow-hidden')

    if (filterOffCan.classList.contains('max-w-screen-sm')) {
        filterOffCan.classList.add('max-w-0')
        filterOffCan.classList.remove('max-w-screen-sm')
    }
}