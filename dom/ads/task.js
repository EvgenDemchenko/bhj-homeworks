document.addEventListener('DOMContentLoaded', () => {
    let parent = document.querySelector('.rotator');
    let i = 0;
    let rotate = function(parent) {
        let p = parent;
        if(p.children[i].previousElementSibling) {
            p.children[i].previousElementSibling.classList.remove('rotator__case_active');
        }
        if(p.lastElementChild.classList.contains('rotator__case_active')) {
            p.lastElementChild.classList.remove('rotator__case_active');
        }
       
        p.children[i].classList.add('rotator__case_active');
        p.children[i].style.color = p.children[i].dataset.color;
        ++i;
        
        if(i >= p.children.length) {
            i = 0;
            return i;
        }
    };

    setInterval(rotate, 1000, parent);
    
});