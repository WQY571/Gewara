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
}
