//dropdown for the top nav(larger screen)

window.onclick = (e) => {
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

const showTopNavDropDowns = (e) => {
    let eTarget = e.target
    let TargetID = eTarget.getAttribute('data-dropdown')
    const dropDown = document.getElementById(TargetID)

    if (dropDown != null) {
        addHiddenTopNav(dropDown)
        dropDown.classList.toggle('hidden')
    }
}

//dropdown for the side menu (smaller screens)

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

const showSideNavAccordions = (e) => {
    let eTarget = e.target
    let TargetID = eTarget.getAttribute('data-accordion')
    let TargetIconID = eTarget.getAttribute('data-accordionicon')
    const accordion = document.getElementById(TargetID)
    const accordionIcon = document.getElementById(TargetIconID)

    if (accordion != null) {
        addHiddenSideNav(accordion)
        accordion.classList.toggle('max-h-96')
        accordionIcon.classList.toggle('rotate-90')
    }
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

const showFooterNavAccordions = (e) => {
    let eTarget = e.target
    let TargetID = eTarget.getAttribute('data-footeraccordion')
    let TargetIconID = eTarget.getAttribute('data-footeraccordionicon')
    const accordion = document.getElementById(TargetID)
    const accordionIcon = document.getElementById(TargetIconID)

    if (accordion != null) {
        addHiddenFooterNav(accordion)
        accordion.classList.toggle('max-h-96')
        accordionIcon.classList.toggle('rotate-180')
    }
}