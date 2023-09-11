document.addEventListener('DOMContentLoaded', () => {
    const cookieBtn = document.querySelector('.clicker__cookie');
    const clickCounter = document.querySelector('#clicker__counter');
    let i = +clickCounter.textContent;

    let clicker = function() {
        i++;
        clickCounter.textContent = `${i}`;
        this.width === 200? this.width = 220: this.width = 200;
    }

    cookieBtn.addEventListener('click', clicker);
});