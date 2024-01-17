document.addEventListener('DOMContentLoaded', function() {
    var welcomeScreen = document.getElementById('welcome-screen');
    var mainScreen = document.getElementById('main-screen');
    var taskList = document.getElementById('task-list');

    // Показать основной экран после приветствия
    setTimeout(function() {
        welcomeScreen.style.display = 'none';
        mainScreen.style.display = 'block';
    }, 2000);

    // Функция добавления новой задачи
    window.addTask = function() {
        var newTaskInput = document.getElementById('new-task');

        var taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            var taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            // Добавляем кнопку "Удалить"
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function() {
                taskList.removeChild(taskItem);
            };

            // Добавляем задачу и кнопку "Удалить" к списку
            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);

            // Очищаем поле ввода
            newTaskInput.value = '';
        }
    };
});
