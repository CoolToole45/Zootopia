var counter = 0;
const counterDisplay = document.getElementById('amount-counter');

document.getElementById('decrease').addEventListener('click', () => {
    if(counter > 0 && counter <= 99) {
        counter--;
        counterDisplay.setAttribute('value', counter);
    }
})

document.getElementById('increase').addEventListener('click', () => {
    if(counter < 99) {
        counter++;
        counterDisplay.setAttribute('value', counter);
    }
})