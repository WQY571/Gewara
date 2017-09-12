function read() {
    $('.owl-carousel').owlCarousel({
        items: 4 ,
        loop: true,
        margin: 1,
        merge: true,

    });

    $("#detailsimg").click(function () {
        window.location.href="hero-coming.html"
    })

    $("#unflod").click(function () {

        var helloDivObj = $("#introduce");
        var buttonObj = $("#unflod");
        var val = buttonObj.attr("value");
        if(val=="展开"){
            helloDivObj.addClass("open");
            buttonObj.attr("value","收起");
        }else{
            helloDivObj.removeClass("open");
            buttonObj.attr("value","展开");
        }
       /* $("#middle1").addClass("open");
       /!* $("#unflod").css("text","收起").addClass("close");*!/*/
    })



}
