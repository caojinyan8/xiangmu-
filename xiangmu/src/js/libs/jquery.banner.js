;(function($){
	"use strict";
	
	$.fn.banner = function(options){
		this.LOCAL = {};
		
		this.LOCAL.autoPlay = options.autoPlay === false ? false : true;
		this.LOCAL.delayTime = options.delayTime || 2000;
		this.LOCAL.moveTime = options.moveTime || 200;
		
//		index在list功能中表示要走的，点击的那个是要进来的
//		index在左右按钮中表示要进来的
		this.LOCAL.index = 0;
		this.LOCAL.iPrev = options.items.length-1;
		
//		list的开关,判断是否传了list的参数
		var list = false;
		
		var that = this;
//		判断是否存在list，在传了的时候，执行list的功能
		if(options.list != undefined && options.list.length > 0){
			list = true;	//如果传了，打开开关，没传不操作，到后面就还是false
			options.list.on("click",function(){
				if($(this).index() > that.LOCAL.index){
					that.LOCAL.listMove($(this).index(),1)
				}
				if($(this).index() < that.LOCAL.index){
					that.LOCAL.listMove($(this).index(),-1)
				}
				
				options.list.eq($(this).index()).addClass("active").siblings().removeClass("active")
				that.LOCAL.index = $(this).index()
			})
		}
//		list的移动函数
		this.LOCAL.listMove = function(index,type){
			options.items.eq(that.LOCAL.index).css({
				left:0
			}).stop().animate({
				left:-options.items.eq(0).width() * type
			},that.LOCAL.moveTime).end().eq(index).css({
				left:options.items.eq(0).width() * type
			}).stop().animate({
				left:0
			},that.LOCAL.moveTime)
		}
		
//		左按钮的事件处理函数
		this.LOCAL.left = function(){
//			改变索引
			if(that.LOCAL.index == 0){
				that.LOCAL.index = options.items.length-1;
				that.LOCAL.iPrev = 0
			}else{
				that.LOCAL.index --;
				that.LOCAL.iPrev = that.LOCAL.index + 1;
			}
//			移动
			that.LOCAL.btnMove(1)
		}
//		右按钮的事件处理函数
		this.LOCAL.right = function(){
//			改变索引
			if(that.LOCAL.index == options.items.length-1){
				that.LOCAL.index = 0;
				that.LOCAL.iPrev = options.items.length-1;
			}else{
				that.LOCAL.index ++;
				that.LOCAL.iPrev = that.LOCAL.index-1
			}
//			移动
			that.LOCAL.btnMove(-1)
		}
//		判断是否存在左右按钮，在传了的时候，执行左右按钮的功能
		if(options.prev != undefined && options.prev.length > 0 && options.next != undefined && options.next.length > 0){
			options.prev.on("click",this.LOCAL.left)
			options.next.on("click",this.LOCAL.right)
		}
		
//		按钮的移动函数
		this.LOCAL.btnMove = function(type){
			options.items.eq(that.LOCAL.iPrev).css({
				left:0
			}).stop().animate({
				left:options.items.eq(0).width() * type
			},that.LOCAL.moveTime).end().eq(that.LOCAL.index).css({
				left:-options.items.eq(0).width() * type
			}).stop().animate({
				left:0
			},that.LOCAL.moveTime)
			
//			如果上面判断list的时候,传了,那么就是true,如果是false表示上面的判断失败了,表示没穿list
			if(list){
				options.list.eq(that.LOCAL.index).addClass("active").siblings().removeClass("active")
			}
		}
		
//		自动播放
		if(this.LOCAL.autoPlay){
			this.LOCAL.timer = setInterval(function(){
				that.LOCAL.right()
			},this.LOCAL.delayTime)
			
//			此处有hover事件
			this.hover(function(){
				clearInterval(that.LOCAL.timer)
			},function(){
				that.LOCAL.timer = setInterval(function(){
					that.LOCAL.right()
				},that.LOCAL.delayTime)
			})
		}
	}
	
})(jQuery);