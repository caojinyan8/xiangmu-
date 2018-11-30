define(["jquery"],function(){
    console.log($)
            $(".shoplist").children("li").hover(function () {
                    $(this).children("span").css({
                        border: "1px solid #fb5008",
                        "border-right": "none",
                    }).children("a").css("background", "none").end().end().siblings().children("span").css("border", "none").children("a").css("background", "url('../../static/images/jiantou.jpg') no-repeat right center").end().end().end().children("ul").stop().show().end().siblings().children("ul").stop().hide()
                }, function () {
                    $(this).children("ul").stop().hide().end().children("span").css("border", "none").children("a").css("background", "url('../../static/images/jiantou.jpg') no-repeat right center")
                })
        
    }
)