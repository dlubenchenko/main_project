$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
    $('.projects .projects-1-1, .projects .projects-2-1, .projects .projects-3-1, .projects .projects-4-1').on('click', f_acc);
});

function f_acc(){
//скрываем все кроме того, что должны открыть
  $('.projects-1-1 .projects-1-2, .projects-2-1 .projects-2-2, .projects-3-1 .projects-3-2, .projects-4-1 .projects-4-2').not($(this).next()).slideUp(1000);
// открываем или скрываем блок под заголовоком, по которому кликнули
    $(this).next().slideToggle(2000);
}
