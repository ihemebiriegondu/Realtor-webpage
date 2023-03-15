const showListingDropDown = () => {
    const listingDropDown1 = document.getElementById('listingDropDown1')

    listingDropDown1.classList.toggle('hidden')
}

const showPagesDropDown = () => {
    const pagesDropDown1 = document.getElementById('pagesDropDown1')

    pagesDropDown1.classList.toggle('hidden')
}

/*window.onclick = (e) => {
    console.log(e.target)
    if (!e.target.matches('.dropDownBtn')) {
        console.log("weh")
        addHidden();
    }
}*/

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