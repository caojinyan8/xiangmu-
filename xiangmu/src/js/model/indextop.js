define(["jquery"],function(){
    // console.log($)
  let timer=setInterval(function(){
        $(".shoplistall-img1").animate({left:'-960px'},function(){
            setTimeout(function(){
             $(".shoplistall-img1").animate({left:'0px'});
            },3000)
        })
        $(".shoplistall-img1").hover(function(){
            clearInterval(timer)
        },function(){
            $(".shoplistall-img1").animate({left:'-960px'},function(){
                setTimeout(function(){
                 $(".shoplistall-img1").animate({left:'0px'});
                },3000)
            })
        })
    },2000)


setInterval(function(){
    $(".wu1").hide()
    $(".wu2").show()
    setTimeout(function(){
        $(".wu2").hide()
        $(".wu1").show()
    },1400)
},2800)

$(".floor").children("li").click(function(){
    //console.log($(this).index())
    var t=$(".floors").eq($(this).index()).offset().top
    $("html").animate({
        scrollTop:t
    })
    console.log($(this).index())
   
})
})