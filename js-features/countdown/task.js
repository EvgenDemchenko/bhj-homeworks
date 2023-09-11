document.addEventListener("DOMContentLoaded", (e) => {
    let timer = document.querySelector('#timer');
    let timer2 = document.querySelector('#timer2');

    const countdown = function(timer) {
        let timerValue = +timer.textContent;
        
        let timerHandler = function() {
            let timerCoundown = function() {
                --timerValue;
                timer.textContent = `${timerValue}`;

                if(timerValue === 0) {
                    clearInterval(timerInterval);
                    alert('Вы победили в конкурсе');
                    let link = document.createElement('a');
                    link.setAttribute('href', '');
                    link.setAttribute('download', 'http://hello.kitty');
                    link.click();
                }
            }

            let timerInterval = setInterval(timerCoundown, 1000);
        };

        timerHandler();

        // let timerS = Math.floor(timerValue % 60);
        // let timerM = Math.floor(((timerValue / 60)) % 60);
        // let timerH = Math.floor((timerValue / 60 / 60) % 24);

        // console.log(timerS, timerM, timerH);
    };
    countdown(timer);

    const countdown2 = function() {
        let h = +document.querySelector('.timer-hours').textContent;
        let m = +document.querySelector('.timer-minutes').textContent;
        let s = +document.querySelector('.timer-seconds').textContent;

        function renderTimer() {
            s > 9 ? document.querySelector('.timer-seconds').textContent = `${s}`:
            document.querySelector('.timer-seconds').textContent = `0${s}`;
            m > 9 ? document.querySelector('.timer-minutes').textContent = `${m}`:
            document.querySelector('.timer-minutes').textContent = `0${m}`;
            h > 9 ? document.querySelector('.timer-hours').textContent = `${h}`:
            document.querySelector('.timer-hours').textContent = `0${h}`;
        }

        renderTimer();

        let timerHandler = function() {
            if(h === 0 && m === 0 && s === 0) {
                clearInterval(timer);
                alert('Вы победили в конкурсе');
            } else {
                if(s > 0) {
                    --s;
                } else if(s === 0) {
                    s = 59;
    
                    if(m > 0) {
                        --m;
                    } else if(m === 0) {
                        --h;
                        m = 59;
                    }
                }
                renderTimer();
            }
        };

        let timer = setInterval(timerHandler, 1000);
    }
    countdown2();
});