document.addEventListener('DOMContentLoaded', () => {
    let dropdownBtn = document.querySelector('.dropdown__value');
    let dropdownList = document.querySelector('.dropdown__list');

    dropdownBtn.addEventListener('click', () => {
        dropdownList.classList.toggle('dropdown__list_active');
    });

    dropdownList.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if(target && target.classList.contains('dropdown__link')) {
            dropdownBtn.textContent = target.textContent;
            dropdownList.classList.remove('dropdown__list_active');
        }
    });
});