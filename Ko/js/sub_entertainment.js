/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */


$(document).ready(function() {
    Logic();

    $('#menu_btn').click(function () {
        $('#menu').addClass('down');
    });

    $('#menu .close').click(function () {
        $('#menu').removeClass('down');
    });

    $('#ticket, #ent_main .ticket')
        .mouseenter(function (){
        $('#ticket .off, #ent_main .ticket .off').fadeOut(1);
        $('#ticket .on, #ent_main .ticket .on').fadeIn(1);
    })
        .mouseleave(function (){
        $('#ticket .on, #ent_main .ticket .on').fadeOut(1);
        $('#ticket .off, #ent_main .ticket .off').fadeIn(1);
    });


    $('#back').click(function () {
        $('#ent_main').fadeIn(1);
    });

    
    $('#ent_main .month_01')
        .mouseenter(function (){
            $('#ent_main .month_01 .on').fadeIn();
        })
        .mouseleave(function (){
            $('#ent_main .month_01 .on').fadeOut();
        })
        .click(function (){
            $('#ent_main').fadeOut(1);

        });


    $('#ent_main .month_03')
        .mouseenter(function (){
            $('#ent_main .month_03 .on').fadeIn();
    })
        .mouseleave(function (){
            $('#ent_main .month_03 .on').fadeOut();
    })
        .click(function (){
            $('#ent_main').fadeOut(1);

        });



    // Swiper: Slider
    new Swiper('#ent_main .swiper-container', {
        loop: true,
        nextButton: '#ent_main .swiper-button-next',
        prevButton: '#ent_main .swiper-button-prev',
        slidesPerView: 5,
        paginationClickable: false,
        spaceBetween: 0,
        breakpoints: {
            1920: {
                slidesPerView: 5,
                spaceBetween: 0
            },
            1028: {
                slidesPerView: 5,
                spaceBetween: 0
            },
            480: {
                slidesPerView: 5,
                spaceBetween: 0
            }

        }
    });

    $("#drag_01").slick({
        dots: false, //네이베이션 사용여부
        arrows: false, //화살표 사용여부
        prevArrow: $('.prev'), //이전 화살표
        nextArrow: $('.next'), //다음 화살표
        autoplay:true, //자동넘김
        autoplaySpeed: 4000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: true, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 3, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:1,//슬라이드 시작순서
        variableWidth: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition

    });

    $("#drag_03").slick({
        dots: false, //네이베이션 사용여부
        arrows: false, //화살표 사용여부
        prevArrow: $('.prev'), //이전 화살표
        nextArrow: $('.next'), //다음 화살표
        autoplay:true, //자동넘김
        autoplaySpeed: 4000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: true, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 3, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:1,//슬라이드 시작순서
        variableWidth: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition

    });



    $('#fullpage').fullpage({

        anchors: ['page01', 'page02', 'page03',],

        navigation: true,
        navigationTooltips: ['page01', 'page02', 'page03',],

        afterLoad: function(anchorLink, index){

            if (index == 1) {// 01 = true

            } else { // 01 = false

            }
            if(index ==2){// 02 = true

            }else{//02 = false

            }
            if(index ==3){// 03 = true

            }else{//03 = false

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
        }
    });



});