document.addEventListener('DOMContentLoaded', () => {
    let field = document.querySelector('.hole-game');
    let killCurrentCounter = document.querySelector('#dead');
    let missCurrentCounter = document.querySelector('#lost');
    let killCounter = 0;
    let missCounter = 0;

    field.addEventListener('click', (e) => {
        let target = e.target;

        if(target && target.classList.contains('hole_has-mole')) {
            killCounter++;
            killCurrentCounter.textContent = killCounter;
        } else if(target && target.classList.contains('hole') && !target.classList.contains('hole_has-mole')) {
            missCounter++;
            missCurrentCounter.textContent = missCounter;
        }
    });
});