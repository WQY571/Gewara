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
        loop: false,
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
//获取日期
        var TodayDate=new Date();
        var months=TodayDate.getMonth()+1;
        var days=TodayDate.getDate();
        var days2=TodayDate.getDate()+1;
        var days3=TodayDate.getDate()+2;

        $("#today1").text(
    function (e) {
        return a = months+"月"+days+"日";

    }

    );
    $("#tomorrow1").text(
        function (e) {
            return b = months+"月"+days2+"日";

        }

    );
    $("#tomorrow2").text(
        function (e) {
            return d = months+"月"+days3+"日";

        }

    )











});
