define(["jquery"],function(){
    $.ajax({
        url: "../../static/json/index/indexcenter1.json",
        success: function (res) {
            console.log(1)
            let food = document.querySelector('.food-paradise-food');
            let str = ''
            for (var i = 0; i < res.length; i++) {
                str += `<li>
                <a href="#"><img src="${res[i].url}" alt=""><a>
                <p><a href="#">${res[i].tip}</a></p>
                <p><span>${res[i].price}</span><del>${res[i].Originalprice}</del></p>
            </li>`
            }
            food.innerHTML = str;
        }
    })

    $.ajax({
        url: "../../static/json/index/indexcenter2.json",
        success: function (res) {
            console.log(1)
            let hot = document.querySelector('.hot-sale-food');
            let str = ''
            for (var i = 0; i < res.length; i++) {
                str += `<li>
                <a href="#"><img src="${res[i].url}" alt=""><a>
                <p><a href="#">${res[i].tip}</a></p>
                <p><span>${res[i].price}</span><del>${res[i].Originalprice}</del></p>
            </li>`
            }
            hot.innerHTML = str;
        }
    })

    $.ajax({
        url: "../../static/json/index/indexcenter3.json",
        success: function (res) {
            console.log(1)
            let onsale = document.querySelector('.onsale');
            let str = ''
            for (var i = 0; i < res.length; i++) {
                str += `<li>
                <a href="#"><img src="${res[i].url}" alt=""><a>
                <p><a href="#">${res[i].tip}</a></p>
                <p><span>${res[i].price}</span><del>${res[i].Originalprice}</del></p>
            </li>`
            }
            onsale.innerHTML = str;
        }
    })

    $.ajax({
        url: "../../static/json/index/indexright1.json",
        success: function (res) {
            console.log(1)
            let hotsale = document.querySelector('.hot-sale-food-rightt');
            let str = ''
            for (var i = 0; i < res.length; i++) {
                str += `<li>
                <a href="#">
                    <img src="../../static/images/hott.gif" alt="" class="icon">
                    <div>
                        <p>
                            <img src="${res[i].url}" alt="" class="bigp">
                        </p>
                        <p class="shopnuam">
                            <span>${res[i].tip}</span>
                            <span>${res[i].price}</span>
                        </p>
                </a>
            </li>`
            }
            hotsale.innerHTML = str;
        }
    })

    $.ajax({
        url: "../../static/json/index/indexright2.json",
        success: function (res) {
            console.log(1)
            let salee = document.querySelector('.salee');
            let str = ''
            for (var i = 0; i < res.length; i++) {
                str += `<li>
                <a href="#">
                    <img src="../../static/images/hott.gif" alt="" class="icon">
                    <div>
                        <p>
                            <img src="${res[i].url}" alt="" class="bigp">
                        </p>
                        <p class="shopnuam">
                            <span>${res[i].tip}</span>
                            <span>${res[i].price}</span>
                        </p>
                </a>
            </li>`
            }
            salee.innerHTML = str;
        }
    })
})