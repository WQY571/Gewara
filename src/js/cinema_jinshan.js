/**
 * Author Administrator.
 * des
 * Date 2017/9/8.
 * Time 16:10.
 */
$(document).ready(function(){
    $("#navbuttom").click(function(){
        $("#navbar-collapse").toggle();
    });
    $('.owl-carousel').owlCarousel({
        items: 4 ,
        loop: true,
        margin: 1,
        merge: true,
        responsive: {
            678: {
                mergeFit: true
            },
            1000: {
                mergeFit: false
            }
        }
    });
});
