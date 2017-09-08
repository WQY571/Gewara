/*$(function(){*/


    function createCode(){
        var ok1=false;
        var ok2=false;
        var ok3=false;
        var ok4=false;
        var code;

            code = "";
            var codeLength = 4;//验证码的长度
            var checkCode = document.getElementById("code");
            var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
                'S','T','U','V','W','X','Y','Z');//随机数
            for(var i = 0; i < codeLength; i++) {//循环操作
                var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
                code += random[index];//根据索引取得随机数加到code上
            }
            checkCode.value = code;//把code值赋给验证码

        // 验证用户名
        $('input[name="username"]').on("click",function(){
        }).blur(function(){/*失去焦点 (blur)*/
            if($(this).val() == 571){
                ok1=true;
            }
        });


        //验证密码
        $('input[name="password"]').on("click",function(){
        }).blur(function(){
            if($(this).val() == 123){
                ok2=true;
            }
        });



        //校验验证码
        function validate(){
            var yanzhengidCode = document.getElementById("yanzhengid").value.toUpperCase(); //取得输入的验证码并转化为大写
            if(yanzhengidCode.length <= 0) { //若输入的验证码长度为0
                alert("请输入验证码！"); //则弹出请输入验证码
            }else if(yanzhengidCode != code ) { //若输入的验证码与产生的验证码不一致时
                alert("验证码输入错误！@_@"); //则弹出验证码输入错误
                createCode();//刷新验证码
                document.getElementById("yanzhengid").value = "";//清空文本框
            }else { //输入正确时
                ok4=true;
            }
        }


        //登录按钮
        $('#sbt').click(function(){
            validate();
            if(ok1 && ok2 ){
                ok3=true;
                if(ok3 && ok4){
                    alert("ok");
                }
            }else {
                alert("error!");
            }
        });


    }





/*});*/





