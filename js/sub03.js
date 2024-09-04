window.addEventListener('DOMContentLoaded', function () {

    setTimeout(() => {
        $('#section01 .section01_1 .title1').addClass('on');
    }, 300);
    setTimeout(() => {
        $('#section01 .section01_1 .title2').addClass('on');
    }, 400);
    setTimeout(() => {
        $('#section01 .section01_1 .title3').addClass('on');
    }, 500);
    setTimeout(() => {
        $('#section01 .section01_1 .title4').addClass('on');
    }, 600);
    setTimeout(() => {
        $('#section01 .section01_1 .title5').addClass('on');
    }, 700);

    setTimeout(() => {
        $('#section01 .section01_1 .title_1').addClass('on');
        $('#section01 .section01_1 .title_2').addClass('on');
        $('#section01 .section01_1 .title_3').addClass('on');
        $('#section01 .section01_1 .circle_shape').addClass('on');
        $('#section01 .section01_1 .circle_triangle').addClass('on');
        $('#section01 .section01_1 .top_typo1').addClass('on');
        $('#section01 .section01_1 .bottom_typo1').addClass('on');
        $('#section01 .section01_1 .gnb1').addClass('on');
        $('#section01 .section01_1 .gnb_line').addClass('on');
    }, 2100);

    setTimeout(() => {
        $('#section01 .section01_1 .top_typo2').addClass('on');
        $('#section01 .section01_1 .gnb2').addClass('on');
        $('#section01 .section01_1 .background').addClass('on');
    }, 2200);

    setTimeout(() => {
        $('#section01 .section01_1 .bottom_typo2').addClass('on');
        $('#section01 .section01_1 .gnb3').addClass('on');
    }, 2300);

    setTimeout(() => {
        $('#section01 .section01_1 .gnb4').addClass('on');
    }, 2400);

    setTimeout(() => {
        $('#section01 .section01_1 .bottom_typo3').addClass('on');
        $('#section01 .section01_1 .gnb5').addClass('on');
    }, 2500);

    setTimeout(() => {
        $('#section01 .section01_1 .light').addClass('on');
        $('#section01 .section01_1 .circle').addClass('on');
    }, 2600);

    setTimeout(() => {
        $('#section01 .section01_1 .arrow').addClass('on');
    }, 2700);





    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        if(scrollTop >= 1350 && scrollTop <= 9999) {
            // $('#section01 .section01_1 .title1').removeClass('on');
            // $('#section01 .section01_1 .title2').removeClass('on');
            // $('#section01 .section01_1 .title3').removeClass('on');
            // $('#section01 .section01_1 .title4').removeClass('on');
            // $('#section01 .section01_1 .title5').removeClass('on');

            $('#section01 .section01_1 .title_1').removeClass('on');
            $('#section01 .section01_1 .title_2').removeClass('on');
            $('#section01 .section01_1 .title_3').removeClass('on');

            $('#section01 .section01_1 .circle_shape').removeClass('on');
            $('#section01 .section01_1 .circle_triangle').removeClass('on');
            $('#section01 .section01_1 .top_typo1').removeClass('on');
            $('#section01 .section01_1 .top_typo2').removeClass('on');

            $('#section01 .section01_1 .bottom_typo1').removeClass('on');
            $('#section01 .section01_1 .bottom_typo2').removeClass('on');
            $('#section01 .section01_1 .bottom_typo3').removeClass('on');

            $('#section01 .section01_1 .title_cover').addClass('on');
        }
        else {
            // $('#section01 .section01_1 .title1').addClass('on');
            // $('#section01 .section01_1 .title2').addClass('on');
            // $('#section01 .section01_1 .title3').addClass('on');
            // $('#section01 .section01_1 .title4').addClass('on');
            // $('#section01 .section01_1 .title5').addClass('on');

            $('#section01 .section01_1 .title_1').addClass('on');
            $('#section01 .section01_1 .title_2').addClass('on');
            $('#section01 .section01_1 .title_3').addClass('on');

            $('#section01 .section01_1 .circle_shape').addClass('on');
            $('#section01 .section01_1 .circle_triangle').addClass('on');
            $('#section01 .section01_1 .top_typo1').addClass('on');
            $('#section01 .section01_1 .top_typo2').addClass('on');

            $('#section01 .section01_1 .bottom_typo1').addClass('on');
            $('#section01 .section01_1 .bottom_typo2').addClass('on');
            $('#section01 .section01_1 .bottom_typo3').addClass('on');

            $('#section01 .section01_1 .title_cover').removeClass('on');
        }


        if(scrollTop >= 1300 && scrollTop <= 9999) {
            $('#section01 .x_scroll .x01 .tit1').addClass('on');
            $('#section01 .x_scroll .x01 .tit2').addClass('on');
            $('#section01 .x_scroll .x01 .tit3').addClass('on');

            $('#section01 .x_scroll .x01 .tp1').addClass('on');
            $('#section01 .x_scroll .x01 .tp2').addClass('on');
            $('#section01 .x_scroll .x01 .tp3').addClass('on');
            $('#section01 .x_scroll .x01 .tp4').addClass('on');
            $('#section01 .x_scroll .x01 .x01_btn').addClass('on');
            // $('#section01 .x_scroll .x01 .on_button').addClass('on');
        }
        else {
            $('#section01 .x_scroll .x01 .tit1').removeClass('on');
            $('#section01 .x_scroll .x01 .tit2').removeClass('on');
            $('#section01 .x_scroll .x01 .tit3').removeClass('on');

            $('#section01 .x_scroll .x01 .tp1').removeClass('on');
            $('#section01 .x_scroll .x01 .tp2').removeClass('on');
            $('#section01 .x_scroll .x01 .tp3').removeClass('on');
            $('#section01 .x_scroll .x01 .tp4').removeClass('on');
            $('#section01 .x_scroll .x01 .x01_btn').removeClass('on');
            // $('#section01 .x_scroll .x01 .on_button').removeClass('on');
        }


        if(scrollTop >= 2150 && scrollTop <= 9999) {
            $('#section01 .x_scroll .x02 .tit1').addClass('on');
            $('#section01 .x_scroll .x02 .tit2').addClass('on');
            $('#section01 .x_scroll .x02 .tit3').addClass('on');

            $('#section01 .x_scroll .x02 .tp1').addClass('on');
            $('#section01 .x_scroll .x02 .tp2').addClass('on');
            $('#section01 .x_scroll .x02 .tp3').addClass('on');
            $('#section01 .x_scroll .x02 .tp4').addClass('on');
            $('#section01 .x_scroll .x02 .tp5').addClass('on');
            $('#section01 .x_scroll .x02 .tp6').addClass('on');
            $('#section01 .x_scroll .x02 .x02_btn').addClass('on');
            // $('#section01 .x_scroll .x02 .off').addClass('on');
        }
        else {
            $('#section01 .x_scroll .x02 .tit1').removeClass('on');
            $('#section01 .x_scroll .x02 .tit2').removeClass('on');
            $('#section01 .x_scroll .x02 .tit3').removeClass('on');

            $('#section01 .x_scroll .x02 .tp1').removeClass('on');
            $('#section01 .x_scroll .x02 .tp2').removeClass('on');
            $('#section01 .x_scroll .x02 .tp3').removeClass('on');
            $('#section01 .x_scroll .x02 .tp4').removeClass('on');
            $('#section01 .x_scroll .x02 .tp5').removeClass('on');
            $('#section01 .x_scroll .x02 .tp6').removeClass('on');
            $('#section01 .x_scroll .x02 .x02_btn').removeClass('on');
            // $('#section01 .x_scroll .x02 .off').removeClass('on');
        }


        if(scrollTop >= 3000 && scrollTop <= 9999) {
            $('#section01 .x_scroll .x03 .tit1').addClass('on');
            $('#section01 .x_scroll .x03 .tit2').addClass('on');
            $('#section01 .x_scroll .x03 .tit3').addClass('on');

            $('#section01 .x_scroll .x03 .list1').addClass('on');
            $('#section01 .x_scroll .x03 .list2').addClass('on');
            $('#section01 .x_scroll .x03 .list3').addClass('on');
            $('#section01 .x_scroll .x03 .list4').addClass('on');
            $('#section01 .x_scroll .x03 .list5').addClass('on');
            $('#section01 .x_scroll .x03 .list6').addClass('on');
            $('#section01 .x_scroll .x03 .list7').addClass('on');
            $('#section01 .x_scroll .x03 .list8').addClass('on');
            $('#section01 .x_scroll .x03 .list9').addClass('on');
            $('#section01 .x_scroll .x03 .list10').addClass('on');
            $('#section01 .x_scroll .x03 .list11').addClass('on');
            $('#section01 .x_scroll .x03 .list12').addClass('on');
            $('#section01 .x_scroll .x03 .list13').addClass('on');
            $('#section01 .x_scroll .x03 .list14').addClass('on');
            $('#section01 .x_scroll .x03 .x03_btn').addClass('on');
            // $('#section01 .x_scroll .x03 .off').addClass('on');
        }
        else {
            $('#section01 .x_scroll .x03 .tit1').removeClass('on');
            $('#section01 .x_scroll .x03 .tit2').removeClass('on');
            $('#section01 .x_scroll .x03 .tit3').removeClass('on');

            $('#section01 .x_scroll .x03 .list1').removeClass('on');
            $('#section01 .x_scroll .x03 .list2').removeClass('on');
            $('#section01 .x_scroll .x03 .list3').removeClass('on');
            $('#section01 .x_scroll .x03 .list4').removeClass('on');
            $('#section01 .x_scroll .x03 .list5').removeClass('on');
            $('#section01 .x_scroll .x03 .list6').removeClass('on');
            $('#section01 .x_scroll .x03 .list7').removeClass('on');
            $('#section01 .x_scroll .x03 .list8').removeClass('on');
            $('#section01 .x_scroll .x03 .list9').removeClass('on');
            $('#section01 .x_scroll .x03 .list10').removeClass('on');
            $('#section01 .x_scroll .x03 .list11').removeClass('on');
            $('#section01 .x_scroll .x03 .list12').removeClass('on');
            $('#section01 .x_scroll .x03 .list13').removeClass('on');
            $('#section01 .x_scroll .x03 .list14').removeClass('on');
            $('#section01 .x_scroll .x03 .x03_btn').removeClass('on');
            // $('#section01 .x_scroll .x03 .off').removeClass('on');
        }


        if(scrollTop >= 4400 && scrollTop <= 9999) {
            $('#section01 .x_scroll .x04 .tit1').addClass('on');
            $('#section01 .x_scroll .x04 .tit2').addClass('on');
            $('#section01 .x_scroll .x04 .tit3').addClass('on');
            $('#section01 .x_scroll .x04 .tp1').addClass('on');
            $('#section01 .x_scroll .x04 .tp2').addClass('on');
            $('#section01 .x_scroll .x04 .tp3').addClass('on');
            $('#section01 .x_scroll .x04 .logo1').addClass('on');
            $('#section01 .x_scroll .x04 .logo1_name').addClass('on');
            $('#section01 .x_scroll .x04 .logo2').addClass('on');
            $('#section01 .x_scroll .x04 .logo2_name').addClass('on');
            $('#section01 .x_scroll .x04 .x04_btn').addClass('on');
            // $('#section01 .x_scroll .x04 .off').addClass('on');
        }
        else {
            $('#section01 .x_scroll .x04 .tit1').removeClass('on');
            $('#section01 .x_scroll .x04 .tit2').removeClass('on');
            $('#section01 .x_scroll .x04 .tit3').removeClass('on');
            $('#section01 .x_scroll .x04 .tp1').removeClass('on');
            $('#section01 .x_scroll .x04 .tp2').removeClass('on');
            $('#section01 .x_scroll .x04 .tp3').removeClass('on');
            $('#section01 .x_scroll .x04 .logo1').removeClass('on');
            $('#section01 .x_scroll .x04 .logo1_name').removeClass('on');
            $('#section01 .x_scroll .x04 .logo2').removeClass('on');
            $('#section01 .x_scroll .x04 .logo2_name').removeClass('on');
            $('#section01 .x_scroll .x04 .x04_btn').removeClass('on');
            // $('#section01 .x_scroll .x04 .off').removeClass('on');
        }






        if(scrollTop >= 7300 && scrollTop <= 9999) {
            $('#section01 .section01_2 .last_typo1').addClass('on');
            $('#section01 .section01_2 .last_typo2').addClass('on');
        }
        else {
            $('#section01 .section01_2 .last_typo1').removeClass('on');
            $('#section01 .section01_2 .last_typo2').removeClass('on');
        }




    });


    /*================ 마우스 커서 변하는 구동 =============*/
    $('#section01 .section01_2').mouseenter(function () {
        $('#cursor').addClass('on');
    })
    $('#section01 .section01_2').mouseleave(function () {
        $('#cursor').removeClass('on');
    })
    /*=====================================================*/


    /*  slide,click event section */

    gsap.to('#section01 .fix-this-01', {
        
        scrollTrigger: {
            trigger: "#section01 .trigger-this-01",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('#section01 .x_scroll', {
        
        y:0,
        immediateRender: false,
        scrollTrigger: {
            trigger: "#section01",
            start: "top top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section01 .x_scroll', {
        
        x:-3300,
        immediateRender: false,
        scrollTrigger: {
            trigger: "#section01",
            start: "1000 top",
            end: () => "+=" + 5000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section01 .inner', {
        
        x:-1920,
        scrollTrigger: {
            trigger: "#section01",
            start: "6000 top",
            end: () => "+=" + 3000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });



    let cursor = $('#cursor');

    $(document).mousemove(function (e) {
        let cursorWidth = cursor.width() / 2;
   
        gsap.to(cursor, {
            duration: 0.4,
            left: e.pageX - cursor.width() * 0.5,
            top: e.pageY - cursor.height() * 0.5,
            ease: "back.out"
        });
    });



















})


