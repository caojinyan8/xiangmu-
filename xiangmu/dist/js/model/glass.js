"use strict";define(function(){console.log($),$(".main").mouseover(function(i){$(".main p").mousemove(function(i){$(".main section").stop().show(),$(".main p span").stop().show();var n=i||event,s=n.offsetX-$(".main p span").width()/2,t=n.offsetY-$(".main p span").height()/2;s<0&&(s=0),t<0&&(t=0);var e=$(".main p").width(),a=$(".main p").height();s>e-$(".main p span").width()&&(s=e-$(".main p span").width()),t>a-$(".main p span").height()&&(t=a-$(".main p span").height());var o=s/(e-$(".main p span").width()),m=t/(a-$(".main p span").height()),c=$(".main section img").width()-$(".main section").width(),p=$(".main section img").height()-$(".main section").height();console.log(m,o,c,p,$(".main section img").width()),$(".main section img").css({left:-c*o}),$(".main section img").css({top:-p*m}),$(".main p span").css({left:s}),$(".main p span").css({top:t})})}),$(".main").mouseout(function(){$(".main p span").stop().hide(),$(".main section").stop().hide()});for(var n=document.querySelectorAll(".describe ul li"),s=document.querySelector(".cont").children,i=0;i<n.length;i++)n[i].index=i,n[i].onclick=function(){for(var i=0;i<n.length;i++)n[i].className=" ",s[i].className="";this.className="cont1",s[this.index].className="cont1"}});