document.addEventListener('DOMContentLoaded', () => {
    const cartProducts = document.querySelector('.cart__products');
    const cartProductsList = [];
    const products = document.querySelectorAll('.product');
    const incBtns = document.querySelectorAll('.product__quantity-control_inc');
    const decBtns = document.querySelectorAll('.product__quantity-control_dec');

    const addProduct = function(el, i) {
        if(cartProductsList.length === 0) {
            cartProductsList[i] = {
                id: el.dataset.id,
                src: `${el.querySelector('img').getAttribute('src')}`,
                value: +`${el.querySelector('.product__quantity-value').textContent}`
            };
        } else {
            if(cartProductsList[el.dataset.id - 1]) {
                cartProductsList[el.dataset.id - 1].value =+ cartProductsList[el.dataset.id - 1].value + +el.querySelector('.product__quantity-value').textContent;
            } else {
                cartProductsList[i] = {
                    id: el.dataset.id,
                    src: `${el.querySelector('img').getAttribute('src')}`,
                    value: +`${el.querySelector('.product__quantity-value').textContent}`
                };
            }
        }
        return cartProductsList;
    }

    const createCartPosition = function() {
        for(let key in cartProductsList) {
            let cartPosition = document.createElement('div');
                cartPosition.classList.add('cart__product');
                cartPosition.setAttribute('data-id', `${cartProductsList[key].id}`);
                cartPosition.innerHTML = `
                    <img class="cart__product-image" src=${cartProductsList[key].src}>
                    <div class="cart__product-count">${cartProductsList[key].value}</div>
                `
                cartProducts.appendChild(cartPosition);
        }
    };

    products.forEach(function(item, i) {
        item.addEventListener('click', (e) => {
            if(e.target && e.target.classList.contains('product__add')) {
                addProduct(item, i);
                let row = document.querySelectorAll('.cart__product');
                row.forEach(item => item.remove());
                createCartPosition(item, i);
            }
        });
    });

    incBtns.forEach(function(item) {
        item.addEventListener('click', function(e) {
            item.previousElementSibling.textContent = `${+item.previousElementSibling.textContent + 1}`;
        });
    });

    decBtns.forEach(function(item) {
        item.addEventListener('click', function(e) {
            if(+item.nextElementSibling.textContent > 1) {
                item.nextElementSibling.textContent = `${+item.nextElementSibling.textContent - 1}`;
            } else {
                item.nextElementSibling.textContent = `1`;
            }
        });
    });
});