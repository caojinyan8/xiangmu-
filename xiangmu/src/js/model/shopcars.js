define(function () {
    // console.log($)
    class Car {
        constructor(opction) {
            this.url = opction.url;
            this.tbody = opction.tbody
            this.load()
        }
        load() {
            $.ajax({
                url: this.url,
                success: (res) => {
                    //console.log(res)
                    this.res = res
                    this.setCookie()
                }
            })
        }
        setCookie() {
            this.good = JSON.parse($.cookie("goods"))
            //console.log(this.good)
            this.display()
            this.price()
        }
        display() {
            let str = ""
            for (var i = 0; i < this.res.length; i++) {
                for (var j = 0; j < this.good.length; j++) {
                    if (this.res[i].id == this.good[j].id) {
                        // console.log(this.res[i])
                        str += `
                         <tr>
                        <td><img src="${this.res[i].url}"><span>${this.res[i].tip}</span></td>
                        <td>${this.res[i].price}</td>
                        <td><input type="number" value="${this.good[j].numm}"></td>
                        <td><b cjyy="${this.res[i].id}">删除</b></td>
                    </tr> 
                        `
                    }
                    this.tbody.html(str)
                    this.removechangge()
                }
            }
        }
        removechangge() {
            let that = this;
            this.tbody.on("click", "b", function () {
                let id = $(this).attr("cjyy");
                $(this).parent().parent().remove()
                that.removeCookie(id);
            })
            this.tbody.on("input", "input", function () {
                var num = $(this).val();
                var id = $(this).parent().next("td").children("b").attr("cjyy")
                that.changeCookie(id, num)
            })
        }
        removeCookie(id) {
            for (var i = 0; i < this.good.length; i++) {
                if (this.good[i].id == id) {
                    this.good.splice(i, 1)
                    console.log(this.good)
                }
                $.cookie("goods", JSON.stringify(this.good))
            }

        }
        changeCookie(id, n) {
            for (var i = 0; i < this.good.length; i++) {
                if (this.good[i].id == id) {
                    this.good[i].numm = n
                }
                $.cookie("goods", JSON.stringify(this.good))
            }
        }
        price() {
            var totalprice = "";
            var pricess = 0;
            for (var i = 0; i < this.res.length; i++) {
                for (var j = 0; j < this.good.length; j++) {
                    if (this.res[i].id == this.good[j].id) {
                        // console.log(this.res[i])
                        var old = this.res[i].price
                        var news = old.substring(1)
                        pricess = pricess + parseInt(this.good[j].numm) * parseInt(news)
                    }
                }
            }
            totalprice= `<p>优惠后总价:${pricess}</p> `
            $(".zongjia").html(totalprice)
        }
    }
    return new Car({
        url: "../../static/json/list-of-goods/list-of-goods.json",
        tbody: $("tbody")
    })
})