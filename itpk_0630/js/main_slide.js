/*슬라이드 이미지, 슬라이드컨트롤러*/
$(function () {
    var i = 0;

    $("#controlWrap .cbox").mouseenter(function () {
        i = $(this).index();
    });

    function slide() {
        i++;
        if (i > $(".slide li:last").index()) {
            i = 0;
        }
        $(".slide li").eq(i).stop().fadeIn("slow");
        $(".slide li").eq(i - 1).stop().fadeOut();

        if (i == 1) {
            $("#sliderWrap").css({ "background": "#f7cd10" });
            $("#controlWrap .cbox").eq(i - 1).css({ "color": "black", "border-top": "none" });
            $("#controlWrap .cbox").eq(i).css({ "border-top": "3px solid red" });
            $("#controlWrap .cbox").eq(i).siblings().css({ "border-top": "1px solid black" });
        } else if (i == 2) {
            $("#sliderWrap").css({ "background": "#e0d1fc" });
            $("#controlWrap .cbox").eq(i - 1).css({ "color": "black", "border-top": "none" });
            $("#controlWrap .cbox").eq(i).css({ "border-top": "3px solid red" });
            $("#controlWrap .cbox").eq(i).siblings().css({ "border-top": "1px solid black" });
        } else if (i == 3) {
            $("#sliderWrap").css({ "background": "#fff7d2" });
            $("#controlWrap .cbox").eq(i - 1).css({ "color": "black", "border-top": "none" });
            $("#controlWrap .cbox").eq(i).css({ "border-top": "3px solid red" });
            $("#controlWrap .cbox").eq(i).siblings().css({ "border-top": "1px solid black" });
        } else {
            $("#sliderWrap").css({ "background": "#f5ebd9" });
            $("#controlWrap .cbox").eq(i - 1).css({ "color": "black", "border-top": "none" });
            $("#controlWrap .cbox").eq(i).css({ "border-top": "3px solid red" });
            $("#controlWrap .cbox").eq(i).siblings().css({ "border-top": "1px solid black" });
        }
    }

    $("#controlWrap .cbox").eq(0).mouseenter(function () {
        $("#sliderWrap").css({ "background": "#f5ebd9" });
        $("#controlWrap .cbox").css({ "border-top": "none" });
        $(this).css({ "border-top": "3px solid red" });
        $(this).siblings().css({ "border-top": "1px solid black" });
        $(".slide li").stop().fadeOut();
        $(".slide li").eq(0).stop().fadeIn("slow");
    });
    $("#controlWrap .cbox").eq(1).mouseenter(function () {
        $("#sliderWrap").css({ "background": "#f7cd10" });
        $("#controlWrap .cbox").css({ "border-top": "none" });
        $(this).css({ "border-top": "3px solid red" });
        $(this).siblings().css({ "border-top": "1px solid black" });
        $(".slide li").stop().fadeOut();
        $(".slide li").eq(1).stop().fadeIn("slow");
    });
    $("#controlWrap .cbox").eq(2).mouseenter(function () {
        $("#sliderWrap").css({ "background": "#e0d1fc" });
        $("#controlWrap .cbox").css({ "border-top": "none" });
        $(this).css({ "border-top": "3px solid red" });
        $(this).siblings().css({ "border-top": "1px solid black" });
        $(".slide li").stop().fadeOut();
        $(".slide li").eq(2).stop().fadeIn("slow");
    });
    $("#controlWrap .cbox").eq(3).mouseenter(function () {
        $("#sliderWrap").css({ "background": "#fff7d2" });
        $("#controlWrap .cbox").css({ "border-top": "none" });
        $(this).css({ "border-top": "3px solid red" });
        $(this).siblings().css({ "border-top": "1px solid black" });
        $(".slide li").stop().fadeOut();
        $(".slide li").eq(3).stop().fadeIn("slow");
    });


    function next() {
        i++;
        if (i > $(".slide li:last").index()) {
            i = 0;
        }
        $(".slide li").eq(i).stop().fadeIn("slow");
        $(".slide li").eq(i - 1).stop().fadeOut();

        if (i == 1) {
            $("#sliderWrap").css({ "background": "#f7cd10" });
            $("#controlWrap .cbox").eq(i - 1).css({ "color": "black", "border-top": "none" });
            $("#controlWrap .cbox").eq(i).css({ "border-top": "3px solid red" });
            $("#controlWrap .cbox").eq(i).siblings().css({ "border-top": "1px solid black" });
        } else if (i == 2) {
            $("#sliderWrap").css({ "background": "#e0d1fc" });
            $("#controlWrap .cbox").eq(i - 1).css({ "color": "black", "border-top": "none" });
            $("#controlWrap .cbox").eq(i).css({ "border-top": "3px solid red" });
            $("#controlWrap .cbox").eq(i).siblings().css({ "border-top": "1px solid black" });
        } else if (i == 3) {
            $("#sliderWrap").css({ "background": "#fff7d2" });
            $("#controlWrap .cbox").eq(i - 1).css({ "color": "black", "border-top": "none" });
            $("#controlWrap .cbox").eq(i).css({ "border-top": "3px solid red" });
            $("#controlWrap .cbox").eq(i).siblings().css({ "border-top": "1px solid black" });
        } else {
            $("#sliderWrap").css({ "background": "#f5ebd9" });
            $("#controlWrap .cbox").eq(i - 1).css({ "color": "black", "border-top": "none" });
            $("#controlWrap .cbox").eq(i).css({ "border-top": "3px solid red" });
            $("#controlWrap .cbox").eq(i).siblings().css({ "border-top": "1px solid black" });
        }
    }

    function prev() {
        i--;
        if (i > $(".slide li:last").index() || i < -3) {
            i = 0;
        }
        $(".slide li").eq(i).stop().fadeIn("slow");
        $(".slide li").eq(i + 1).stop().fadeOut();

        if (i == 1 || i == -3) {
            $("#sliderWrap").css({ "background": "#f7cd10" });
            $("#controlWrap .cbox").eq(i + 1).css({ "color": "black", "border-top": "none" });
            $("#controlWrap .cbox").eq(i).css({ "border-top": "3px solid red" });
            $("#controlWrap .cbox").eq(i).siblings().css({ "border-top": "1px solid black" });
        } else if (i == 2 || i == -2) {
            $("#sliderWrap").css({ "background": "#e0d1fc" });
            $("#controlWrap .cbox").eq(i + 1).css({ "color": "black", "border-top": "none" });
            $("#controlWrap .cbox").eq(i).css({ "border-top": "3px solid red" });
            $("#controlWrap .cbox").eq(i).siblings().css({ "border-top": "1px solid black" });
        } else if (i == 3 || i == -1) {
            $("#sliderWrap").css({ "background": "#fff7d2" });
            $("#controlWrap .cbox").eq(i + 1).css({ "color": "black", "border-top": "none" });
            $("#controlWrap .cbox").eq(i).css({ "border-top": "3px solid red" });
            $("#controlWrap .cbox").eq(i).siblings().css({ "border-top": "1px solid black" });
        } else {
            $("#sliderWrap").css({ "background": "#f5ebd9" });
            $("#controlWrap .cbox").eq(i + 1).css({ "color": "black", "border-top": "none" });
            $("#controlWrap .cbox").eq(i).css({ "border-top": "3px solid red" });
            $("#controlWrap .cbox").eq(i).siblings().css({ "border-top": "1px solid black" });
        }
    }

    $("#sliderWrap .next").click(function () {
        next();
    });

    $("#sliderWrap .prev").click(function () {
        prev();
    });

    var ani = setInterval(slide, 5000);

    $("#controlWrap .cbox").mouseover(function () {
        clearInterval(ani);
    });

    $("#controlWrap .cbox").mouseout(function () {
        $(this).css({ "border-top": "3px solid red" });
        ani = setInterval(slide, 5000);
    });

    /*랭킹박스*/
    $(".ranmenu li").eq(0).click(function () {
        $(".ranWrap3").show();
        $(".ranWrap4").hide();
        $(this).css({ "border": "1px solid rgba(255,255,255,0.3)", "border-bottom": "none" });
        $(".ranmenu li").eq(1).css({ "border": "none", "border-bottom": "1px solid rgba(255,255,255,0.3)" });
    });

    $(".ranmenu li").eq(1).click(function () {
        $(".ranWrap4").show();
        $(".ranWrap3").hide();
        $(this).css({ "border": "1px solid rgba(255,255,255,0.3)", "border-bottom": "none" });
        $(".ranmenu li").eq(0).css({ "border": "none", "border-bottom": "1px solid rgba(255,255,255,0.3)" });
    });
});