"use strict";function _classCallCheck(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,o){for(var e=0;e<o.length;e++){var i=o[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,o,e){return o&&_defineProperties(t.prototype,o),e&&_defineProperties(t,e),t}define(function(){return new(function(){function o(t){_classCallCheck(this,o),this.url=t.url,this.tbody=t.tbody,this.load()}return _createClass(o,[{key:"load",value:function(){var o=this;$.ajax({url:this.url,success:function(t){o.res=t,o.setCookie()}})}},{key:"setCookie",value:function(){this.good=JSON.parse($.cookie("goods")),this.display(),this.price()}},{key:"display",value:function(){for(var t="",o=0;o<this.res.length;o++)for(var e=0;e<this.good.length;e++)this.res[o].id==this.good[e].id&&(t+='\n                         <tr>\n                        <td><img src="'.concat(this.res[o].url,'"><span>').concat(this.res[o].tip,"</span></td>\n                        <td>").concat(this.res[o].price,'</td>\n                        <td><input type="number" value="').concat(this.good[e].numm,'"></td>\n                        <td><b cjyy="').concat(this.res[o].id,'">删除</b></td>\n                    </tr> \n                        ')),this.tbody.html(t),this.removechangge()}},{key:"removechangge",value:function(){var e=this;this.tbody.on("click","b",function(){var t=$(this).attr("cjyy");$(this).parent().parent().remove(),e.removeCookie(t)}),this.tbody.on("input","input",function(){var t=$(this).val(),o=$(this).parent().next("td").children("b").attr("cjyy");e.changeCookie(o,t)})}},{key:"removeCookie",value:function(t){for(var o=0;o<this.good.length;o++)this.good[o].id==t&&(this.good.splice(o,1),console.log(this.good)),$.cookie("goods",JSON.stringify(this.good))}},{key:"changeCookie",value:function(t,o){for(var e=0;e<this.good.length;e++)this.good[e].id==t&&(this.good[e].numm=o),$.cookie("goods",JSON.stringify(this.good))}},{key:"price",value:function(){for(var t,o=0,e=0;e<this.res.length;e++)for(var i=0;i<this.good.length;i++)if(this.res[e].id==this.good[i].id){var n=this.res[e].price.substring(1);o+=parseInt(this.good[i].numm)*parseInt(n)}t="<p>优惠后总价:".concat(o,"</p> "),$(".zongjia").html(t)}}]),o}())({url:"../../static/json/list-of-goods/list-of-goods.json",tbody:$("tbody")})});