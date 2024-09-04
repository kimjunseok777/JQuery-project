window.addEventListener('DOMContentLoaded', function () {

    setTimeout(() => {
        $('#section01 .before .title1').addClass('on');
        $('#section01 .before .title2').addClass('on');
        $('#section01 .before .title3').addClass('on');
        $('#section01 .before .circle').addClass('on');
    }, 300);




    setTimeout(() => {
        $('#section01 .after').addClass('on');
    }, 300);
    setTimeout(() => {
        $('#section01 .gnb1').addClass('on');
    }, 300);
    setTimeout(() => {
        $('#section01 .gnb2').addClass('on');
    }, 400);
    setTimeout(() => {
        $('#section01 .gnb3').addClass('on');
    }, 500);
    setTimeout(() => {
        $('#section01 .gnb4').addClass('on');
    }, 600);
    setTimeout(() => {
        $('#section01 .gnb5').addClass('on');
    }, 700);
    setTimeout(() => {
        $('#section01 .light').addClass('on');
        $('#section01 .circle').addClass('on');
    }, 800);
    setTimeout(() => {
        $('#section01 .arrow').addClass('on');
    }, 900);



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        if(scrollTop >= 1 && scrollTop <= 99999) {
            $('#section01 .before .title1').removeClass('on');
            $('#section01 .before .title2').removeClass('on');
            $('#section01 .before .title3').removeClass('on');
            $('#section01 .before .circle').removeClass('on');
        }
        else {
            $('#section01 .before .title1').addClass('on');
            $('#section01 .before .title2').addClass('on');
            $('#section01 .before .title3').addClass('on');
            $('#section01 .before .circle').addClass('on');
        }

        if(scrollTop >= 1950 && scrollTop <= 2900) {
            $('#section02 .typo1_1').addClass('on');
            $('#section02 .typo1_2').addClass('on');
            $('#section02 .typo1_3').addClass('on');
            $('#section02 .typo1_4').addClass('on');
            $('#section02 .typo1_5').addClass('on');
            $('#section02 .typo1_6').addClass('on');

            $('#section02 .typo2_1').addClass('on');
            $('#section02 .typo2_2').addClass('on');
            $('#section02 .typo2_3').addClass('on');
            $('#section02 .typo2_4').addClass('on');
            $('#section02 .typo2_5').addClass('on');

            $('#section02 .typo3_1').addClass('on');
            $('#section02 .typo3_2').addClass('on');
            $('#section02 .typo3_3').addClass('on');
            $('#section02 .typo3_4').addClass('on');
        }
        else {
            $('#section02 .typo1_1').removeClass('on');
            $('#section02 .typo1_2').removeClass('on');
            $('#section02 .typo1_3').removeClass('on');
            $('#section02 .typo1_4').removeClass('on');
            $('#section02 .typo1_5').removeClass('on');
            $('#section02 .typo1_6').removeClass('on');

            $('#section02 .typo2_1').removeClass('on');
            $('#section02 .typo2_2').removeClass('on');
            $('#section02 .typo2_3').removeClass('on');
            $('#section02 .typo2_4').removeClass('on');
            $('#section02 .typo2_5').removeClass('on');

            $('#section02 .typo3_1').removeClass('on');
            $('#section02 .typo3_2').removeClass('on');
            $('#section02 .typo3_3').removeClass('on');
            $('#section02 .typo3_4').removeClass('on');
        }


        if(scrollTop >= 2800 && scrollTop <= 99999) {
            $('#section03 .title1').addClass('on');
            $('#section03 .title2').addClass('on');
            $('#section03 .title3').addClass('on');
            $('#section03 .title4').addClass('on');

            $('#section03 .typo1_1').addClass('on');
            $('#section03 .typo1_2').addClass('on');

            $('#section03 .typo2_1').addClass('on');
            $('#section03 .typo2_2').addClass('on');
            $('#section03 .typo2_3').addClass('on');
            $('#section03 .typo2_4').addClass('on');
            $('#section03 .typo2_5').addClass('on');
        }
        else {
            $('#section03 .title1').removeClass('on');
            $('#section03 .title2').removeClass('on');
            $('#section03 .title3').removeClass('on');
            $('#section03 .title4').removeClass('on');

            $('#section03 .typo1_1').removeClass('on');
            $('#section03 .typo1_2').removeClass('on');

            $('#section03 .typo2_1').removeClass('on');
            $('#section03 .typo2_2').removeClass('on');
            $('#section03 .typo2_3').removeClass('on');
            $('#section03 .typo2_4').removeClass('on');
            $('#section03 .typo2_5').removeClass('on');
        }


        if(scrollTop >= 9000 && scrollTop <= 99999) {
            $('#section03 .head1_point').addClass('on');
            $('#section03 .head1_line').addClass('on');
            $('#section03 .head1_tp1').addClass('on');
            $('#section03 .head1_tp2').addClass('on');
            $('#section03 .head1_tp3').addClass('on');
            $('#section03 .head1_tp4').addClass('on');
        }
        else {
            $('#section03 .head1_point').removeClass('on');
            $('#section03 .head1_line').removeClass('on');
            $('#section03 .head1_tp1').removeClass('on');
            $('#section03 .head1_tp2').removeClass('on');
            $('#section03 .head1_tp3').removeClass('on');
            $('#section03 .head1_tp4').removeClass('on');
        }

        if(scrollTop >= 9250 && scrollTop <= 99999) {
            $('#section03 .head2_point').addClass('on');
            $('#section03 .head2_line').addClass('on');
            $('#section03 .head2_tp1').addClass('on');
            $('#section03 .head2_tp2').addClass('on');
            $('#section03 .head2_tp3').addClass('on');
            $('#section03 .head2_tp4').addClass('on');
        }
        else {
            $('#section03 .head2_point').removeClass('on');
            $('#section03 .head2_line').removeClass('on');
            $('#section03 .head2_tp1').removeClass('on');
            $('#section03 .head2_tp2').removeClass('on');
            $('#section03 .head2_tp3').removeClass('on');
            $('#section03 .head2_tp4').removeClass('on');
        }

        if(scrollTop >= 9400 && scrollTop <= 99999) {
            $('#section03 .head3_point').addClass('on');
            $('#section03 .head3_line').addClass('on');
            $('#section03 .head3_tp1').addClass('on');
            $('#section03 .head3_tp2').addClass('on');
            $('#section03 .head3_tp3').addClass('on');
            $('#section03 .head3_tp4').addClass('on');
            $('#section03 .head3_tp5').addClass('on');
        }
        else {
            $('#section03 .head3_point').removeClass('on');
            $('#section03 .head3_line').removeClass('on');
            $('#section03 .head3_tp1').removeClass('on');
            $('#section03 .head3_tp2').removeClass('on');
            $('#section03 .head3_tp3').removeClass('on');
            $('#section03 .head3_tp4').removeClass('on');
            $('#section03 .head3_tp5').removeClass('on');
        }

        if(scrollTop >= 9800 && scrollTop <= 99999) {
            $('#section03 .head4_point').addClass('on');
            $('#section03 .head4_line').addClass('on');
            $('#section03 .head4_tp1').addClass('on');
            $('#section03 .head4_tp2').addClass('on');
            $('#section03 .head4_tp3').addClass('on');
            $('#section03 .head4_tp4').addClass('on');
        }
        else {
            $('#section03 .head4_point').removeClass('on');
            $('#section03 .head4_line').removeClass('on');
            $('#section03 .head4_tp1').removeClass('on');
            $('#section03 .head4_tp2').removeClass('on');
            $('#section03 .head4_tp3').removeClass('on');
            $('#section03 .head4_tp4').removeClass('on');
        }

        if(scrollTop >= 10400 && scrollTop <= 99999) {
            $('#section04 .con_box').addClass('on');
            $('#section04 .con_tit1').addClass('on');
            $('#section04 .con_tit2').addClass('on');
            $('#section04 .con_tit3').addClass('on');
            $('#section04 .con_tit4').addClass('on');
            $('#section04 .con_tit5').addClass('on');
            $('#section04 .con_tit6').addClass('on');

            $('#section04 .con_tit_1').addClass('on');
            $('#section04 .con_tit_2').addClass('on');
            $('#section04 .con_tit_3').addClass('on');
            $('#section04 .con_price').addClass('on');

            $('#section04 .con_button1').addClass('on');
            $('#section04 .con_button2').addClass('on');

            $('#section04 .con_tp1').addClass('on');
            $('#section04 .con_tp1_1').addClass('on');
            $('#section04 .con_tp1_2').addClass('on');

            $('#section04 .con_tp2').addClass('on');
            $('#section04 .con_tp2_1').addClass('on');
            $('#section04 .con_tp2_2').addClass('on');

            $('#section04 .con_tp3').addClass('on');
            $('#section04 .con_tp3_1').addClass('on');
            $('#section04 .con_tp3_2').addClass('on');
            $('#section04 .con_tp3_3').addClass('on');
        }
        else {
            $('#section04 .con_box').removeClass('on');
            $('#section04 .con_tit1').removeClass('on');
            $('#section04 .con_tit2').removeClass('on');
            $('#section04 .con_tit3').removeClass('on');
            $('#section04 .con_tit4').removeClass('on');
            $('#section04 .con_tit5').removeClass('on');
            $('#section04 .con_tit6').removeClass('on');

            $('#section04 .con_tit_1').removeClass('on');
            $('#section04 .con_tit_2').removeClass('on');
            $('#section04 .con_tit_3').removeClass('on');
            $('#section04 .con_price').removeClass('on');

            $('#section04 .con_button1').removeClass('on');
            $('#section04 .con_button2').removeClass('on');

            $('#section04 .con_tp1').removeClass('on');
            $('#section04 .con_tp1_1').removeClass('on');
            $('#section04 .con_tp1_2').removeClass('on');

            $('#section04 .con_tp2').removeClass('on');
            $('#section04 .con_tp2_1').removeClass('on');
            $('#section04 .con_tp2_2').removeClass('on');

            $('#section04 .con_tp3').removeClass('on');
            $('#section04 .con_tp3_1').removeClass('on');
            $('#section04 .con_tp3_2').removeClass('on');
            $('#section04 .con_tp3_3').removeClass('on');
        }


        if(scrollTop >= 11550 && scrollTop <= 99999) {
            $('#section05 .last_typo1').addClass('on');
            $('#section05 .last_typo2').addClass('on');
        }
        else {
            $('#section05 .last_typo1').removeClass('on');
            $('#section05 .last_typo2').removeClass('on');
        }



    });


    $('#section05').mouseenter(function () {
        $('#cursor').addClass('on');
    })
    $('#section05').mouseleave(function () {
        $('#cursor').removeClass('on');
    })


    /*================ 마우스 커서 변하는 구동 =============*/
    $('#section05 .txt_group').mouseenter(function () {
        $('#cursor').addClass('on');
    })
    $('#section05 .txt_group').mouseleave(function () {
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

    const tl = gsap.timeline();

    tl.to("#section01 .box_group > div", {opacity:0, each:1, stagger: {from: "random", amount: 4}})

    ScrollTrigger.create({
        animation: tl,
        trigger: "#section01",
        start: "top top",
        end: "+=1500",
        scrub: true,
    })
    gsap.to('#section01 .frame_img > img', {

        y:0,
        scrollTrigger: {
            trigger: "#section01",
            start: "100 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section01 .txt_group', {

        y:0,
        scrollTrigger: {
            trigger: "#section01",
            start: "100 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section03 .fix-this-03', {

        scrollTrigger: {
            trigger: "#section03 .trigger-this-03",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });

/*================================================*/

    gsap.to('#section03 .card1', {

        y:0,
        immediateRender: false,
        scrollTrigger: {
            trigger: "#section03",
            start: "-500 top",
            end: () => "+=" + 700,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .card2', {

        y:0,
        immediateRender: false,
        scrollTrigger: {
            trigger: "#section03",
            start: "200 top",
            end: () => "+=" + 700,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .card3', {

        y:0,
        immediateRender: false,
        scrollTrigger: {
            trigger: "#section03",
            start: "900 top",
            end: () => "+=" + 700,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .card4', {

        y:0,
        immediateRender: false,
        scrollTrigger: {
            trigger: "#section03",
            start: "1600 top",
            end: () => "+=" + 700,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .card5', {

        y:0,
        immediateRender: false,
        scrollTrigger: {
            trigger: "#section03",
            start: "2300 top",
            end: () => "+=" + 700,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


/*================================================*/
    
    gsap.to('#section03 .title_size', {

        y:-900,
        x:0,
        immediateRender: false,
        scrollTrigger: {
            trigger: "#section03",
            start: "3000 top",
            end: () => "+=" + 900,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .card1', {

        y:85,
        x:-395,
        immediateRender: false,
        scrollTrigger: {
            trigger: "#section03",
            start: "3000 top",
            end: () => "+=" + 1600,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    
    gsap.to('#section03 .card2', {

        y:46,
        x:112,
        immediateRender: false,
        scrollTrigger: {
            trigger: "#section03",
            start: "3000 top",
            end: () => "+=" + 1600,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    
    gsap.to('#section03 .card3', {

        y:6,
        x:-902,
        immediateRender: false,
        scrollTrigger: {
            trigger: "#section03",
            start: "3000 top",
            end: () => "+=" + 1600,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section03 .card4', {

        y:-33,
        x:618,
        immediateRender: false,
        scrollTrigger: {
            trigger: "#section03",
            start: "3000 top",
            end: () => "+=" + 1600,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section03 .card5', {

        y:-84,
        x:-1410,
        immediateRender: false,
        scrollTrigger: {
            trigger: "#section03",
            start: "3000 top",
            end: () => "+=" + 1600,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    /*=================== card end =============================*/







 /*=======이너 (inner) 는 처음에 전체를 위로 올려주는 역할=========*/
    gsap.to('#section03 .inner', {

        y:-4700,
        scrollTrigger: {
            trigger: "#section03",
            start: "4600 top",
            end: () => "+=" + 2800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });




    /*=======card bg랑 original이 같이 밑으로 떨어지는 것=========*/
    gsap.to('#section03 .card_img', {

        y:2000,
        scrollTrigger: {
            trigger: "#section03",
            start: "4600 top",
            end: () => "+=" + 1600,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    /*=======내려갈 때 카드1번 지인덱스 높여주는 것=========*/
    gsap.to('#section03 .card1', {

        zIndex:999,
        immediateRender: false,
        scrollTrigger: {
            trigger: "#section03",
            start: "4600 top",
            end: () => "+=" + 50,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    /*=======카드bg 스케일로 크기 키우는 것=========*/
    gsap.to('#section03 .card_bg', {

        y: 1600,
        scale:6,
        immediateRender: false,
        scrollTrigger: {
            trigger: "#section03",
            start: "4600 top",
            end: () => "+=" + 1600,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    /*=======카드bg 많이 커질 때쯤 사라지게 하는 것========*/
    gsap.to('#section03 .card_bg', {

        opacity:0,
        zIndex:-1,
        immediateRender: false,
        scrollTrigger: {
            trigger: "#section03",
            start: "4800 top",
            end: () => "+=" + 1600,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    /*=======orginal 헤드셋 크기 키우는 것=========*/
    /*===*** 여기서 y축을 더 내리면 헤드셋을 더 아래로 내려주게 할 수 있음 ***===*/
    gsap.to('#section03 .original > img', {

        width:820,
        height:1689,
        x:-280,
        y:1500,
        scrollTrigger: {
            trigger: "#section03",
            start: "4600 top",
            end: () => "+=" + 1600,
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


