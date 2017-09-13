function read() {
    $('.owl-carousel').owlCarousel({
        items: 4 ,
        loop: true,
        margin: 1,
        merge: true,

    });

    $("#detailsimg").click(function () {
        window.location.href="finalwar.html"
    });

    $("#unflod").click(function () {

        var helloDivObj = $("#introduce");
        var buttonObj = $("#unflod");
        var val = buttonObj.attr("value");
        if(val=="展开"){
            helloDivObj.removeClass("open");
            buttonObj.attr("value","收起");
        }else{
            helloDivObj.addClass("open");
            buttonObj.attr("value","展开");
        }
        /* $("#middle1").addClass("open");
         /!* $("#unflod").css("text","收起").addClass("close");*!/*/
    });

    $("#landw").click(function () {
        window.location.href="personal.html"
    });
    $("#buy").click(function () {
        window.location.href="cinema.html"
    })

}