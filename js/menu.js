window.addEventListener('DOMContentLoaded', function () {

    setTimeout(() => {

        $('#section01 .img_group').addClass('on');
        $('#section01 .background').addClass('on');

        const tl = gsap.timeline({repeat:-1});

        tl.to("#section01 .image1", {opacity:1, duration:2.5},'-=0.5')
        tl.to("#section01 .image1", {opacity:0})
        tl.to("#section01 .image2", {opacity:1, duration:2.5},'-=0.5')        
        tl.to("#section01 .image2", {opacity:0})        
        tl.to("#section01 .image3", {opacity:1, duration:2.5},'-=0.5')        
        tl.to("#section01 .image3", {opacity:0})     
        tl.to("#section01 .image4", {opacity:1, duration:2.5},'-=0.5')        
        tl.to("#section01 .image4", {opacity:0})     
        tl.to("#section01 .image5", {opacity:1, duration:2.5},'-=0.5')        
        tl.to("#section01 .image5", {opacity:0})     
        tl.to("#section01 .image6", {opacity:1, duration:2.5},'-=0.5')        
        tl.to("#section01 .image6", {opacity:0})     

    }, 1);

    setTimeout(() => {
        $('#section01 .menu1').addClass('on');
    }, 600);
    setTimeout(() => {
        $('#section01 .menu2').addClass('on');
    }, 680);
    setTimeout(() => {
        $('#section01 .menu3').addClass('on');
    }, 760);
    setTimeout(() => {
        $('#section01 .menu4').addClass('on');
    }, 840);
    setTimeout(() => {
        $('#section01 .menu5').addClass('on');
    }, 920);


    setTimeout(() => {
        $('#section01 .top_line').addClass('on');
        $('#section01 .bottom_line').addClass('on');
    }, 600);
    setTimeout(() => {
        $('#section01 .top_typo').addClass('on');
        $('#section01 .bottom_typo').addClass('on');
    }, 800);

    setTimeout(() => {
        $('#section01 .light').addClass('on');
        $('#section01 .circle').addClass('on');
        $('#section01 .return2').addClass('on');
    }, 800);
    setTimeout(() => {
        $('#section01 .arrow').addClass('on');
    }, 900);




    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)





    });



    /*  slide,click event section */













})


