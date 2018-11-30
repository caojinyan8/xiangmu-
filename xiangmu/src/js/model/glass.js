define(function () {
    console.log($)
    $(".main").mouseover(function (eve) {
        $(".main p").mousemove(function (eve) {
            $(".main section").stop().show()
            $(".main p span").stop().show()
            let e = eve || event
            let mouseX = e.offsetX - $(".main p span").width() / 2;
            let mouseY = e.offsetY - $(".main p span").height() / 2;
            // var l = $(".main p span").offset().left
            // var t = $(".main p span").offset().top
            if (mouseX < 0) mouseX = 0
            if (mouseY < 0) mouseY = 0
            let w = $(".main p").width()
            let h = $(".main p").height()
            if (mouseX > w - $(".main p span").width()) {
                mouseX = w - $(".main p span").width()
            }
            if (mouseY > h - $(".main p span").height()) {
                mouseY = h - $(".main p span").height()
            }
            let x = mouseX / (w - $(".main p span").width())
            let y = mouseY / (h - $(".main p span").height())
            let bx = $(".main section img").width() - $(".main section").width()
            let by = $(".main section img").height() - $(".main section").height()
            console.log(y, x, bx, by, $(".main section img").width())
            $(".main section img").css({ left: -(bx * x) })
            $(".main section img").css({ top: -(by * y) })
            $(".main p span").css({ left: mouseX })
            $(".main p span").css({ top: mouseY })
            // console.log(mouseX, mouseY, $(".main p span").offset().left)
        })
    })
    $(".main").mouseout(function () {
        $(".main p span").stop().hide()
        $(".main section").stop().hide()

    })
    let liAll = document.querySelectorAll('.describe ul li')
    let p = document.querySelector('.cont').children
    for (let i = 0; i < liAll.length; i++) {
        liAll[i].index = i;
        liAll[i].onclick = function () {
            for (var j = 0; j < liAll.length; j++) {
                liAll[j].className = ' '
                p[j].className = ''
            }
            this.className = 'cont1'
            p[this.index].className = 'cont1'
        }
    }



})