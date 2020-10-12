/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */


$(document).ready(function() {
    Logic();

    $('#menu_btn, #main_menu_btn, #wt_menu_btn').click(function () {
        $('#menu').addClass('down');
    });

    $('#menu .close').click(function () {
        $('#menu').removeClass('down');
    });


    $('#ticket, #main_ticket, #wt_ticket').mouseenter(function (){
        $('#ticket .off, #main_ticket .off, #wt_ticket .off').fadeOut(1);
        $('#ticket .on, #main_ticket .on, #wt_ticket .on').fadeIn(1);
    });
    $('#ticket, #main_ticket, #wt_ticket').mouseleave(function (){
        $('#ticket .on, #main_ticket .on, #wt_ticket .on').fadeOut(1);
        $('#ticket .off, #main_ticket .off, #wt_ticket .off').fadeIn(1);
    });


    $('#main .mickey >a .sd_btn').mouseenter(function () {
        $('#mickey_on').addClass('on');
    });
    $('#main .mickey >a .sd_btn').mouseleave(function () {
        $('#mickey_on').removeClass('on');
    });

    $('#main .cinderella >a .sd_btn').mouseenter(function () {
        $('#cinderella_on').addClass('on');
    });
    $('#main .cinderella >a .sd_btn').mouseleave(function () {
        $('#cinderella_on').removeClass('on');
    });

    $('#main .zootopia >a .sd_btn').mouseenter(function () {
        $('#zootopia_on').addClass('on');
    });
    $('#main .zootopia >a .sd_btn').mouseleave(function () {
        $('#zootopia_on').removeClass('on');
    });

    $('#main .toystory >a .sd_btn').mouseenter(function () {
        $('#toystory_on').addClass('on');
    });
    $('#main .toystory >a .sd_btn').mouseleave(function () {
        $('#toystory_on').removeClass('on');
    });

    $('#main .tangled >a .sd_btn').mouseenter(function () {
        $('#tangled_on').addClass('on');
    });
    $('#main .tangled >a .sd_btn').mouseleave(function () {
        $('#tangled_on').removeClass('on');
    });



    $('#back').click(function () {
        $('#mickey_box').fadeIn(1);
    });


    $('#main .mickey > a .sd_btn').click(function () {
        $('#mickey_box').fadeIn(1);
    });

    $('#box_page .box .mickey, #box_page .box .minnie, #box_page .box .pluto').click(function () {
        $('#mickey_box').fadeOut(1);
        $('#main').fadeOut(1);
    });


    $('#fullpage').fullpage({

        anchors: ['page01', 'page02', 'page03',],

        navigation: true,
        navigationTooltips: ['page01', 'page02', 'page03',],

        afterLoad: function(anchorLink, index){

            if (index == 1) {// 01 = true
                $('#pagination>li:nth-child(1)').addClass('on');
                $('#section01 .img_box').addClass('on');
                $('#section01 .typo .subtit, #section01 .typo .tit, #section01 .typo > p').addClass('on');

            } else { // 01 = false
                $('#pagination>li:nth-child(1)').removeClass('on');
                $('#section01 .img_box').removeClass('on');
                $('#section01 .typo .subtit, #section01 .typo .tit, #section01 .typo > p').removeClass('on');
            }
            if(index ==2){// 02 = true
                $('#pagination>li:nth-child(2)').addClass('on');
                $('#section02 .img_box').addClass('on');
                $('#section02 .typo .subtit, #section02 .typo .tit, #section02 .typo > p').addClass('on');
            }else{//02 = false
                $('#pagination>li:nth-child(2)').removeClass('on');
                $('#section02 .img_box').removeClass('on');
                $('#section02 .typo .subtit, #section02 .typo .tit, #section02 .typo > p').removeClass('on');
            }
            if(index ==3){// 03 = true
                $('#pagination>li:nth-child(3)').addClass('on');
                $('#section03 .img_box').addClass('on');
                $('#section03 .typo .subtit, #section03 .typo .tit, #section03 .typo > p').addClass('on');
            }else{//03 = false
                $('#pagination>li:nth-child(3)').removeClass('on');
                $('#section03 .img_box').removeClass('on');
                $('#section03 .typo .subtit, #section03 .typo .tit, #section03 .typo > p').removeClass('on');
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