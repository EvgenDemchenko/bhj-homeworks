document.addEventListener('DOMContentLoaded', () => {
    let tabs = document.querySelectorAll('.tab');
    let tabsContent = document.querySelectorAll('.tab__content');

    tabs.forEach((item, i) => {
        item.addEventListener('click', () => {
            tabs.forEach(item => item.classList.remove('tab_active'));
            tabsContent.forEach(item => item.classList.remove('tab__content_active'));
            item.classList.add('tab_active');
            tabsContent[i].classList.add('tab__content_active');
        });
    });
});