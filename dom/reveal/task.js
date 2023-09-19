document.addEventListener('DOMContentLoaded', () => {
    let blocks = document.querySelectorAll('.reveal');

    window.addEventListener('scroll', () => {
        blocks.forEach(item => {
            let posTop = item.getBoundingClientRect().top;

            item.classList.toggle('reveal_active', posTop <= 0);
            item.classList.toggle('reveal_active', posTop < window.innerHeight);
            item.classList.toggle('reveal_active', posTop + item.clientHeight <= window.innerHeight && posTop >= 0);

        });
    });
    
});