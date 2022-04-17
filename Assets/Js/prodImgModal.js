function displayImgModal() {
    const modalDisplay = document.getElementById('modal-display');
    if(modalDisplay.classList.contains('hidden')) {
        modalDisplay.classList.remove('hidden');
    } else {
        modalDisplay.classList.add('hidden');
    }
}