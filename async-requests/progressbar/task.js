document.addEventListener('DOMContentLoaded', () => {
    let form = document.forms.form;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let fileInput = form.elements.file;
        let currentFile = fileInput.files[0];

        let xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('progress', (e) => {
            let progressBar = document.querySelector('#progress');
            progressBar.value = e.loaded / e.total;
        });

        xhr.open('post', 'https://students.netoservices.ru/nestjs-backend/upload');
        xhr.setRequestHeader('Content-Type', 'multipart/formdata');
        xhr.send(currentFile);
    });
});