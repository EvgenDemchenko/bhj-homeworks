document.addEventListener('DOMContentLoaded', () => {
    const bookControl = document.querySelector('.book__control_font-size');
    const bookControlBtns = document.querySelectorAll('.font-size');
    const bookContent = document.querySelector('.book__content');

    bookControl.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if(target && target.classList.contains('font-size_small')) {
            bookControlBtns.forEach(item => item.classList.remove('font-size_active'));
            target.classList.add('font-size_active');
            bookContent.classList.remove('book_fs-big');
            bookContent.classList.add('book_fs-small');
        } else if(target && target.classList.contains('font-size_big')) {
            bookControlBtns.forEach(item => item.classList.remove('font-size_active'));
            target.classList.add('font-size_active');
            bookContent.classList.remove('book_fs-small');
            bookContent.classList.add('book_fs-big');
        } else {
            bookControlBtns.forEach(item => item.classList.remove('font-size_active'));
            target.classList.add('font-size_active');
            bookContent.classList.remove('book_fs-big');
            bookContent.classList.remove('book_fs-small');
        }
    });
});