$("#skillSet-btn").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#skillSet").offset().top + offset
    }, 1000);
});

$("#aboutMe-btn").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#aboutMe").offset().top + offset
    }, 1000);
});

$("#contact-btn").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#contact").offset().top + offset
    }, 1000);
});

$("#need-website-btn").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#contact").offset().top + offset
    }, 1000);
});

$("#hire-btn").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#skillSet").offset().top + offset
    }, 1000);
});

$(".card").hover(function(){
    $(this).css("transform","scale(1.1)");
    $(this).css("box-shadow", "0px 4px 3px rgba(0,0,0,0.5)");
    }, function(){
    $(this).css("transform","initial");
    $(this).css("box-shadow", "none");
});

$(".progress-bar").hover(function(){
    $(this).addClass("progress-bar-animated");
    }, function(){
    $(this).removeClass("progress-bar-animated");
});

$(".underline").hover(function(){
	$(this).css("border-bottom","5px solid #880CE8");
}, function(){
	$(this).css("border-bottom","none");
});
