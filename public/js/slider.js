window.addEventListener('my-custom-range-changed-event', (e) => { 
    const data = e.detail; 
    //console.log(data)

    const minRangeValue = document.getElementById('minRangeValue')
    const maxRangeValue = document.getElementById('maxRangeValue')

    minRangeValue.value = data.minRangeValue
    maxRangeValue.value = data.maxRangeValue
});

window.addEventListener('my-custom-range-changed-event2', (e) => { 
    const data = e.detail; 
    //console.log(data)

    const minRangeValue = document.getElementById('minRangeValue2')
    const maxRangeValue = document.getElementById('maxRangeValue2')

    minRangeValue.value = data.minRangeValue
    maxRangeValue.value = data.maxRangeValue
});

