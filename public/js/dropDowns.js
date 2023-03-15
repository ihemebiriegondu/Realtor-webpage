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