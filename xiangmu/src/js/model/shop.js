define(function () {
    var add = location.search;
    console.log(add);
    add = add.substring(1);
    console.log(add);
    class Shop {
        constructor(add) {
            this.add = add;
            this.main = $(".main")
            console.log(this.add)
            this.load()
        }
        load() {
            $.ajax({
                url: "../../static/json/list-of-goods/list-of-goods.json",
                success: (res) => {
                    console.log(res);
                    this.res = res;
                    this.display()
                }
            })
        }
        display() {
            console.log(this.res)
            let str = ""
            for (var i = 0; i < this.res.length;i++) {
                if(this.res[i].id==this.add)
                str += `
                <p><img src="${this.res[i].url}"><span></span><b></b></p>
                <section><img src="${this.res[i].url}"></section>
                <div><img src="${this.res[i].url}"></div>
            <ul>
            <li>${this.res[i].tip}<span>店铺信息农工商店</span></li>
            <li>便利通价格:<b>${this.res[i].price}</b></li>
            <li>产品编号:${this.res[i].bianhao}</li>
            <li><h4>我要买:</h4><h4>-</h4><input type="text"><h4>+</h4><h1>加入购物车</h1></li>
            </ul>
                `
            }
            this.main.html(str)
        }
    }
    return new Shop(add)
})