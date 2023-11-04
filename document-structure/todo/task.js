document.addEventListener('DOMContentLoaded', () => {
    const mainForm = document.forms.tasks__form;
    const tasksList = document.querySelector('#tasks__list');
    const mainInput = mainForm.querySelector('#task__input');
    mainInput.setAttribute("required", "");

    let addToDo = function() {
        let toDo = document.createElement('div');
        toDo.classList.add('task');
        toDo.innerHTML = `
            <div class="task__title">
                ${mainInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        `;
        tasksList.appendChild(toDo);
        let removeToDo = function() {
            toDo.remove();
            toDoBtn.removeEventListener('click', removeToDo);
        }
        let toDoBtn = toDo.querySelector('.task__remove');
        toDoBtn.addEventListener('click', removeToDo);
    }

    mainForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addToDo();
        mainForm.reset();
    });
});