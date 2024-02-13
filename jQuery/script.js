$(function(){

    $(".main > li").hover(function(){
        $(".sub").stop().show();
    }, function(){
        $(".sub").stop().hide();
    })



    $(".fade li").eq(0).siblings().hide();
    var n=0;    
    setInterval(function(){
        n=(n+1)%3;
        $(".fade li").eq(n).siblings().fadeOut();
        $(".fade li").eq(n).fadeIn();
    }, 3000)


    $(".p_click").click(function(){
        $(".pop").fadeIn();
    })
    $(".close").click(function(){
        $(".pop").fadeOut();
    })

})//