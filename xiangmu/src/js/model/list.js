define(function () {

    // console.log($)

    $(".page1").click(function () {
        // console.log(1)
        $(".shopli dl").css("width", "600px")
        $(".shopli dl h4").css({
            float: "right",
            marginTop: "-120px",
            marginRight: "200px"
        })
        $(".shopli dl del").css({
            float: "right",
            marginTop: "-80px",
            marginRight: "360px"
        })
        $(".shopli dl p").css({
            float: "right",
            marginTop: "-80px",
            marginRight: "300px"
        })
    })
    $(".page2").click(function () {
        // console.log(1)
        $(".shopli dl").css("width", "196px")
        $(".shopli dl h4").css({
            float: "none",
            marginTop: "0",
            marginRight: "0"
        })
        $(".shopli dl del").css({
            float: "none",
            marginTop: "0",
            marginRight: "0"
        })
        $(".shopli dl p").css({
            float: "none",
            marginTop: "0",
            marginRight: "0"
        })
    })
    $(".nfsq").click(function () {
        $.ajax({
            url: "../../static/json/list-of-goods/nfsq.json",
            success: function (res) {
                console.log(res)
                let shopli = document.querySelector('.shopli');
                let str = ''
                for (var i = 0; i < res.length; i++) {
                    str += `<dl>
                <dt>
                <a href="#"><img src="${res[i].url}"></a></dt>
                <dd>
                    <h4><a href="#">${res[i].tip}</a></h4>
                        <del>${res[i].price}</del>
                        <p>${res[i].Originalprice}</p>
                        <input type="image" src="../../static/images/shopca.gif" alt="">
                       
                </dd>
            </dl>`

                }
                shopli.innerHTML = str;
            }
        })
    })
    class Page {
        constructor(opction) {
            this.url = opction.url;
            this.page = opction.page;
            this.li = opction.li;
            this.num = opction.num;
            this.load();
        }
        load() {
            $.ajax({
                url: this.url,
                success: (res) => {
                    this.res = res;
                    this.paage()
                }
            })
        }
        paage() {
            console.log(this.res)
            var that = this;
            $(".pagination").pagination(this.res.length, {
                items_per_page: this.num,
                prev_text: "前一页",
                next_text: "下一页",
                num_edge_entries: 3,
                callback: function (index) {
                    that.index = index;
                    //console.log(that.index)
                    that.display()
                }
            })
        }
        display() {
            var str = ""
            for (var i = this.num * this.index; i < this.index * this.num + this.num; i++) {
                if (i < this.res.length) {
                    str += `<dl cjy="${this.res[i].id}">
                <dt><a href="../shoplist/shoplist.html?${this.res[i].id}"><img src="${this.res[i].url}"></a></dt>
                <dd>
                    <h4><a href="#">${this.res[i].tip}</a></h4>
                        <del>${this.res[i].price}</del>
                        <p>${this.res[i].Originalprice}</p>
                        <input type="image" src="../../static/images/shopca.gif" alt="">
                        </dd>
            </dl>`
                }
            }
            this.li.html(str)
            this.init()
        }
        init() {
            var that = this;
            this.li.on("click", "input", function () {
                that.id = $(this).parent().parent().attr("cjy")
                console.log(that.id)

               
                that.setCook()
            })
        }
        setCook() { 
           // $.cookie(this.id,this.id)
            this.goods=JSON.parse($.cookie("goods"))
            if(this.goods==null){
                this.goods=[{
                    id:this.id,
                    numm:1
                }]
            }else{
                let onOff=true;
                for(var i=0;i<this.goods.length;i++){
                    if(this.goods[i].id==this.id){
                        this.goods[i].numm++;
                        onOff=false
                    }
                }
                if(onOff==true){
                    this.goods.push({
                        id:this.id,
                        numm:1
                    })
                }
            }
        console.log(this.goods)
        $.cookie("goods",JSON.stringify(this.goods))
        }
    }
    $("#setPage").on("change", function () {
        console.log($(this).val())
        new Page({
            url: "../../static/json/list-of-goods/list-of-goods.json",
            page: $(".pagination"),
            li: $(".shopli"),
            num: parseInt($(this).val())
        })
    })
    return new Page({
        url: "../../static/json/list-of-goods/list-of-goods.json",
        li: $(".shopli"),
        page: $(".pagination"),
        num: 12
    })


})

