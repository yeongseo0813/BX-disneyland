/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */


$(document).ready(function() {
    Logic();

    $("#usa_slide").slick({
        slide: 'div',
        dots: true, //네이베이션 사용여부
        arrows: false, //화살표 사용여부
        prevArrow: $('.prev'), //이전 화살표
        nextArrow: $('.next'), //다음 화살표
        autoplay: true, //자동넘김
        autoplaySpeed: 1800, //자동넘김 속도
        pauseOnHover: true, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 3, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: false, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable: false,
        initialSlide: 0, //슬라이드 시작순서
        variableWidth: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition

    });


    $('#usa_slide')
        .on('init', function(event, slick){

        })
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            starList01()
        })
        .on('afterChange', function(event, slick, currentSlide, nextSlide){
            starList01()
        });



    function list01(){
        $('#usa_slide .bar').stop().animate({'margin-left':0},300);
    }

    function list02(){
        $('#usa_slide .bar').stop().animate({'margin-left':30},300);
    }

    function list03(){
        $('#usa_slide .bar').stop().animate({'margin-left':60},300);
    }

    function list04(){
        $('#usa_slide .bar').stop().animate({'margin-left':90},300);
    }

    function list05(){
        $('#usa_slide .bar').stop().animate({'margin-left':120},300);
    }

    function starList01(){

        if($('#slick-slide00').hasClass('slick-active')){
            list01();
        }

        if($('#slick-slide01').hasClass('slick-active')){
            list02();
        }

        if($('#slick-slide02').hasClass('slick-active')){
            list03();
        }

        if($('#slick-slide03').hasClass('slick-active')){
            list04();
        }

        if($('#slick-slide04').hasClass('slick-active')){
            list05();
        }
    }





    $("#toystory_slide").slick({
        slide: 'div',
        dots: true, //네이베이션 사용여부
        arrows: false, //화살표 사용여부
        prevArrow: $('.prev'), //이전 화살표
        nextArrow: $('.next'), //다음 화살표
        autoplay: true, //자동넘김
        autoplaySpeed: 1800, //자동넘김 속도
        pauseOnHover: true, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 3, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: false, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable: false,
        initialSlide: 0, //슬라이드 시작순서
        variableWidth: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition

    });



    $('#toystory_slide')
        .on('init', function(event, slick){

        })
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            starList02()
        })
        .on('afterChange', function(event, slick, currentSlide, nextSlide){
            starList02()
        });



    function list06(){
        $('#toystory_slide .bar').stop().animate({'margin-Left':0},300);
    }

    function list07(){
        $('#toystory_slide .bar').stop().animate({'margin-Left':37.5},300);
    }

    function list08(){
        $('#toystory_slide .bar').stop().animate({'margin-Left':75},300);
    }

    function list09(){
        $('#toystory_slide .bar').stop().animate({'margin-Left':112.5},300);
    }


    function starList02(){

        if($('#slick-slide10').hasClass('slick-active')){
            list06();
        }

        if($('#slick-slide11').hasClass('slick-active')){
            list07();
        }

        if($('#slick-slide12').hasClass('slick-active')){
            list08();
        }

        if($('#slick-slide13').hasClass('slick-active')){
            list09();
        }

    }







    $("#fantasy_slide").slick({
        slide: 'div',
        dots: true, //네이베이션 사용여부
        arrows: false, //화살표 사용여부
        prevArrow: $('.prev'), //이전 화살표
        nextArrow: $('.next'), //다음 화살표
        autoplay: true, //자동넘김
        autoplaySpeed: 1800, //자동넘김 속도
        pauseOnHover: true, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 3, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: false, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable: false,
        initialSlide: 0, //슬라이드 시작순서
        variableWidth: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition

    });

    $('#fantasy_slide')
        .on('init', function(event, slick){

        })
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            starList03()
        })
        .on('afterChange', function(event, slick, currentSlide, nextSlide){
            starList03()
        });



    function list10(){
        $('#fantasy_slide .bar').stop().animate({'margin-Left':0},300);
    }

    function list11(){
        $('#fantasy_slide .bar').stop().animate({'margin-Left':30},300);
    }

    function list12(){
        $('#fantasy_slide .bar').stop().animate({'margin-Left':60},300);
    }

    function list13(){
        $('#fantasy_slide .bar').stop().animate({'margin-Left':90},300);
    }

    function list14(){
        $('#fantasy_slide .bar').stop().animate({'margin-Left':120},300);
    }

    function starList03(){

        if($('#slick-slide20').hasClass('slick-active')){
            list10();
        }

        if($('#slick-slide21').hasClass('slick-active')){
            list11();
        }

        if($('#slick-slide22').hasClass('slick-active')){
            list12();
        }

        if($('#slick-slide23').hasClass('slick-active')){
            list13();
        }

        if($('#slick-slide24').hasClass('slick-active')){
            list14();
        }
    }



    $('#menu_btn').click(function () {
        $('#menu').addClass('down');
    });
    $('#menu .close').click(function () {
        $('#menu').removeClass('down');
    });

    $('#ticket, section .ticket').mouseenter(function (){
        $('#ticket .off, section .ticket .off').fadeOut(1);
        $('#ticket .on, section .ticket .on').fadeIn(1);
    });
    $('#ticket, section .ticket').mouseleave(function (){
        $('#ticket .on, section .ticket .on').fadeOut(1);
        $('#ticket .off, section .ticket .off').fadeIn(1);
    });


    $('.section .usa').click(function () {
        $('#usa_detail').fadeIn();
        $('#usa').fadeIn(function () {
            $('#slick-slide00').trigger('click');
        });
    });

    $('#usa_detail .back').click(function () {
        $('#usa_detail').fadeOut();
    });


    $('.section .toystory').click(function () {
        $('#toystory_detail').fadeIn();
        $('#toystory').fadeIn(function () {
            $('#slick-slide10').trigger('click');
        });
    });
    $('#toystory_detail .back').click(function () {
        $('#toystory_detail').fadeOut();
    });


    $('.section .fantasy').click(function () {
        $('#fantasy_detail').fadeIn();
        $('#fantasy').fadeIn(function (){
            $('#slick-slide20').trigger('click');
        });
    });
    $('#fantasy_detail .back').click(function () {
        $('#fantasy_detail').fadeOut();
    });



    $('#fullpage').fullpage({

        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06', 'page07'],

        navigation: true,
        navigationTooltips: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06', 'page07'],

        afterLoad: function(anchorLink, index){

            if (index == 1) {// 01 = true
                $('#pagination .slide_bar .line').stop().animate({'margin-left':0},500);
                $('#pagination .left_number > img:nth-child(1)').fadeIn();
            } else { // 01 = false
                $('#pagination .left_number > img:nth-child(1)').fadeOut();
            }
            if(index ==2){// 02 = true
                $('#pagination .slide_bar .line').stop().animate({'margin-left':25},500);
                $('#pagination .left_number > img:nth-child(2)').fadeIn();
            }else{//02 = false
                $('#pagination .left_number > img:nth-child(2)').fadeOut();
            }
            if(index ==3){// 03 = true
                $('#pagination .slide_bar .line').stop().animate({'margin-left':50},500);
                $('#pagination .left_number > img:nth-child(3)').fadeIn();
            }else{//03 = false
                $('#pagination .left_number > img:nth-child(3)').fadeOut();
            }
            if(index ==4){// 04 = true
                $('#pagination .slide_bar .line').stop().animate({'margin-left':75},500);
                $('#pagination .left_number > img:nth-child(4)').fadeIn();
            }else{//04 = false
                $('#pagination .left_number > img:nth-child(4)').fadeOut();
            }
            if(index ==5){// 05 = true
                $('#pagination .slide_bar .line').stop().animate({'margin-left':100},500);
                $('#pagination .left_number > img:nth-child(5)').fadeIn();
            }else{//05 = false
                $('#pagination .left_number > img:nth-child(5)').fadeOut();
            }
            if(index ==6){// 06 = true
                $('#pagination .slide_bar .line').stop().animate({'margin-left':125},500);
                $('#pagination .left_number > img:nth-child(6)').fadeIn();
            }else{//06 = false
                $('#pagination .left_number > img:nth-child(6)').fadeOut();
            }
            if(index ==7){// 07 = true
                $('#pagination .slide_bar .line').stop().animate({'margin-left':150},500);
                $('#pagination .left_number > img:nth-child(7)').fadeIn();
            }else{//07 = false
                $('#pagination .left_number > img:nth-child(7)').fadeOut();
            }

        },

        onLeave: function(index, destination, direction){
            var leavingSection = this;

            if(index == 1 && direction =='down'){//01 - >02

            }

            if(index == 2 && direction == 'down'){//02 -> 03

            } else if(index == 2 && direction == 'up'){//02 -> 01

            }

            if(index == 3 && direction == 'down'){//03 -> 04

            } else if(index == 3 && direction == 'up'){//03 -> 02

            }
            if(index == 4 && direction == 'down'){//04 -> 05

            } else if(index == 4 && direction == 'up'){//04 -> 03

            }
            if(index == 5 && direction == 'down'){//05 -> 06

            } else if(index == 5 && direction == 'up'){//05 -> 04

            }

        }
    });



});