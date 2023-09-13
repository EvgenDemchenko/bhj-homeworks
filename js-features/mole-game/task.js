document.addEventListener('DOMContentLoaded', () => {
    let field = document.querySelector('.hole-game');
    let killCurrentCounter = document.querySelector('#dead');
    let missCurrentCounter = document.querySelector('#lost');
    let killCounter = 0;
    let missCounter = 0;
    let start = function() {
        killCounter = 0;
        missCounter = 0;
        killCurrentCounter.textContent = killCounter;
        missCurrentCounter.textContent = missCounter;
    };

    field.addEventListener('click', (e) => {
        let target = e.target;

        if(target && target.classList.contains('hole_has-mole')) {
            killCounter++;
            killCurrentCounter.textContent = killCounter;
            if(killCounter === 10) {
                alert('Вы победили!');
                start();
            }
        } else if(target && target.classList.contains('hole') && !target.classList.contains('hole_has-mole')) {
            missCounter++;
            missCurrentCounter.textContent = missCounter;
            if(missCounter === 5) {
                alert('Вы проиграли!');
                start();
            }
        }
    });
});