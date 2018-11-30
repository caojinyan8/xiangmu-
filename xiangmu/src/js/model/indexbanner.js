define(["jquery","banner"],function(){
    console.log($)
    $(".banner").banner({
        items: $(".banner a"),
        prev: $(".banner .prev"),
        next: $(".banner .next"),
        list: $(".banner-list li"),
        autoPlay: true,
        delayTime: 2000,
        moveTime: 500
    })
})