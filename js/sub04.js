window.addEventListener('DOMContentLoaded', function () {

    setTimeout(() => {
        $('#section01 .se01_1').addClass('on');
    }, 10);
    setTimeout(() => {
        $('#section01 .bgc_shape').addClass('on');
        $('#section01 .bgc').addClass('on');
    }, 500);
    setTimeout(() => {
        $('#section01 .title1').addClass('on');
        $('#section01 .title2').addClass('on');
        $('#section01 .title3').addClass('on');
        $('#section01 .title4').addClass('on');
        $('#section01 .title5').addClass('on');
        $('#section01 .top_onoff').addClass('on');
    }, 1000);

    setTimeout(() => {
        $('#section01 .gnb_line').addClass('on');
        $('#section01 .gnb1').addClass('on');
    }, 1500);
    setTimeout(() => {
        $('#section01 .gnb2').addClass('on');
    }, 1600);
    setTimeout(() => {
        $('#section01 .gnb3').addClass('on');
    }, 1700);
    setTimeout(() => {
        $('#section01 .gnb4').addClass('on');
    }, 1800);
    setTimeout(() => {
        $('#section01 .gnb5').addClass('on');
    }, 1900);
    setTimeout(() => {
        $('#section01 .light').addClass('on');
        $('#section01 .circle').addClass('on');
    }, 2000);
    setTimeout(() => {
        $('#section01 .arrow').addClass('on');
    }, 2100);



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        if(scrollTop >=5 && scrollTop <= 1200) {
            $('#section01 .left_tp1').addClass('on');
            $('#section01 .left_tp2').addClass('on');
            $('#section01 .left_tp3').addClass('on');
            $('#section01 .left_tp4').addClass('on');
            $('#section01 .left_typo').addClass('on');
            $('#section01 .left_triangle').addClass('on');
        }
        else {
            $('#section01 .left_tp1').removeClass('on');
            $('#section01 .left_tp2').removeClass('on');
            $('#section01 .left_tp3').removeClass('on');
            $('#section01 .left_tp4').removeClass('on');
            $('#section01 .left_typo').removeClass('on');
            $('#section01 .left_triangle').removeClass('on');
        }

        if(scrollTop >=300 && scrollTop <= 1500) {
            $('#section01 .right_tp1').addClass('on');
            $('#section01 .right_tp2').addClass('on');
            $('#section01 .right_tp3').addClass('on');
            $('#section01 .right_tp4').addClass('on');
            $('#section01 .right_typo').addClass('on');
            $('#section01 .right_triangle').addClass('on');
        }
        else {
            $('#section01 .right_tp1').removeClass('on');
            $('#section01 .right_tp2').removeClass('on');
            $('#section01 .right_tp3').removeClass('on');
            $('#section01 .right_tp4').removeClass('on');
            $('#section01 .right_typo').removeClass('on');
            $('#section01 .right_triangle').removeClass('on');
        }

        if(scrollTop >=1510 && scrollTop <= 99999) {
            $('#section02 .tp1').addClass('on');
            $('#section02 .tp2').addClass('on');
            $('#section02 .tp3').addClass('on');
            $('#section02 .tp4').addClass('on');
            $('#section02 .tp_line').addClass('on');

            $('#section02 .se01_tit1').addClass('on');
            $('#section02 .se01_tit2').addClass('on');
            $('#section02 .se01_tit3').addClass('on');
            $('#section02 .se01_circle').addClass('on');
        }
        else {
            $('#section02 .tp1').removeClass('on');
            $('#section02 .tp2').removeClass('on');
            $('#section02 .tp3').removeClass('on');
            $('#section02 .tp4').removeClass('on');
            $('#section02 .tp_line').removeClass('on');

            $('#section02 .se01_tit1').removeClass('on');
            $('#section02 .se01_tit2').removeClass('on');
            $('#section02 .se01_tit3').removeClass('on');
            $('#section02 .se01_circle').removeClass('on');
        }

        if(scrollTop >=5000 && scrollTop <= 14800) {
            $('#section02 .spotlight').addClass('on');
        }else {
            $('#section02 .spotlight').removeClass('on');
        }


        if(scrollTop >=4750 && scrollTop <= 99999) {
            $('#section02 .title_image1').addClass('on');
            $('#section02 .title_image2').addClass('on');
            $('#section02 .title_image3').addClass('on');
        }else {
            $('#section02 .title_image1').removeClass('on');
            $('#section02 .title_image2').removeClass('on');
            $('#section02 .title_image3').removeClass('on');
        }

        if(scrollTop >=5000 && scrollTop <= 99999) {
            $('#section02 .title1').addClass('on');
            $('#section02 .title2').addClass('on');
            $('#section02 .title_green').addClass('on');

            $('#section02 .title_1').addClass('on');
            $('#section02 .title_2').addClass('on');
            $('#section02 .title_3').addClass('on');
        }else {
            $('#section02 .title1').removeClass('on');
            $('#section02 .title2').removeClass('on');
            $('#section02 .title_green').removeClass('on');

            $('#section02 .title_1').removeClass('on');
            $('#section02 .title_2').removeClass('on');
            $('#section02 .title_3').removeClass('on');
        }

        if(scrollTop >=5300 && scrollTop <= 99999) {
            $('#section02 .top_line').addClass('on');
            $('#section02 .logo_light').addClass('on');

            $('#section02 .top_typo1').addClass('on');
            $('#section02 .top_typo2').addClass('on');
            $('#section02 .top_typo3').addClass('on');
            $('#section02 .top_typo4').addClass('on');
        }else {
            $('#section02 .top_line').removeClass('on');
            $('#section02 .logo_light').removeClass('on');

            $('#section02 .top_typo1').removeClass('on');
            $('#section02 .top_typo2').removeClass('on');
            $('#section02 .top_typo3').removeClass('on');
            $('#section02 .top_typo4').removeClass('on');
        }

        if(scrollTop >=5650 && scrollTop <= 99999) {
            $('#section02 .image1').addClass('on');
            $('#section02 .image1_head').addClass('on');

            $('#section02 .image2').addClass('on');
            $('#section02 .image2_head').addClass('on');

            $('#section02 .con1_tit1').addClass('on');
            $('#section02 .con1_tit2').addClass('on');
            $('#section02 .tp1_tit1').addClass('on');
            $('#section02 .tp1_tit2').addClass('on');
            $('#section02 .tp1_tit3').addClass('on');
            $('#section02 .tp1_tit4').addClass('on');
            $('#section02 .tp1_line').addClass('on');

            $('#section02 .tp1_tp1').addClass('on');
            $('#section02 .tp1_tp2').addClass('on');
            $('#section02 .tp1_tp3').addClass('on');

            $('#section02 .tp1_button1').addClass('on');
            $('#section02 .tp1_button2').addClass('on');

            $('#section02 .tp2_tit1').addClass('on');
            $('#section02 .tp2_tp1').addClass('on');
            $('#section02 .tp2_tp2').addClass('on');
            $('#section02 .tp2_tp3').addClass('on');
        }
        else {
            $('#section02 .image1').removeClass('on');
            $('#section02 .image1_head').removeClass('on');

            $('#section02 .image2').removeClass('on');
            $('#section02 .image2_head').removeClass('on');

            $('#section02 .con1_tit1').removeClass('on');
            $('#section02 .con1_tit2').removeClass('on');
            $('#section02 .tp1_tit1').removeClass('on');
            $('#section02 .tp1_tit2').removeClass('on');
            $('#section02 .tp1_tit3').removeClass('on');
            $('#section02 .tp1_tit4').removeClass('on');
            $('#section02 .tp1_line').removeClass('on');

            $('#section02 .tp1_tp1').removeClass('on');
            $('#section02 .tp1_tp2').removeClass('on');
            $('#section02 .tp1_tp3').removeClass('on');

            $('#section02 .tp1_button1').removeClass('on');
            $('#section02 .tp1_button2').removeClass('on');

            $('#section02 .tp2_tit1').removeClass('on');
            $('#section02 .tp2_tp1').removeClass('on');
            $('#section02 .tp2_tp2').removeClass('on');
            $('#section02 .tp2_tp3').removeClass('on');
        }



        if(scrollTop >=6100 && scrollTop <= 99999) {
            $('#section02 .image3').addClass('on');

            $('#section02 .tp3_tit1').addClass('on');
            $('#section02 .tp3_tit2').addClass('on');
            $('#section02 .tp3_tit3').addClass('on');
            $('#section02 .tp3_tit4').addClass('on');

            $('#section02 .tp3_line').addClass('on');

            $('#section02 .tp3_tp1').addClass('on');
            $('#section02 .tp3_tp2').addClass('on');
            $('#section02 .tp3_tp3').addClass('on');
            $('#section02 .tp3_tp4').addClass('on');
            $('#section02 .tp3_button1').addClass('on');
            $('#section02 .tp3_button2').addClass('on');
        }
        else {
            $('#section02 .image3').removeClass('on');

            $('#section02 .tp3_tit1').removeClass('on');
            $('#section02 .tp3_tit2').removeClass('on');
            $('#section02 .tp3_tit3').removeClass('on');
            $('#section02 .tp3_tit4').removeClass('on');

            $('#section02 .tp3_line').removeClass('on');

            $('#section02 .tp3_tp1').removeClass('on');
            $('#section02 .tp3_tp2').removeClass('on');
            $('#section02 .tp3_tp3').removeClass('on');
            $('#section02 .tp3_tp4').removeClass('on');
            $('#section02 .tp3_button1').removeClass('on');
            $('#section02 .tp3_button2').removeClass('on');
        }


        if(scrollTop >=6500 && scrollTop <= 99999) {
            $('#section02 .image4').addClass('on');
            $('#section02 .tp4_tit1').addClass('on');
            $('#section02 .tp4_tp1').addClass('on');
            $('#section02 .tp4_tp2').addClass('on');
            $('#section02 .tp4_tp3').addClass('on');
            $('#section02 .tp4_tp4').addClass('on');
        }
        else {
            $('#section02 .image4').removeClass('on');
            $('#section02 .tp4_tit1').removeClass('on');
            $('#section02 .tp4_tp1').removeClass('on');
            $('#section02 .tp4_tp2').removeClass('on');
            $('#section02 .tp4_tp3').removeClass('on');
            $('#section02 .tp4_tp4').removeClass('on');
        }


        if(scrollTop >=6900 && scrollTop <= 99999) {
            $('#section02 .video_image').addClass('on');
        }else {
            $('#section02 .video_image').removeClass('on');
        }

        if(scrollTop >=7100 && scrollTop <= 99999) {
            $('#section02 .video_play').addClass('on');
            $('#section02 .video_tp1').addClass('on');
            $('#section02 .video_tp2').addClass('on');
        }else {
            $('#section02 .video_play').removeClass('on');
            $('#section02 .video_tp1').removeClass('on');
            $('#section02 .video_tp2').removeClass('on');
        }


        if(scrollTop >=7800 && scrollTop <= 99999) {
            $('#section02 .con2_tp1_image').addClass('on');
            $('#section02 .con2_tp2_image').addClass('on');
            $('#section02 .con2_tp1_tit1').addClass('on');
            $('#section02 .con2_tp1_tit2').addClass('on');
            $('#section02 .con2_tp1_tit3').addClass('on');
            $('#section02 .con2_tp1_line').addClass('on');
            $('#section02 .con2_tp1_tp1').addClass('on');
            $('#section02 .con2_tp1_tp2').addClass('on');
            $('#section02 .con2_tp2_tit1').addClass('on');
            $('#section02 .con2_tp2_tit2').addClass('on');
            $('#section02 .con2_tp2_tit3').addClass('on');
            $('#section02 .con2_tp2_line').addClass('on');
            $('#section02 .con2_tp2_tp1').addClass('on');
            $('#section02 .con2_tp2_tp2').addClass('on');

            $('#section02 .con2_tp2_adtit1').addClass('on');
            $('#section02 .con2_tp2_adtit2').addClass('on');

            $('#section02 .con2_tp2_adtp1').addClass('on');
            $('#section02 .con2_tp2_adtp2').addClass('on');
            $('#section02 .con2_tp2_adtp3').addClass('on');
            $('#section02 .con2_tp2_adtp4').addClass('on');
            $('#section02 .con2_tp2_adtp5').addClass('on');
            $('#section02 .con2_tp2_adtp6').addClass('on');
            $('#section02 .con2_tp2_adtp7').addClass('on');

            $('#section02 .con2_tp2_adbt1').addClass('on');
            $('#section02 .con2_tp2_adbt2').addClass('on');
        }
        else {
            $('#section02 .con2_tp1_image').removeClass('on');
            $('#section02 .con2_tp2_image').removeClass('on');
            $('#section02 .con2_tp1_tit1').removeClass('on');
            $('#section02 .con2_tp1_tit2').removeClass('on');
            $('#section02 .con2_tp1_tit3').removeClass('on');
            $('#section02 .con2_tp1_line').removeClass('on');
            $('#section02 .con2_tp1_tp1').removeClass('on');
            $('#section02 .con2_tp1_tp2').removeClass('on');
            $('#section02 .con2_tp2_tit1').removeClass('on');
            $('#section02 .con2_tp2_tit2').removeClass('on');
            $('#section02 .con2_tp2_tit3').removeClass('on');
            $('#section02 .con2_tp2_line').removeClass('on');
            $('#section02 .con2_tp2_tp1').removeClass('on');
            $('#section02 .con2_tp2_tp2').removeClass('on');

            $('#section02 .con2_tp2_adtit1').removeClass('on');
            $('#section02 .con2_tp2_adtit2').removeClass('on');

            $('#section02 .con2_tp2_adtp1').removeClass('on');
            $('#section02 .con2_tp2_adtp2').removeClass('on');
            $('#section02 .con2_tp2_adtp3').removeClass('on');
            $('#section02 .con2_tp2_adtp4').removeClass('on');
            $('#section02 .con2_tp2_adtp5').removeClass('on');
            $('#section02 .con2_tp2_adtp6').removeClass('on');
            $('#section02 .con2_tp2_adtp7').removeClass('on');

            $('#section02 .con2_tp2_adbt1').removeClass('on');
            $('#section02 .con2_tp2_adbt2').removeClass('on');
        }

        if(scrollTop >=8550 && scrollTop <= 99999) {
            $('#section02 .con2_tp3_image').addClass('on');
            $('#section02 .con2_tp3_tit1').addClass('on');
            $('#section02 .con2_tp3_tit2').addClass('on');
            $('#section02 .con2_tp3_tit3').addClass('on');
            $('#section02 .con2_tp3_line').addClass('on');
            $('#section02 .con2_tp3_tp1').addClass('on');
        }else {
            $('#section02 .con2_tp3_image').removeClass('on');
            $('#section02 .con2_tp3_tit1').removeClass('on');
            $('#section02 .con2_tp3_tit2').removeClass('on');
            $('#section02 .con2_tp3_tit3').removeClass('on');
            $('#section02 .con2_tp3_line').removeClass('on');
            $('#section02 .con2_tp3_tp1').removeClass('on');
        }

        if(scrollTop >=8700 && scrollTop <= 99999) {
            $('#section02 .con2_tp4_image').addClass('on');
            $('#section02 .con2_tp4_tit1').addClass('on');
            $('#section02 .con2_tp4_tit2').addClass('on');
            $('#section02 .con2_tp4_tit3').addClass('on');
            $('#section02 .con2_tp4_line').addClass('on');
            $('#section02 .con2_tp4_tp1').addClass('on');
            $('#section02 .con2_tp4_tp2').addClass('on');

            $('#section02 .con2_tp5_adtit1').addClass('on');
            $('#section02 .con2_tp5_adtit2').addClass('on');

            $('#section02 .con2_tp5_adtp1').addClass('on');
            $('#section02 .con2_tp5_adtp2').addClass('on');
            $('#section02 .con2_tp5_adtp3').addClass('on');
            $('#section02 .con2_tp5_adtp4').addClass('on');
            $('#section02 .con2_tp5_adtp5').addClass('on');
            $('#section02 .con2_tp5_adtp6').addClass('on');
            $('#section02 .con2_tp5_adtp7').addClass('on');
            $('#section02 .con2_tp5_adtp8').addClass('on');

            $('#section02 .con2_tp5_adbt1').addClass('on');
            $('#section02 .con2_tp5_adbt2').addClass('on');
        }else {
            $('#section02 .con2_tp4_image').removeClass('on');
            $('#section02 .con2_tp4_tit1').removeClass('on');
            $('#section02 .con2_tp4_tit2').removeClass('on');
            $('#section02 .con2_tp4_tit3').removeClass('on');
            $('#section02 .con2_tp4_line').removeClass('on');
            $('#section02 .con2_tp4_tp1').removeClass('on');
            $('#section02 .con2_tp4_tp2').removeClass('on');

            $('#section02 .con2_tp5_adtit1').removeClass('on');
            $('#section02 .con2_tp5_adtit2').removeClass('on');

            $('#section02 .con2_tp5_adtp1').removeClass('on');
            $('#section02 .con2_tp5_adtp2').removeClass('on');
            $('#section02 .con2_tp5_adtp3').removeClass('on');
            $('#section02 .con2_tp5_adtp4').removeClass('on');
            $('#section02 .con2_tp5_adtp5').removeClass('on');
            $('#section02 .con2_tp5_adtp6').removeClass('on');
            $('#section02 .con2_tp5_adtp7').removeClass('on');
            $('#section02 .con2_tp5_adtp8').removeClass('on');

            $('#section02 .con2_tp5_adbt1').removeClass('on');
            $('#section02 .con2_tp5_adbt2').removeClass('on');
        }

        if(scrollTop >=9100 && scrollTop <= 99999) {
            $('#section02 .con2_tp5_image').addClass('on');
            $('#section02 .con2_tp5_tit1').addClass('on');
            $('#section02 .con2_tp5_tit2').addClass('on');
            $('#section02 .con2_tp5_tit3').addClass('on');
            $('#section02 .con2_tp5_line').addClass('on');
            $('#section02 .con2_tp5_tp1').addClass('on');
            $('#section02 .con2_tp5_tp2').addClass('on');
        }else {
            $('#section02 .con2_tp5_image').removeClass('on');
            $('#section02 .con2_tp5_tit1').removeClass('on');
            $('#section02 .con2_tp5_tit2').removeClass('on');
            $('#section02 .con2_tp5_tit3').removeClass('on');
            $('#section02 .con2_tp5_line').removeClass('on');
            $('#section02 .con2_tp5_tp1').removeClass('on');
            $('#section02 .con2_tp5_tp2').removeClass('on');
        }

        if(scrollTop >=9600 && scrollTop <= 99999) {
            $('#section02 .con2_tp6_image').addClass('on');
            $('#section02 .con2_tp6_tit1').addClass('on');
            $('#section02 .con2_tp6_tit2').addClass('on');
            $('#section02 .con2_tp6_tit3').addClass('on');
            $('#section02 .con2_tp6_line').addClass('on');
            $('#section02 .con2_tp6_tp1').addClass('on');
            $('#section02 .con2_tp6_tp2').addClass('on');
        }else {
            $('#section02 .con2_tp6_image').removeClass('on');
            $('#section02 .con2_tp6_tit1').removeClass('on');
            $('#section02 .con2_tp6_tit2').removeClass('on');
            $('#section02 .con2_tp6_tit3').removeClass('on');
            $('#section02 .con2_tp6_line').removeClass('on');
            $('#section02 .con2_tp6_tp1').removeClass('on');
            $('#section02 .con2_tp6_tp2').removeClass('on');
        }

        if(scrollTop >=10250 && scrollTop <= 99999) {
            $('#section02 .con3_tit1').addClass('on');
            $('#section02 .con3_tit2').addClass('on');
            $('#section02 .con3_tit3').addClass('on');
            $('#section02 .con3_tit4').addClass('on');
            $('#section02 .con3_circle').addClass('on');
            
            $('#section02 .con3_tp1').addClass('on');
            $('#section02 .con3_tp2').addClass('on');
            $('#section02 .con3_tp3').addClass('on');
            $('#section02 .con3_tp4').addClass('on');
            $('#section02 .con3_tp5').addClass('on');
            $('#section02 .con3_line').addClass('on');
        }else {
            $('#section02 .con3_tit1').removeClass('on');
            $('#section02 .con3_tit2').removeClass('on');
            $('#section02 .con3_tit3').removeClass('on');
            $('#section02 .con3_tit4').removeClass('on');
            $('#section02 .con3_circle').removeClass('on');
            
            $('#section02 .con3_tp1').removeClass('on');
            $('#section02 .con3_tp2').removeClass('on');
            $('#section02 .con3_tp3').removeClass('on');
            $('#section02 .con3_tp4').removeClass('on');
            $('#section02 .con3_tp5').removeClass('on');
            $('#section02 .con3_line').removeClass('on');
        }

        if(scrollTop >=11000 && scrollTop <= 99999) {
            $('#section02 .con4_line').addClass('on');

            $('#section02 .con4_ct1_1').addClass('on');
            $('#section02 .con4_ct1_2').addClass('on');
            $('#section02 .con4_ct1_3').addClass('on');
            $('#section02 .con4_ct1_4').addClass('on');
            $('#section02 .con4_ct1_5').addClass('on');

            $('#section02 .con4_ct2_1').addClass('on');
            $('#section02 .con4_ct2_2').addClass('on');
            $('#section02 .con4_ct2_3').addClass('on');
            $('#section02 .con4_ct2_4').addClass('on');
            $('#section02 .con4_ct2_5').addClass('on');
            
            $('#section02 .con4_ct3_1').addClass('on');
            $('#section02 .con4_ct3_2').addClass('on');
            $('#section02 .con4_ct3_3').addClass('on');
            $('#section02 .con4_ct3_4').addClass('on');
            $('#section02 .con4_ct3_5').addClass('on');

            $('#section02 .con4_cir_logo').addClass('on');
            $('#section02 .con4_cir_typo').addClass('on');
        }
        else {
            $('#section02 .con4_line').removeClass('on');

            $('#section02 .con4_ct1_1').removeClass('on');
            $('#section02 .con4_ct1_2').removeClass('on');
            $('#section02 .con4_ct1_3').removeClass('on');
            $('#section02 .con4_ct1_4').removeClass('on');
            $('#section02 .con4_ct1_5').removeClass('on');

            $('#section02 .con4_ct2_1').removeClass('on');
            $('#section02 .con4_ct2_2').removeClass('on');
            $('#section02 .con4_ct2_3').removeClass('on');
            $('#section02 .con4_ct2_4').removeClass('on');
            $('#section02 .con4_ct2_5').removeClass('on');
            
            $('#section02 .con4_ct3_1').removeClass('on');
            $('#section02 .con4_ct3_2').removeClass('on');
            $('#section02 .con4_ct3_3').removeClass('on');
            $('#section02 .con4_ct3_4').removeClass('on');
            $('#section02 .con4_ct3_5').removeClass('on');

            $('#section02 .con4_cir_logo').removeClass('on');
            $('#section02 .con4_cir_typo').removeClass('on');
        }

        if(scrollTop >=12500 && scrollTop <= 99999) {
            $('#section02 .con5_image1').addClass('on');
            $('#section02 .con5_image2').addClass('on');
            $('#section02 .con5_image3').addClass('on');
            $('#section02 .con5_line').addClass('on');
        }else {
            $('#section02 .con5_image1').removeClass('on');
            $('#section02 .con5_image2').removeClass('on');
            $('#section02 .con5_image3').removeClass('on');
            $('#section02 .con5_line').removeClass('on');
        }

        // if(scrollTop >=12600 && scrollTop <= 99999) {
        //     $('#section02 .con5_typo').addClass('on');
        // }else {
        //     $('#section02 .con5_typo').removeClass('on');
        // }




        
        










    });



    /*  slide,click event section */

    

    // gsap.to('#section01 .bgc_line > img ', {
        
    //     scale:7,
    //     scrollTrigger: {
    //         trigger: "#section01",
    //         start: "top top",
    //         end: () => "+=" + 300,
    //         end: 'bottom bottom',
    //         scrub: true,
    //     }
    // });


    gsap.to('#section02 .fix-this-02', {

        scrollTrigger: {
            trigger: "#section02 .trigger-this-02",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });


    // 스포트라이트 시작
    let spotlight = document.querySelector('.spotlight');

    let spotlightSize = 'transparent 60px, rgba(0 0 0 / 50%) 500px)';

    window.addEventListener('mousemove', function (e) {
        return updateSpotlight(e);
    });

    window.addEventListener('mousedown', function (e) {

        spotlightSize = 'transparent 60px, rgba(0 0 0 / 50%) 500px)';

        updateSpotlight(e);

    });


    function updateSpotlight(e) {

        spotlight.style.backgroundImage =
            'radial-gradient(circle at ' + e.pageX / window.innerWidth * 100 + '% ' + e.pageY / window.innerHeight * 100 + '%, ' + spotlightSize;

    }
    // 스포트라이트 끝

    /*=============== 박스 사이드로 움직이는 구동===============*/
    gsap.to('#section02  .box1', {
        
        x:680,
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section02  .box2', {
        
        x:227,
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section02  .box3', {
        
        x:-226,
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section02  .box4', {
        
        x:-679,
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    /*=============== 박스 타이포 사라지는 구동===============*/
    gsap.to('#section02 .box_typo1', {
        
        opacity:0,
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: () => "+=" + 400,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section02 .box_typo2', {
        
        opacity:0,
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: () => "+=" + 400,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section02 .box_typo3', {
        
        opacity:0,
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: () => "+=" + 400,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section02 .box_typo4', {
        
        opacity:0,
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: () => "+=" + 400,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    /*=============== 이미지 돌아가는 구동===============*/


    const tl = gsap.timeline();

    tl.to("#section02 .box1 .box_image1", {rotate:180})
    // tl.to("#section02 .box1 .box_image1", {delay:0.2, rotate: 360, scale:9.2})
    tl.to("#section02 .box1 .box_image1", {delay:0.2, rotate: 360, scale:9.2})

    ScrollTrigger.create({
        animation: tl,
        trigger: "#section02",
        start: "top top",
        end: "+=2400",
        scrub: true,
    })

    gsap.to('#section02  .box2 .box_image2', {
        
        rotate:150,
        opacity:0.8,
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: () => "+=" + 1200,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section02  .box3 .box_image3', {
        
        rotate:-150,
        opacity:0.5,
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: () => "+=" + 1200,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    gsap.to('#section02  .box4 .box_image4', {
        
        rotate:-200,
        opacity:0.2,
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: () => "+=" + 1200,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section02 .dark_back', {
        
        opacity:1,
        scrollTrigger: {
            trigger: "#section02",
            start: "1200 top",
            // end: () => "+=" + 12000,
            end: () => "+=" + 3000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    // gsap.to('#section02 .dark_back', {
        
    //     opacity:1,
    //     scrollTrigger: {
    //         trigger: "#section02",
    //         start: "3200 top",
    //         // end: () => "+=" + 12000,
    //         end: () => "+=" + 3000,
    //         // end: 'bottom bottom',
    //         scrub: true,
    //     }
    // });

    /*=============== 보드 위로 올라오는 구동===============*/
    gsap.to('#section02 .se02_inner', {
        
        y:-6000,
        scrollTrigger: {
            trigger: "#section02",
            start: "200 top",
            end: () => "+=" + 12000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    /*================ 마우스 커서 변하는 구동 =============*/
    $('#section04').mouseenter(function () {
        $('#cursor').addClass('on');
    })
    $('#section04').mouseleave(function () {
        $('#cursor').removeClass('on');
    })
    /*=====================================================*/

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


