/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */


$(document).ready(function() {
    Logic();

    $('#intro .video_bar .play_bar').addClass('on');

    setTimeout(function () {
        $('#intro').fadeOut();
    },31000)

    $('#intro .video_bar .skip').click(function () {
        $('#intro').fadeOut();
        $('#section01 .fp-tableCell .title > h3').addClass('on');
        $('#section01 .fp-tableCell .title > h2').addClass('on');
        $('#section01 .fp-tableCell .title > p').addClass('on');
        $('#section01 .fp-tableCell .sc01').addClass('on');
    })

    $('#menu_btn').click(function () {
        $('#menu').addClass('down');
    });
    $('#menu .close').click(function () {
        $('#menu').removeClass('down');
    });

    $('#ticket').mouseenter(function (){
        $('#ticket .off').fadeOut(1);
        $('#ticket .on').fadeIn(1);
    });
    $('#ticket').mouseleave(function (){
        $('#ticket .on').fadeOut(1);
        $('#ticket .off').fadeIn(1);
    });


    $('#section01 .sc01').click(function () {
        $('#pop01').fadeIn();
    });
    $('#pop01 .close').click(function () {
        $('#pop01').fadeOut();
    });



    $('#section02 .sc02').click(function () {
        $('#pop02').fadeIn();
    });
    $('#pop02 .pop_box .close').click(function () {
        $('#pop02').fadeOut();
    });




    $('#fullpage').fullpage({

        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],

        navigation: true,
        navigationTooltips: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],

        afterLoad: function(anchorLink, index){

            if (index == 1) {// 01 = true

            } else { // 01 = false

            }
            if(index ==2){// 02 = true
                $('#section02 .fp-tableCell .title > h3').addClass('on');
                $('#section02 .fp-tableCell .title > h2').addClass('on');
                $('#section02 .fp-tableCell .title > p').addClass('on');
                $('#section02 .fp-tableCell .sc02').addClass('on');
            }else{//02 = false
                $('#section02 .fp-tableCell .title > h3').removeClass('on');
                $('#section02 .fp-tableCell .title > h2').removeClass('on');
                $('#section02 .fp-tableCell .title > p').removeClass('on');
                $('#section02 .fp-tableCell .sc02').removeClass('on');
            }
            if(index ==3){// 03 = true

            }else{//02 = false

            }
            if(index ==4){// 04 = true

            }else{//02 = false

            }
            if(index ==5){// 05 = true

            }else{//02 = false

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