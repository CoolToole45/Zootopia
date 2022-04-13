const dropDownBtn = document.querySelectorAll('.filter-title img');

dropDownBtn.forEach(dropDownBtn => {
    dropDownBtn.addEventListener('click', () => {
        dropDownBtn.classList.toggle('rotatetUp');
        const filterTitle = dropDownBtn.parentElement;
        const filterFunction = filterTitle.nextElementSibling;

        if(filterFunction.classList.contains('hidden')) {
            filterFunction.classList.remove('hidden');
        } else {
            filterFunction.classList.add('hidden');
        }
    })
})