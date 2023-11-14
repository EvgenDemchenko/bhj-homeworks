document.addEventListener('DOMContentLoaded', () => {
    const xhr = new XMLHttpRequest();
    let valutes = null;
    let itemsList = document.querySelector('#items');
    itemsList.innerHTML = '';

    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    xhr.addEventListener('load', () => {
        xhr.status === 200? valutes = JSON.parse(xhr.responseText).response.Valute: false;
        document.querySelector('#loader').classList.remove('loader_active');
        for(let key in valutes) {
            let currentItem = document.createElement('div');
            currentItem.classList.add('item');
            currentItem.innerHTML = `
            <div class="item__code">
                ${valutes[key].CharCode}
            </div>
            <div class="item__value">
                ${valutes[key].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
            `;
            itemsList.appendChild(currentItem);
        }
    });
});