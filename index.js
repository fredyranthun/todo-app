// change class - checked and notChecked

$item = $('#list');
$item.click(function(e){
    $(e.target).toggleClass('checked');
    $(e.target).toggleClass('notChecked');
  updateItensLeft();
});

// add number of active tasks;
function updateItensLeft() {
    let $lengthCompleted = $('.notChecked').length;
    if ($lengthCompleted == 1) {
        $('#itensLeft').text($lengthCompleted + ' item left');
    } else {
        $('#itensLeft').text($lengthCompleted + ' itens left');
    };
};
updateItensLeft();


// uses jQuery UI - sortable;
$('#list').sortable();
$('.block').removeClass('block-first');

// config appearence and value of form text;
$newTask = $('#newTask');
$('#text').focus(function(e){
    $('#text').val('');
})
$('#text').blur(function(e){
    $('#text').val('Create a new todo');
})

// on submit, create new task with status not checked
$newTask.submit(function(e) {
    $('.initial').remove();
    var $newAction = $('<li></li>');
    $newAction.text($('#text').val());
    $newAction.addClass("notChecked block");
    $('#list').append($newAction);
    $('#text').val('');
    e.preventDefault();
    $('.block-modified').removeClass('block-first');
    updateItensLeft();
})

// do the clear of completed tasks
var $clear = $('#clear');
$clear.click(function(){
    $('.checked').remove();
    if($('.block').length == 0) {$('.block-modified').addClass('block-first')};
})

// do the filtering of components: all, active or completed;
var $all = $('#all');
var $completed = $('#completed');
var $active = $('#active');

$completed.click(function(){
    $('.notChecked').addClass('block-hide');
    $('.checked').removeClass('block-hide');
    $('.block').removeClass('block-first');
    $('.block-modified').removeClass('block-first');
    $('.checked').first().addClass('block-first');
    if($('.checked').length == 0) {$('.block-modified').addClass('block-first')};
});
$active.click(function(){
    $('.checked').addClass('block-hide');
    $('.notChecked').removeClass('block-hide');
    $('.block').removeClass('block-first');
    $('.block-modified').removeClass('block-first');
    $('.notChecked').first().addClass('block-first');
    if($('.notChecked').length == 0) {$('.block-modified').addClass('block-first')};
});
$all.click(function(){
    $('.notChecked').removeClass('block-hide');
    $('.checked').removeClass('block-hide');
    $('.block').removeClass('block-first');
    $('.block-modified').removeClass('block-first');
    if($('.block').length == 0) {$('.block-modified').addClass('block-first')};
})

// dark mode;
$('.block-header').click(function(){
    if($('body').attr('data-theme') != 'dark') {
        $('body').attr('data-theme', 'dark');
    } else {
        $('body').attr('data-theme', 'light');
    };
});