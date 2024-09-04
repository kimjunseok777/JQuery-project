window.addEventListener('DOMContentLoaded', function () {

    setTimeout(() => {
        $('#section01 .clip').addClass('on');
        $('#section01 .clip .up').addClass('on');
        $('#section01 .clip .green').addClass('on');
        $('#section01 .clip .video').addClass('on');
    }, 300);

    setTimeout(() => {
        $('#section01 .title > div').addClass('on');
    }, 700);

    setTimeout(() => {
        $('#section01 .gnb1').addClass('on');
    }, 1600);
    setTimeout(() => {
        $('#section01 .gnb2').addClass('on');
    }, 1700);
    setTimeout(() => {
        $('#section01 .gnb3').addClass('on');
        $('#section01 .mini1').addClass('on');
    }, 1800);
    setTimeout(() => {
        $('#section01 .gnb4').addClass('on');
        $('#section01 .mini2').addClass('on');
    }, 1900);
    setTimeout(() => {
        $('#section01 .gnb5').addClass('on');
        $('#section01 .mini3').addClass('on');
    }, 2000);
    setTimeout(() => {
        $('#section01 .light').addClass('on');
        $('#section01 .circle').addClass('on');
        $('#section01 .mini4').addClass('on');
    }, 2100);
    setTimeout(() => {
        $('#section01 .mini5').addClass('on');
        $('#section01 .arrow').addClass('on');
    }, 2200);
    setTimeout(() => {
        $('#section01 .typo1').addClass('on');
    }, 2300);
    setTimeout(() => {
        $('#section01 .typo2').addClass('on');
    }, 2370);
    setTimeout(() => {
        $('#section01 .typo3').addClass('on');
    }, 2440);
    setTimeout(() => {
        $('#section01 .typo4').addClass('on');
    }, 2510);

    setTimeout(() => {
        $('#section01 .mini6').addClass('on');
    }, 2700);



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        if(scrollTop >= 250 && scrollTop <= 1300) {
            $('#section01 .play').addClass('on');
            $('#section01 .vid_typo1').addClass('on');
            $('#section01 .vid_typo2').addClass('on');
        }
        else {
            $('#section01 .play').removeClass('on');
            $('#section01 .vid_typo1').removeClass('on');
            $('#section01 .vid_typo2').removeClass('on');
        }

        if(scrollTop >= 1200 && scrollTop <= 4000) {
            $('#section03 .circle_logo').addClass('on');
        }
        else {
            $('#section03 .circle_logo').removeClass('on');
        }

        if(scrollTop >= 1250 && scrollTop <= 4000) {
            $('#section03 .typo1').addClass('on');
            $('#section03 .typo2').addClass('on');
            $('#section03 .typo3').addClass('on');
            $('#section03 .typo4').addClass('on');
            $('#section03 .typo5').addClass('on');
        }
        else {
            $('#section03 .typo1').removeClass('on');
            $('#section03 .typo2').removeClass('on');
            $('#section03 .typo3').removeClass('on');
            $('#section03 .typo4').removeClass('on');
            $('#section03 .typo5').removeClass('on');
        }

        if(scrollTop >= 7300 && scrollTop <= 9000) {
            $('#section03 .section03_3 .logo').addClass('on');
            $('#section03 .section03_3 .title1').addClass('on');
            $('#section03 .section03_3 .title2').addClass('on');
            $('#section03 .section03_3 .title3').addClass('on');
            $('#section03 .section03_3 .title4').addClass('on');
        }
        else {
            $('#section03 .section03_3 .logo').removeClass('on');
            $('#section03 .section03_3 .title1').removeClass('on');
            $('#section03 .section03_3 .title2').removeClass('on');
            $('#section03 .section03_3 .title3').removeClass('on');
            $('#section03 .section03_3 .title4').removeClass('on');
        }

        if(scrollTop >= 18850 && scrollTop <= 99999) {
            $('#section03 .section03_3 .bottom1').addClass('on');
            $('#section03 .section03_3 .bottom2').addClass('on');
            $('#section03 .section03_3 .bottom_1').addClass('on');
            $('#section03 .section03_3 .bottom_2').addClass('on');
            $('#section03 .section03_3 .bottom_3').addClass('on');
        }
        else {
            $('#section03 .section03_3 .bottom1').removeClass('on');
            $('#section03 .section03_3 .bottom2').removeClass('on');
            $('#section03 .section03_3 .bottom_1').removeClass('on');
            $('#section03 .section03_3 .bottom_2').removeClass('on');
            $('#section03 .section03_3 .bottom_3').removeClass('on');
        }

        if(scrollTop >= 19800 && scrollTop <= 99999) {
            $('#section03 .section03_3 .last_typo1').addClass('on');
            $('#section03 .section03_3 .last_typo2').addClass('on');
        }
        else {
            $('#section03 .section03_3 .last_typo1').removeClass('on');
            $('#section03 .section03_3 .last_typo2').removeClass('on');
        }


        if(scrollTop >= 8150 && scrollTop <= 9000) {
            $('#section03 .contents01 .left_con .txt_group .txt1').addClass('on');
            $('#section03 .contents01 .left_con .txt_group .txt2').addClass('on');
            $('#section03 .contents01 .left_con .txt_group .txt3').addClass('on');
        }
        else {
            $('#section03 .contents01 .left_con .txt_group .txt1').removeClass('on');
            $('#section03 .contents01 .left_con .txt_group .txt2').removeClass('on');
            $('#section03 .contents01 .left_con .txt_group .txt3').removeClass('on');
        }

        if(scrollTop >= 9200 && scrollTop <= 9850) {
            $('#section03 .contents02 .left_con .txt_group .txt1').addClass('on');
            $('#section03 .contents02 .left_con .txt_group .txt2').addClass('on');
            $('#section03 .contents02 .left_con .txt_group .txt3').addClass('on');
        }
        else {
            $('#section03 .contents02 .left_con .txt_group .txt1').removeClass('on');
            $('#section03 .contents02 .left_con .txt_group .txt2').removeClass('on');
            $('#section03 .contents02 .left_con .txt_group .txt3').removeClass('on');
        }

        if(scrollTop >= 10100 && scrollTop <= 11900) {
            $('#section03 .contents03 .left_con .txt_group .txt1').addClass('on');
            $('#section03 .contents03 .left_con .txt_group .txt2').addClass('on');
        }
        else {
            $('#section03 .contents03 .left_con .txt_group .txt1').removeClass('on');
            $('#section03 .contents03 .left_con .txt_group .txt2').removeClass('on');
        }

        if(scrollTop >= 12200 && scrollTop <= 13000) {
            $('#section03 .contents04 .left_con .txt_group .txt1').addClass('on');
            $('#section03 .contents04 .left_con .txt_group .txt2').addClass('on');
        }
        else {
            $('#section03 .contents04 .left_con .txt_group .txt1').removeClass('on');
            $('#section03 .contents04 .left_con .txt_group .txt2').removeClass('on');
        }

        if(scrollTop >= 13300 && scrollTop <= 14950) {
            $('#section03 .contents05 .left_con .txt_group .txt1').addClass('on');
            $('#section03 .contents05 .left_con .txt_group .txt2').addClass('on');
            $('#section03 .contents05 .left_con .txt_group .txt3').addClass('on');
        }
        else {
            $('#section03 .contents05 .left_con .txt_group .txt1').removeClass('on');
            $('#section03 .contents05 .left_con .txt_group .txt2').removeClass('on');
            $('#section03 .contents05 .left_con .txt_group .txt3').removeClass('on');
        }

        if(scrollTop >= 15260 && scrollTop <= 16450) {
            $('#section03 .contents06 .left_con .txt_group .txt1').addClass('on');
            $('#section03 .contents06 .left_con .txt_group .txt2').addClass('on');
        }
        else {
            $('#section03 .contents06 .left_con .txt_group .txt1').removeClass('on');
            $('#section03 .contents06 .left_con .txt_group .txt2').removeClass('on');
        }

        if(scrollTop >= 16730 && scrollTop <= 18230) {
            $('#section03 .contents07 .left_con .txt_group .txt1').addClass('on');
            $('#section03 .contents07 .left_con .txt_group .txt2').addClass('on');
        }
        else {
            $('#section03 .contents07 .left_con .txt_group .txt1').removeClass('on');
            $('#section03 .contents07 .left_con .txt_group .txt2').removeClass('on');
        }

    });


    /*================ 마우스 커서 변하는 구동 =============*/
    $('#section03 .last_txt').mouseenter(function () {
        $('#cursor').addClass('on');
    })
    $('#section03 .last_txt').mouseleave(function () {
        $('#cursor').removeClass('on');
    })
    /*=====================================================*/


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

    gsap.to('#section03 .section03_1', {

        opacity:0,
        scale:0.8,
        // zIndex:-1,
        scrollTrigger: {
            trigger: "#section03",
            start: "1000 top",
            end: () => "+=" + 500,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .left_box', {

        opacity:1,
        x:0,
        y:0,
        z:0,
        scrollTrigger: {
            trigger: "#section03",
            start: "1300 top",
            end: () => "+=" + 1300,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .right_box', {

        opacity:1,
        x:0,
        y:0,
        z:0,
        scrollTrigger: {
            trigger: "#section03",
            start: "1300 top",
            end: () => "+=" + 1300,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    // 대지 스크롤 구동
    gsap.to('#section03 .section03_2', {

        y:-13570,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "2600 top",
            // end: () => "+=" + 30000,
            end: 'bottom bottom',
            scrub: true,
        }
    });



    // point01 after 활성화
    gsap.to('#section03 .point01 .after_point1', {

        opacity:1,
        zIndex:999,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "6480 top",
            end: () => "+=" + 50,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .point02 .after_point2', {

        opacity:1,
        zIndex:999,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "7590 top",
            end: () => "+=" + 50,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .point03 .after_point3', {

        opacity:1,
        zIndex:999,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "8460 top",
            end: () => "+=" + 50,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .point04 .after_point4', {

        opacity:1,
        zIndex:999,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "10530 top",
            end: () => "+=" + 50,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .point05 .after_point5', {

        opacity:1,
        zIndex:999,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "11670 top",
            end: () => "+=" + 50,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .point06 .after_point6', {

        opacity:1,
        zIndex:999,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "13610 top",
            end: () => "+=" + 50,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .point07 .after_point7', {

        opacity:1,
        zIndex:999,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "15130 top",
            end: () => "+=" + 50,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    // contents01 활성화
    gsap.to('#section03 .contents01', {

        opacity:1,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "6480 top",
            end: () => "+=" + 50,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .contents02', {

        opacity:1,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "7590 top",
            end: () => "+=" + 50,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .contents03', {

        opacity:1,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "8460 top",
            end: () => "+=" + 50,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .contents04', {

        opacity:1,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "10530 top",
            end: () => "+=" + 50,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .contents05', {

        opacity:1,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "11670 top",
            end: () => "+=" + 50,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .contents06', {

        opacity:1,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "13610 top",
            end: () => "+=" + 50,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .contents07', {

        opacity:1,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "15130 top",
            end: () => "+=" + 50,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    // point01 내리기 (before, after의 각 부모들을 잡고 내려주셔야 합니다!)
    gsap.to('#section03 .point01', {

        y:730,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "6480 top",
            end: () => "+=" + 860,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .point02', {

        y:515,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "7590 top",
            end: () => "+=" + 600,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .point03', {

        y:1522,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "8460 top",
            end: () => "+=" + 1800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .point04', {

        y:739,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "10530 top",
            end: () => "+=" + 870,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .point05', {

        y:1412,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "11670 top",
            end: () => "+=" + 1675,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .point06', {

        y:1063,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "13610 top",
            end: () => "+=" + 1260,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .point07', {

        y:1271,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "15130 top",
            end: () => "+=" + 1500,
            // end: 'bottom bottom',
            scrub: true,
        }
    });



    // contents01 .title_group 내리기
    gsap.to('#section03 .contents01 .txt_group', {
        y:720,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "6480 top",
            end: () => "+=" + 860,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .contents02 .txt_group', {
        y:515,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "7590 top",
            end: () => "+=" + 600,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .contents03 .txt_group', {
        y:1522,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "8460 top",
            end: () => "+=" + 1800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .contents04 .txt_group', {
        y:739,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "10530 top",
            end: () => "+=" + 870,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .contents05 .txt_group', {
        y:1412,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "11670 top",
            end: () => "+=" + 1675,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .contents06 .txt_group', {
        y:1063,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "13610 top",
            end: () => "+=" + 1260,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section03 .contents07 .txt_group', {
        y:1271,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "15130 top",
            end: () => "+=" + 1500,
            // end: 'bottom bottom',
            scrub: true,
        }
    });



    

    // line 그려지는 구동
    gsap.to('#section03 .line .after', {
        height:9297,
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            start: "6745 top",
            end: () => "+=" + 10500,
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


