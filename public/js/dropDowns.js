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


const addHiddenTopNav = (elem) => {
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

    addHiddenTopNav(listingDropDown1)
    listingDropDown1.classList.toggle('hidden')
}

const showPagesDropDown = () => {
    const pagesDropDown1 = document.getElementById('pagesDropDown1')

    addHiddenTopNav(pagesDropDown1)
    pagesDropDown1.classList.toggle('hidden')
}

const showPropertyDropDown = () => {
    const propertyDropDown1 = document.getElementById('propertyDropDown1')

    addHiddenTopNav(propertyDropDown1)
    propertyDropDown1.classList.toggle('hidden')
}



const showListingDropDown2 = () => {
    const listingDropDown3 = document.getElementById('listingDropDown3')

    addHiddenTopNav(listingDropDown3);
    listingDropDown3.classList.toggle('hidden')
}

const showPagesDropDown2 = () => {
    const pagesDropDown3 = document.getElementById('pagesDropDown3')

    addHiddenTopNav(pagesDropDown3);
    pagesDropDown3.classList.toggle('hidden')
}

const showPropertyDropDown2 = () => {
    const propertyDropDown3 = document.getElementById('propertyDropDown3')

    addHiddenTopNav(propertyDropDown3);
    propertyDropDown3.classList.toggle('hidden')
}


//dropdown for the smaller screens

const addHiddenSideNav = (elem) => {
    let parent = elem.parentElement
    let grandparent = parent.parentElement
    let parentSiblings = Array.from(grandparent.children);

    for (let i = 0; i < parentSiblings.length; i++) {

        let nextSiblings = parentSiblings[i].children[1]
        let nextSiblingsIcon = parentSiblings[i].children[0].children[1]
        //console.log(nextSiblingsIcon)

        if (nextSiblings != undefined && nextSiblings != elem) {
            if (nextSiblings.classList.contains('max-h-96')) {
                nextSiblings.classList.remove('max-h-96')
            }
        }

        if (nextSiblingsIcon != undefined && nextSiblings != elem) {
            if (nextSiblingsIcon.classList.contains('rotate-90')) {
                nextSiblingsIcon.classList.remove('rotate-90')
            }
        }
    }
}

const showListingAccordion = () => {
    const listingDropDown2 = document.getElementById("listingDropDown2");
    const ListingAccordionIcon1 = document.getElementById('ListingAccordionIcon1');

    addHiddenSideNav(listingDropDown2)
    listingDropDown2.classList.toggle('max-h-96')
    ListingAccordionIcon1.classList.toggle('rotate-90')
}

const showPagesAccordion = () => {
    const pagesDropDown2 = document.getElementById("pagesDropDown2");
    const pagesAccordionIcon1 = document.getElementById('pagesAccordionIcon1');

    addHiddenSideNav(pagesDropDown2)
    pagesDropDown2.classList.toggle('max-h-96')
    pagesAccordionIcon1.classList.toggle('rotate-90')
}

const showPropertyAccordion = () => {
    const propertyDropDown2 = document.getElementById("propertyDropDown2");
    const PropertyAccordionIcon1 = document.getElementById('PropertyAccordionIcon1');

    addHiddenSideNav(propertyDropDown2)
    propertyDropDown2.classList.toggle('max-h-96')
    PropertyAccordionIcon1.classList.toggle('rotate-90')
}



const showListingAccordion2 = () => {
    const listingDropDown4 = document.getElementById("listingDropDown4");
    const ListingAccordionIcon2 = document.getElementById('ListingAccordionIcon2');

    addHiddenSideNav(listingDropDown4)
    listingDropDown4.classList.toggle('max-h-96')
    ListingAccordionIcon2.classList.toggle('rotate-90')
}

const showPagesAccordion2 = () => {
    const pagesDropDown4 = document.getElementById("pagesDropDown4");
    const pagesAccordionIcon2 = document.getElementById('pagesAccordionIcon2');

    addHiddenSideNav(pagesDropDown4)
    pagesDropDown4.classList.toggle('max-h-96')
    pagesAccordionIcon2.classList.toggle('rotate-90')
}

const showPropertyAccordion2 = () => {
    const propertyDropDown4 = document.getElementById("propertyDropDown4");
    const PropertyAccordionIcon2 = document.getElementById('PropertyAccordionIcon2');

    addHiddenSideNav(propertyDropDown4)
    propertyDropDown4.classList.toggle('max-h-96')
    PropertyAccordionIcon2.classList.toggle('rotate-90')
}




//smaller screens footer

const addHiddenFooterNav = (elem) => {
    let parent = elem.parentElement
    let grandparent = parent.parentElement
    let parentSiblings = Array.from(grandparent.children);

    for (let i = 0; i < parentSiblings.length; i++) {

        let nextSiblings = parentSiblings[i].children[1]
        let nextSiblingsIcon = parentSiblings[i].children[0].children[0]

        if (nextSiblings != undefined && nextSiblings != elem) {
            if (nextSiblings.classList.contains('max-h-96')) {
                nextSiblings.classList.remove('max-h-96')
            }
        }

        if (nextSiblingsIcon != undefined && nextSiblings != elem) {
            if (nextSiblingsIcon.classList.contains('rotate-180')) {
                nextSiblingsIcon.classList.remove('rotate-180')
            }
        }
    }
}

const showFooterAccordionHome1 = () => {
    const searchAccordion = document.getElementById('searchAccordion')
    const searchAccordionIcon = document.getElementById('searchAccordionIcon');

    addHiddenFooterNav(searchAccordion)
    searchAccordion.classList.toggle('max-h-96')
    searchAccordionIcon.classList.toggle('rotate-180')
}

const showFooterAccordionHome2 = () => {
    const QuickLinksAccordion = document.getElementById('QuickLinksAccordion')
    const QuickLinkAccordionIcon = document.getElementById('QuickLinkAccordionIcon');

    addHiddenFooterNav(QuickLinksAccordion)
    QuickLinksAccordion.classList.toggle('max-h-96')
    QuickLinkAccordionIcon.classList.toggle('rotate-180')
}

const showFooterAccordionHome3 = () => {
    const DiscoverAccordion = document.getElementById('DiscoverAccordion')
    const DiscoverAccordionIcon = document.getElementById('DiscoverAccordionIcon');

    addHiddenFooterNav(DiscoverAccordion)
    DiscoverAccordion.classList.toggle('max-h-96')
    DiscoverAccordionIcon.classList.toggle('rotate-180')
}

//lisitng page
const showFooterAccordionListing1 = () => {
    const searchAccordion2 = document.getElementById('searchAccordion2')
    const searchAccordionIcon2 = document.getElementById('searchAccordionIcon2');

    addHiddenFooterNav(searchAccordion2)
    searchAccordion2.classList.toggle('max-h-96')
    searchAccordionIcon2.classList.toggle('rotate-180')
}

const showFooterAccordionListing2 = () => {
    const QuickLinksAccordion2 = document.getElementById('QuickLinksAccordion2')
    const QuickLinkAccordionIcon2 = document.getElementById('QuickLinkAccordionIcon2');

    addHiddenFooterNav(QuickLinksAccordion2)
    QuickLinksAccordion2.classList.toggle('max-h-96')
    QuickLinkAccordionIcon2.classList.toggle('rotate-180')
}

const showFooterAccordionListing3 = () => {
    const DiscoverAccordion2 = document.getElementById('DiscoverAccordion2')
    const DiscoverAccordionIcon2 = document.getElementById('DiscoverAccordionIcon2');

    addHiddenFooterNav(DiscoverAccordion2)
    DiscoverAccordion2.classList.toggle('max-h-96')
    DiscoverAccordionIcon2.classList.toggle('rotate-180')
}