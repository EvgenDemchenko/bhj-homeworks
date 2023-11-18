document.addEventListener('DOMContentLoaded', () => {
    let poll = document.querySelector('.poll');
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    xhr.addEventListener('load', (e) => {
        if(xhr.status === 200) {
            let answer = JSON.parse(xhr.responseText).data;
            
            poll.querySelector('#poll__title').textContent = `${answer.title}`;
            document.querySelector('#poll__answers').innerHTML = '';
            document.querySelector('#poll__answers').style = `
                display: flex;
                gap: 8px;
            `;

            for(let a of answer.answers) {
                let el = document.createElement('button');
                el.classList.add('poll__answer');
                el.textContent = `${a}`;
                el.addEventListener('click', (e) => {
                    alert('«Спасибо, ваш голос засчитан!»');
                    location.reload();
                });
                document.querySelector('#poll__answers').appendChild(el);
            }
        }
    });
});