$(document).ready(function () {
    var i = 0;
    var timer;

    $('.item').eq(0).show().siblings('.item').hide();
    function show() {
        $('.item').eq(i).fadeIn(300).siblings('.item').fadeOut(300);
        $('.tab').eq(i).addClass('active').siblings('.tab').removeClass('active');
    }

    function showTime(){
        timer = setInterval(function () {
            show();
            i++;

            if (i==5){
                i = 0;
            }
        },1000);
    }
    showTime();

    $('.tab').hover(function () {
        i = $(this).index();
        show();
        clearInterval(timer);
        },function () {
        showTime();
        });

    $('.prev').click(function(){
        clearInterval(timer);
        if (i == 0){
            i = 5;
        }
        i --;
        show();
        showTime();
    })

    $('.next').click(function () {
        clearInterval(timer);
        if (i == 4){
            i = -1;
        }
        i++;
        show();
        showTime();
    });
});