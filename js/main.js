window.addEventListener('DOMContentLoaded', function () {

    setTimeout(() => {
        $('#section01 .gnb1').addClass('on');
        $('#section01 .title1').addClass('on');
        $('#section01 .titlea2').addClass('on');
        $('#section01 .image1 .inner').addClass('on');
    }, 300);
    setTimeout(() => {
        $('#section01 .gnb2').addClass('on');
    }, 400);
    setTimeout(() => {
        $('#section01 .gnb3').addClass('on');
    }, 500);
    setTimeout(() => {
        $('#section01 .gnb4').addClass('on');
        $('#section01 .title2').addClass('on');
    }, 600);
    setTimeout(() => {
        $('#section01 .gnb5').addClass('on');
    }, 700);
    setTimeout(() => {
        $('#section01 .light').addClass('on');
        $('#section01 .circle').addClass('on');
    }, 800);
    setTimeout(() => {
        $('#section01 .title3').addClass('on');
        $('#section01 .top1').addClass('on');
        $('#section01 .arrow').addClass('on');
    }, 900);
    setTimeout(() => {
        $('#section01 .top2').addClass('on');
    }, 1200);
    setTimeout(() => {
        $('#section01 .titlea1').addClass('on');
    }, 1900);

    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        if(scrollTop >= 0 && scrollTop <= 400) {
            $('#section01 .top1').addClass('on');
            $('#section01 .top2').addClass('on');
        }
        else {
            $('#section01 .top1').removeClass('on');
            $('#section01 .top2').removeClass('on');
        }

        if(scrollTop >= 1150 && scrollTop <= 2250) {
            $('#section01 .bt1').addClass('on');
            $('#section01 .bt2').addClass('on');
            $('#section01 .bt3').addClass('on');
            $('#section01 .bt4').addClass('on');
            $('#section01 .bt_icon').addClass('on');
        }
        else {
            $('#section01 .bt1').removeClass('on');
            $('#section01 .bt2').removeClass('on');
            $('#section01 .bt3').removeClass('on');
            $('#section01 .bt4').removeClass('on');
            $('#section01 .bt_icon').removeClass('on');
        }
        
        if(scrollTop >= 2350 && scrollTop <= 3450) {
            $('#section02 .line').addClass('on');
            $('#section02 .logo').addClass('on');
            $('#section02 .bottom0').addClass('on');
            $('#section02 .bottom1').addClass('on');
            $('#section02 .bottom2').addClass('on');
            $('#section02 .bottom3').addClass('on');
            $('#section02 .bottom4').addClass('on');
        }
        else {
            $('#section02 .line').removeClass('on');
            $('#section02 .logo').removeClass('on');
            $('#section02 .bottom0').removeClass('on');
            $('#section02 .bottom1').removeClass('on');
            $('#section02 .bottom2').removeClass('on');
            $('#section02 .bottom3').removeClass('on');
            $('#section02 .bottom4').removeClass('on');
        }

        if(scrollTop >= 3150 && scrollTop <= 4250) {
            $('#section03 .title1').addClass('on');
            $('#section03 .title2').addClass('on');
            $('#section03 .top_image').addClass('on');
            $('#section03 .typo1').addClass('on');
            $('#section03 .typo2').addClass('on');
            $('#section03 .typo3').addClass('on');
            $('#section03 .typo4').addClass('on');
            $('#section03 .typo5').addClass('on');
            $('#section03 .typo6').addClass('on');
        }
        else {
            $('#section03 .title1').removeClass('on');
            $('#section03 .title2').removeClass('on');
            $('#section03 .top_image').removeClass('on');
            $('#section03 .typo1').removeClass('on');
            $('#section03 .typo2').removeClass('on');
            $('#section03 .typo3').removeClass('on');
            $('#section03 .typo4').removeClass('on');
            $('#section03 .typo5').removeClass('on');
            $('#section03 .typo6').removeClass('on');
        }

        if(scrollTop >= 7500 && scrollTop <= 8550) {
            $('#section03 .logo').addClass('on');
            $('#section03 .top_typo1').addClass('on');
            $('#section03 .top_typo2').addClass('on');
            $('#section03 .top_typo3').addClass('on');
            $('#section03 .top_typo4').addClass('on');
            $('#section03 .top_typo5').addClass('on');
            $('#section03 .top_typo6').addClass('on');
        }
        else {
            $('#section03 .logo').removeClass('on');
            $('#section03 .top_typo1').removeClass('on');
            $('#section03 .top_typo2').removeClass('on');
            $('#section03 .top_typo3').removeClass('on');
            $('#section03 .top_typo4').removeClass('on');
            $('#section03 .top_typo5').removeClass('on');
            $('#section03 .top_typo6').removeClass('on');
        }

        if(scrollTop >= 7650 && scrollTop <= 8600) {
            $('#section03 .line').addClass('on');
        }
        else {
            $('#section03 .line').removeClass('on');
        }

        if(scrollTop >= 11700 && scrollTop <= 99999) {
            $('#section04 .typo1').addClass('on');
            $('#section04 .typo2').addClass('on');
        }
        else {
            $('#section04 .typo1').removeClass('on');
            $('#section04 .typo2').removeClass('on');
        }

        // if(scrollTop >= 16650 && scrollTop <= 16967) {
        //     $('#cursor').addClass('on');
        // }
        // else {
        //     $('#cursor').removeClass('on');
        // }
    });

    /*  slide,click event section */


    /*================ 마우스 커서 변하는 구동 =============*/
    $('#section04 .txt_group').mouseenter(function () {
        $('#cursor').addClass('on');
    })
    $('#section04 .txt_group').mouseleave(function () {
        $('#cursor').removeClass('on');
    })
    /*=====================================================*/

    gsap.to('#section01 .image1', {

        y:350,
        x:-900,
        scrollTrigger: {
            trigger: "#section01",
            start: "500 top",
            end: () => "+=" + 500,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section01 .image1 .inner video', {

        width:1500,
        borderRadius:"430px",
        scrollTrigger: {
            trigger: "#section01",
            start: "500 top",
            end: () => "+=" + 500,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    // gsap.to('#section01_1 .fix-this-01', {

    //     scrollTrigger: {
    //         trigger: "#section01_1 .trigger-this-01",
    //         start: "top top",
    //         // end: () => "+=" + 300,
    //         end: 'bottom bottom',
    //         pin: true,
    //         pinSpacing: false,
    //         scrub: true,
    //     }
    // });

    // gsap.to('#section01_1 .a1 > img', {

    //     y:0,
    //     scrollTrigger: {
    //         trigger: "#section01_1",
    //         start: "top top",
    //         end: () => "+=" + 100,
    //         // end: 'bottom bottom',
    //         scrub: true,
    //     }
    // });

    // const tl = gsap.timeline();

    // tl.to("#section01_1 .a1 > img", {y:0})
    // tl.to("#section01_1 .a2 > img", {y:0})
    // tl.to("#section01_1 .a3 > img", {y:0})
    // tl.to("#section01_1 .a4 > img", {y:0})
    // tl.to("#section01_1 .a5 > img", {y:0})
    // tl.to("#section01_1 .a6 > img", {y:0})
    // tl.to("#section01_1 .a7 > img", {y:0})

    // ScrollTrigger.create({
    //     animation: tl,
    //     trigger: "#section01_1",
    //     start: "top top",
    //     end: "+=700",
    //     scrub: true,
    // })

    // const tl2 = gsap.timeline();

    // tl2.to("#section01_1 .a8 > img", {y:0})
    // tl2.to("#section01_1 .a9 > img", {y:0})
    // tl2.to("#section01_1 .a10 > img", {y:0})
    // tl2.to("#section01_1 .a11 > img", {y:0})
    // tl2.to("#section01_1 .a12 > img", {y:0})
    // tl2.to("#section01_1 .a13 > img", {y:0})
    // tl2.to("#section01_1 .a14 > img", {y:0})
    // tl2.to("#section01_1 .a15 > img", {y:0})
    // tl2.to("#section01_1 .a16 > img", {y:0})
    // tl2.to("#section01_1 .a17 > img", {y:0})
    // tl2.to("#section01_1 .a18 > img", {y:0})
    // tl2.to("#section01_1 .a19 > img", {y:0})
    // tl2.to("#section01_1 .a20 > img", {y:0})

    // ScrollTrigger.create({
    //     animation: tl2,
    //     trigger: "#section01_1",
    //     start: "700 top",
    //     end: "+=1300",
    //     scrub: true,
    // })

    // const tl3 = gsap.timeline();

    // tl3.to("#section01_1 .a21 > img", {y:0})
    // tl3.to("#section01_1 .a22 > img", {y:0})
    // tl3.to("#section01_1 .a23 > img", {y:0})
    // tl3.to("#section01_1 .a24 > img", {y:0})
    // tl3.to("#section01_1 .a25 > img", {y:0})
    // tl3.to("#section01_1 .a26 > img", {y:0})
    // tl3.to("#section01_1 .a27 > img", {y:0})
    // tl3.to("#section01_1 .a28 > img", {y:0})
    // tl3.to("#section01_1 .a29 > img", {y:0})
    // tl3.to("#section01_1 .a30 > img", {y:0})
    // tl3.to("#section01_1 .a31 > img", {y:0})
    // tl3.to("#section01_1 .a32 > img", {y:0})
    // tl3.to("#section01_1 .a33 > img", {y:0})
    // tl3.to("#section01_1 .a34 > img", {y:0})
    // tl3.to("#section01_1 .a35 > img", {y:0})
    // tl3.to("#section01_1 .bottom_icon > img", {y:0})

    // ScrollTrigger.create({
    //     animation: tl3,
    //     trigger: "#section01_1",
    //     start: "2000 top",
    //     end: "+=1600",
    //     scrub: true,
    // })
    
    
    // const tl4 = gsap.timeline();

    // tl4.to("#section01_1 .a36 > img", {y:0})
    // tl4.to("#section01_1 .a37 > img", {y:0})
    // tl4.to("#section01_1 .a38 > img", {y:0})
    // tl4.to("#section01_1 .a39 > img", {y:0})
    // tl4.to("#section01_1 .a40 > img", {y:0})
    // tl4.to("#section01_1 .a41 > img", {y:0})
    // tl4.to("#section01_1 .a42 > img", {y:0})

    // ScrollTrigger.create({
    //     animation: tl4,
    //     trigger: "#section01_1",
    //     start: "3600 top",
    //     end: "+=700",
    //     scrub: true,
    // })




    $('#section03 .card1').mouseenter(function () {
        $(this).addClass('on');
    })
    $('#section03 .card1').mouseleave(function () {
        setTimeout(() => {
            $(this).removeClass('on');
        }, 2000);
    })
    
    $('#section03 .card2').mouseenter(function () {
        $(this).addClass('on');
    })
    $('#section03 .card2').mouseleave(function () {
        setTimeout(() => {
            $(this).removeClass('on');
        }, 2000);
    })

    $('#section03 .card3').mouseenter(function () {
        $(this).addClass('on');
    })
    $('#section03 .card3').mouseleave(function () {
        setTimeout(() => {
            $(this).removeClass('on');
        }, 2000);
    })

    $('#section03 .card4').mouseenter(function () {
        $(this).addClass('on');
    })
    $('#section03 .card4').mouseleave(function () {
        setTimeout(() => {
            $(this).removeClass('on');
        }, 2000);
    })

    $('#section03 .card5').mouseenter(function () {
        $(this).addClass('on');
    })
    $('#section03 .card5').mouseleave(function () {
        setTimeout(() => {
            $(this).removeClass('on');
        }, 2000);
    })

    $('#section03 .card6').mouseenter(function () {
        $(this).addClass('on');
    })
    $('#section03 .card6').mouseleave(function () {
        setTimeout(() => {
            $(this).removeClass('on');
        }, 2000);
    })

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


