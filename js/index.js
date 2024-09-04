window.addEventListener('DOMContentLoaded', function () {

    setTimeout(() => {
        $('#section01 .top_line').addClass('on');
        $('#section01 .mid_line').addClass('on');
        $('#section01 .bottom_line').addClass('on');

        $('#section01 .gage_white').addClass('on');
        $('#section01 .gage_outline').addClass('on');
    }, 300);

    setTimeout(() => {
        $('#section01 .top_typo').addClass('on');
        $('#section01 .mid_typo1').addClass('on');
        $('#section01 .mid_typo2').addClass('on');
        $('#section01 .circle_logo').addClass('on');
        $('#section01 .circle_typo').addClass('on');
    }, 1000);





    // count 구동
    let count = 0;
    const counter = setInterval(()=>{
        count ++;
        $('.count').html(count);

        if(count >= 99){
            clearInterval(counter);
        }
    },70);//개당 초수

    // 타이핑 구동
    const txt01 = gsap.timeline();
    txt01.to('.title1_1', {text : "please wait", duration:1.5})
    txt01.to('.title1_2', {text : "A MOMENT . . .", duration:2})

    const txt02 = gsap.timeline();
    txt02.to('.title2_1', {text : "CONNECTING TO THE PROMOTION", duration:2})
    txt02.to('.title2_2', {text : "SERVER STATUS CLEARS", duration:1.5})
    txt02.to('.title2_3', {text : "LINK STATUS OPTIMAL", duration:1.5})
    txt02.to('.title2_4', {text : "LOADING . . .", duration:1})


    // 페이지 넘어가는 구동
    setTimeout(() => {
        window.location.href = 'main.html';
    }, 9000)







    /* scroll event section */
    container.addListener((e) => {

        // let scrollTop = container.scrollTop;
        // $('.posNum').html(scrollTop)


    });

    /*  slide,click event section */






















})


