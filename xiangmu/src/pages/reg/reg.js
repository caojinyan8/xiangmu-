$("form").validate()
if ($(".valid")) {
    $("#zc").click(function () {
        $("#yz").css("display","block")
        $.ajax({
            url: "http://www.liyangyf.com/ctrl/register.php",
            data: {
                tel: $("#user").val(),
                pass: $("#pass").val(),
            },
            success: function (res) {
                console.log(res)
                switch (res) {
                    case "0":
                        $("#yz").html("你的名字是重名的请重新注册"); break;
                    case "1":
                    if($("#pass").val()==$("#pass1").val()){
                        $("#yz").html("恭喜你注册成功,马上跳转登陆界面");
                        setTimeout(function () {
                            location.href = "../login/login.html"
                        }, 2000)
                    }else{
                        $("#yz").html("密码不正确请重新输入");
                    }
                        break;
                    case "2":
                        $("#yz").html("对不起请填写完整数据"); break;
                }
            }
        })
    })
}

$("#back").click(function(){
    history.back()
})