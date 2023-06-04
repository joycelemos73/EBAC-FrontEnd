$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#cancel-button').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const newTaskInput = $('#new_task').val();
        const new_task = $('<li></li>');
        
        $(`<li>${newTaskInput}</li>`).appendTo(new_task);
        $(new_task).appendTo('ul');
        $(new_task).fadeIn(1000);
        $('#new_task').val('')
    })
})