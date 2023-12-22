$(document).ready(function(){     
    
    // weaving 슬라이드 스크립트
    $('.weaving_text > ul > li').eq(0).addClass('on'); 

    $('.weaving_text > ul > li').click(function(e){
        e.preventDefault();
        var i = $(this).index();
        console.log(i)
        $('.weaving_text > ul > li').removeClass('on');
        sliderTarget(i);
    });
    function sliderTarget(n){   
        var pos = (n * -1200) + 'px';
        console.log(pos)
        $('.weaving_in ul').animate({left:pos},800);
        $('.weaving_text > ul > li').eq(n).addClass('on');
    }



    //inside 스크립트
    $('.inside_l p').hide();

    $('.inside_l > a').click(function(e){
        e.preventDefault();
        if("#caption"){
            $("#caption").remove();
        }

        var path = $(this).attr('href');
        var msg = $(this).next("p").text();
        $('.inside_r').append('<div id ="caption"></div>');
        $('.inside_r #caption').text(msg);

        if(path != $('.inside_r img').attr("src")){
            $('.inside_r img').attr({src:path});
            $('.inside_r img').css({opacity:0}).stop().animate({opacity:1},1000);

            var posy = $(".inside_r #caption").height()+100;
            $('.inside_r #caption').css({opacity:0}).stop().animate({opacity:1},1100).animate({top : "-=" + posy + "px"},);
        }
    })

    
    //new 스크립트
    var scene01Num = 1;

    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop();


        if(scrollTop > 3100 &&  scene01Num == 1){
            scene01Num = 0;

            $(".new_in_d").delay(0).stop().animate({opacity:1, bottom:"0px"},1000,
            function(){
                $(".new_in_d").delay(0).stop().animate({opacity:1},600);
            });

            $(".new_in_text").delay(0).stop().animate({opacity:0},600,
            function(){
                $(".new_in_text").delay(0).stop().animate({opacity:1},600);
            });
        }else if(scrollTop < 3100 &&  scene01Num == 0){
            scene01Num = 1;

            $(".new_in_d").delay(0).css({bottom:"0px"}).stop().animate({opacity:1, bottom:"-200px"},600);
            $(".new_in_text").delay(0).stop().animate({opacity:0},600);
        }

    });


    // brand stoty 스크립트
    var scene02Num = 1;

    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop();


        if(scrollTop > 1200 &&  scene02Num == 1){
            scene02Num = 0;

            $("#brand_story").delay(0).stop().animate({opacity:0,},400,
            function(){
                $("#brand_story").delay(0).stop().animate({opacity:1},400);
            });

        }else if(scrollTop < 1200 &&  scene02Num == 0){
            scene02Num = 1;

            $("#brand_story").delay(0).stop().animate({opacity:0},400);
        }

    });

});


