/**
 * Author 肖敏.
 * des
 * Date 2017/9/12.
 * Time 22:13.
 */
$(document).ready(function(){
    //点击头部，显示与隐藏首页与个人中心
    $("#navbuttom").click(function(){
        $("#navbar-collapse").toggle();
    });

    $('.nonloop').owlCarousel({
        items: 1.3,
        loop: false,
        margin: 0,
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
    $("#footer").click(function () {
        $("#footer").text("加载中....")
    })
});

