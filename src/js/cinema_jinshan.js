/**
 * Author Administrator.
 * des
 * Date 2017/9/8.
 * Time 16:10.
 */
$(document).ready(function(){
    //点击头部，显示与隐藏首页与个人中心
    $("#navbuttom").click(function(){
        $("#navbar-collapse").toggle();
    });
    //图片滑动手势
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


    // $(".item a img").click(function () {
    //     $(this).css({'border':'1px solid #eb6120'}).siblings("img").css({'border':'none'})
    // });


        var TodayDate=new Date();
        var months=TodayDate.getMonth()+1;
        var days=TodayDate.getDate();
        var days2=TodayDate.getDate()+1;
        var days3=TodayDate.getDate()+2;

        $("#today1").text(
    function (e) {
        var a = months+"月"+days+"日";
        return a;
    }

    );
    $("#tomorrow1").text(
        function (e) {
            var b = months+"月"+days2+"日";
            return b;
        }

    );
    $("#tomorrow2").text(
        function (e) {
            var d = months+"月"+days3+"日";
            return d;
        }

    )

    $("#myTab li a").click(function () {
        $(this).css({'background-color':'#eb6120','color':'white'}).siblings("li").css({'background-color':'#999999'})
    });









});
