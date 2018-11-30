define(["jquery"], function () {
    $.ajax({
        url: "../../static/json/activity/activity.json",
        success: function (res) {
            //console.log(1)
            let baby = document.querySelector('.baby-type');
            let str = ''
            for (var i = 0; i < res.length; i++) {
                str += ` <li>
                <a href="#"><img src="${res[i].url}" alt=""></a>
            <p>商城编码:${res[i].code}</p>
            <p><a href="#">${res[i].tip}</a></p>
            <div>
                   <a href="#"><b>${res[i].price}</b></a>
            </div>
        </li>`
            }
            baby.innerHTML = str;
        }
    })

$(".activity-nav-type").hover(function(){
    $(".activity-shoplist").show()
    $(".shoplist").children("li").hover(function () {
        $(this).children("span").css({
            border: "1px solid #fb5008",
            "border-right": "none",
        }).children("a").css("background", "none").end().end().siblings().children("span").css("border", "none").children("a").css("background", "url('../../static/images/jiantou.jpg') no-repeat right center").end().end().end().children("ul").stop().show().end().siblings().children("ul").stop().hide()
    }, function () {
        $(this).children("ul").stop().hide()
         })

},function(){
})

$(".activity-shoplist-img").mousemove(function () {
    $(".activity-shoplist").hide()
  
})


window.onscroll = function () {
    var scrollT = document.documentElement.scrollTop;
    if(scrollT>200){
        $(".activity-nav").css({
             position:"fixed",
             top:0,
             left:"186px",
             zIndex:"999999"
        }
           )
    }
    else{
        $(".activity-nav").css({
            position:"static",
       }
          )

    }
    console.log(scrollT)
}
})


// var a=document.documentElement.scrollTop
// console.log(a)





