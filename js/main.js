$(document).ready(function() {

    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    storedTasks.forEach(function(taskText) {
        createTaskElement(taskText);
    });    

    $('header button').click(function() {
        $('form').slideToggle();
    });

    $('#cancel-button').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e){
        e.preventDefault();

        const newTaskInput = $('#new_task').val();
        createTaskElement(newTaskInput);

        $('#new_task').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
        updateLocalStorage();
    });

    function createTaskElement(taskText) {
        const new_task = $('<li></li>').text(taskText);

        $(new_task).appendTo('ul');
        $(new_task).fadeIn(1000);

        updateLocalStorage();
    }

    function updateLocalStorage() {
        const tasks = [];
        $('ul li').each(function() {
            tasks.push($(this).text());
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});