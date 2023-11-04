document.addEventListener('DOMContentLoaded', () => {
    const links = Array.from(document.querySelectorAll('.has-tooltip'));
    const tooltip = document.querySelector('.tooltip');

    function showTooltip(el) {
        if(tooltip.classList.contains('tooltip_active') && tooltip.textContent === el.title) {
            tooltip.classList.remove('tooltip_active');
        } else {
            tooltip.classList.add('tooltip_active')
        }
        tooltip.textContent = `${el.title}`;
    }

    links.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
           showTooltip(item);
           switch(tooltip.dataset.position) {
            case('top'): 
                tooltip.style.top = `${item.getBoundingClientRect().top - tooltip.offsetHeight}px`;
                tooltip.style.left = `${item.getBoundingClientRect().left}px`;
            break;
            case('bottom'):
                tooltip.style.top = `${item.getBoundingClientRect().top + item.offsetHeight}px`;
                tooltip.style.left = `${item.getBoundingClientRect().left}px`;
            break;
            case('left'):
                tooltip.style.top = `${item.getBoundingClientRect().top}px`;
                tooltip.style.left = `${item.getBoundingClientRect().left - tooltip.scrollWidth}px`;
            break;
            case('right'):
                tooltip.style.top = `${item.getBoundingClientRect().top}px`;
                tooltip.style.left = `${item.getBoundingClientRect().right}px`;
                break;
           }
        
        });
    });
});