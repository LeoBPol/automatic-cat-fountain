window.onload = function () {
    var left = $('#logo').offset().left;
    $("#logo").css({
        left: left
    }).animate({
        left: '1%'
    }, "slow");
}