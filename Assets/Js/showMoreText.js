const showMoreBtn = document.getElementById('show-more-text');
const showLessBtn = document.getElementById('show-less-text');

const moreText = document.querySelector('.more-text-info');

showMoreBtn.addEventListener('click', () => {
    moreText.classList.remove('hidden');

    showMoreBtn.classList.add('hidden');
    showLessBtn.classList.remove('hidden');
})

showLessBtn.addEventListener('click', () => {
    moreText.classList.add('hidden');

    showMoreBtn.classList.remove('hidden');
    showLessBtn.classList.add('hidden');
})