var lastScrollTop = 0;

$(window).scroll(function(){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        // Downscroll code.
        console.log("Scrolled Down.");
        $(".navbar").addClass("scrolled");
        $(".title").addClass("scrolled");
        $(".night").addClass("scrolled");
        $(".darkbt").addClass("scrolled");
        $(".menu").addClass("scrolled");
        $(".menubt").addClass("scrolled");
        $(".scroll-downs").addClass("scrolled");
    } else {
        // Upscroll code
        console.log("Scrolled Up.");
        $(".navbar").removeClass("scrolled");
        $(".title").removeClass("scrolled");
        $(".night").removeClass("scrolled");
        $(".darkbt").removeClass("scrolled");
        $(".menu").removeClass("scrolled");
        $(".menubt").removeClass("scrolled");
        $(".scroll-downs").removeClass("scrolled");
    }
    lastScrollTop = st;
});

$("#boxHistoryJS").click(function(){
    $("#historyJS").removeClass("notshowing");
    $("#whatIsUsedJS").addClass("notshowing");
    $("#caratJS").addClass("notshowing");
    $("#proConJS").addClass("notshowing");
});

$("#closeHistoryJS").click(function(){
    $("#historyJS").addClass("notshowing");
});

$("#boxWhatIsUsedJS").click(function(){
    $("#whatIsUsedJS").removeClass("notshowing");
    $("#historyJS").addClass("notshowing");
    $("#caratJS").addClass("notshowing");
    $("#proConJS").addClass("notshowing");
});

$("#closeWhatIsUsedJS").click(function(){
    $("#whatIsUsedJS").addClass("notshowing");
});

$("#boxCaratJS").click(function(){
    $("#caratJS").removeClass("notshowing");
    $("#whatIsUsedJS").addClass("notshowing");
    $("#historyJS").addClass("notshowing");
    $("#proConJS").addClass("notshowing");
});

$("#closeCaratJS").click(function(){
    $("#caratJS").addClass("notshowing");
});

$("#boxProConJS").click(function(){
    $("#proConJS").removeClass("notshowing");
    $("#whatIsUsedJS").addClass("notshowing");
    $("#historyJS").addClass("notshowing");
    $("#caratJS").addClass("notshowing");
});

$("#closeProConJS").click(function(){
    $("#proConJS").addClass("notshowing");
});