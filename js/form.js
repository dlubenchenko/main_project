$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
    $('.container .projects-1-1, .container .projects-2-1, .container .projects-3-1, .container .projects-4-1').on('click', f_acc);
});

function f_acc(){
  $('.projects-2-1 .projects-2-2, .projects-3-1 .projects-3-2, .projects-4-1 .projects-4-2').not($(this).next()).slideUp(100);
    $(this).next().slideToggle(2000);
};

$(function() {
    $('#submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/d.lubenchenko@gmail.com",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                tel: $('#tel').val(),
                age: $('#age').val(),
                comment: $('#comment').val(),
                male: $('#male').val(),
                female: $('#female').val(),
                other: $('#other').val(),
                language: $('#language').val(),
                location: $('#location').val()
            },
            dataType: "json"
        })
        .done(function() {
            $('.register').html('Дякую, очікуйте зворотнього зв\'язку!');
            $(document).ready(function(){
              $('.register').css({
                'margin-bottom': '20px',
                'text-align': 'center',
              });
            });
        })
        .fail(function() {
            $('.register').html('Щось не так!');
            $(document).ready(function(){
              $('.register').css({
                'margin-bottom': '20px',
                'text-align': 'center',
              });
            });
        });
    });
});
