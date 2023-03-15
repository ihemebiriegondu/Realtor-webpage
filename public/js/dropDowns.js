const addHidden = () => {
    const allTopNavDropDown = document.querySelectorAll('.allTopNavDropDown');

    allTopNavDropDown.forEach(topNav => {
        if (topNav.classList.contains('hidden')) {
            return
        } else {
            topNav.classList.add('hidden')
        }
    });
}

window.onclick = (e) => {
    console.log(e.target)
    if (e.target.classList.contains('dropDownBtn')) {
    } else {
        addHidden();
    }
}

const showListingDropDown = () => {
    addHidden();
    const listingDropDown1 = document.getElementById('listingDropDown1')

    listingDropDown1.classList.toggle('hidden')
}

const showPagesDropDown = () => {
    addHidden();
    const pagesDropDown1 = document.getElementById('pagesDropDown1')

    pagesDropDown1.classList.toggle('hidden')
}

const showPropertyDropDown = () => {
    addHidden();
    const propertyDropDown1 = document.getElementById('propertyDropDown1')

    propertyDropDown1.classList.toggle('hidden')
}

const showListingDropDown2 = () => {
    addHidden();
    const listingDropDown3 = document.getElementById('listingDropDown3')

    listingDropDown3.classList.toggle('hidden')
}

const showPagesDropDown2 = () => {
    addHidden();
    const pagesDropDown3 = document.getElementById('pagesDropDown3')

    pagesDropDown3.classList.toggle('hidden')
}

const showPropertyDropDown2 = () => {
    addHidden();
    const propertyDropDown3 = document.getElementById('propertyDropDown3')

    propertyDropDown3.classList.toggle('hidden')
}










const showListingAccordion = () => {
    const listingDropDown2 = document.getElementById("listingDropDown2");

    listingDropDown2.classList.toggle('hidden')
}

const showPagesAccordion = () => {
    const pagesDropDown2 = document.getElementById("pagesDropDown2");

    pagesDropDown2.classList.toggle('hidden')
}

const showPropertyAccordion = () => {
    const propertyDropDown2 = document.getElementById("propertyDropDown2");

    propertyDropDown2.classList.toggle('hidden')
}

const showListingAccordion2 = () => {
    const listingDropDown4 = document.getElementById("listingDropDown4");

    listingDropDown4.classList.toggle('hidden')
}

const showPagesAccordion2 = () => {
    const pagesDropDown4 = document.getElementById("pagesDropDown4");

    pagesDropDown4.classList.toggle('hidden')
}

const showPropertyAccordion2 = () => {
    const propertyDropDown4 = document.getElementById("propertyDropDown4");

    propertyDropDown4.classList.toggle('hidden')
}