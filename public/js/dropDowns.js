//dropdown for the top nav(larger screen)

window.onclick = (e) => {
    //console.log(e.target)
    if (e.target.classList.contains('dropDownBtn')) {
    } else {
        const allTopNavDropDown = document.querySelectorAll('.allTopNavDropDown');

        allTopNavDropDown.forEach(topNav => {
            if (topNav.classList.contains('hidden')) {
                return
            } else {
                topNav.classList.add('hidden')
            }
        });
    }
}


const addHidden = (elem) => {
    let parent = elem.parentElement
    let grandparent = parent.parentElement
    let parentSiblings = Array.from(grandparent.children);

    for (var i = 0; i < parentSiblings.length; i++) {

        let nextSiblings = parentSiblings[i].children[1]

        if (nextSiblings != undefined && nextSiblings != elem) {
            if (nextSiblings.classList.contains('hidden')) {
            } else {
                nextSiblings.classList.add('hidden')
            }
        }
    }

}
const showListingDropDown = () => {
    const listingDropDown1 = document.getElementById('listingDropDown1')

    addHidden(listingDropDown1)
    listingDropDown1.classList.toggle('hidden')
}

const showPagesDropDown = () => {
    const pagesDropDown1 = document.getElementById('pagesDropDown1')

    addHidden(pagesDropDown1)
    pagesDropDown1.classList.toggle('hidden')
}

const showPropertyDropDown = () => {
    const propertyDropDown1 = document.getElementById('propertyDropDown1')

    addHidden(propertyDropDown1)
    propertyDropDown1.classList.toggle('hidden')
}



const showListingDropDown2 = () => {
    const listingDropDown3 = document.getElementById('listingDropDown3')

    addHidden(listingDropDown3);
    listingDropDown3.classList.toggle('hidden')
}

const showPagesDropDown2 = () => {
    const pagesDropDown3 = document.getElementById('pagesDropDown3')

    addHidden(pagesDropDown3);
    pagesDropDown3.classList.toggle('hidden')
}

const showPropertyDropDown2 = () => {
    const propertyDropDown3 = document.getElementById('propertyDropDown3')

    addHidden(propertyDropDown3);
    propertyDropDown3.classList.toggle('hidden')
}


//dropdown for the smaller screens

const showListingAccordion = () => {
    const listingDropDown2 = document.getElementById("listingDropDown2");

    addHidden(listingDropDown2)
    listingDropDown2.classList.toggle('hidden')
}

const showPagesAccordion = () => {
    const pagesDropDown2 = document.getElementById("pagesDropDown2");

    addHidden(pagesDropDown2)
    pagesDropDown2.classList.toggle('hidden')
}

const showPropertyAccordion = () => {
    const propertyDropDown2 = document.getElementById("propertyDropDown2");

    addHidden(propertyDropDown2)
    propertyDropDown2.classList.toggle('hidden')
}

const showListingAccordion2 = () => {
    const listingDropDown4 = document.getElementById("listingDropDown4");

    addHidden(listingDropDown4)
    listingDropDown4.classList.toggle('hidden')
}

const showPagesAccordion2 = () => {
    const pagesDropDown4 = document.getElementById("pagesDropDown4");

    addHidden(pagesDropDown4)
    pagesDropDown4.classList.toggle('hidden')
}

const showPropertyAccordion2 = () => {
    const propertyDropDown4 = document.getElementById("propertyDropDown4");

    addHidden(propertyDropDown4)
    propertyDropDown4.classList.toggle('hidden')
}

//smaller screens footer
const showFooterAccordionHome1 = () => {
    const searchAccordion = document.getElementById('searchAccordion')

    //addHidden(searchAccordion)
    searchAccordion.classList.toggle('hidden')
}

const showFooterAccordionHome2 = () => {
    const QuickLinksAccordion = document.getElementById('QuickLinksAccordion')

    //addHidden(QuickLinksAccordion)
    QuickLinksAccordion.classList.toggle('hidden')
}

const showFooterAccordionHome3 = () => {
    const DiscoverAccordion = document.getElementById('DiscoverAccordion')

    //addHidden(DiscoverAccordion)
    DiscoverAccordion.classList.toggle('hidden')
}