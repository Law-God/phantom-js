/*首页顶部图片下拉显示效果*/
//setTimeout("nodeAds()",stopTime); 页面报nodeAds()未定义错误，解决方法，将function nodeAds() 定义成 var nodeAds = function(){}
define(function(require,exports,module){
	"use strict";
	var Objects = require('../core/phantom-objects');
	var $ = Objects.$;
	var Validate = Objects.Validate;
	var Logger = Objects.Logger;

	var defaults = {
		id : '',
		stopTime : 7000, //图片下拉显示停留时间
		H : 300, //图片div高度
		speed : 5 //滚动速度
	}

	var time = 500,T = 500;
	var h = 0;
	var id,stopTime,H,speed;

	module.exports = function(options){
		var settings = $.extend(defaults,options);
		id = settings.id;
		stopTime = settings.stopTime;
		H = settings.H;
		speed = settings.speed
		if(Validate.isUndefined(id)){
			Logger.log('下拉图片DIV id不能为空');
			return;
		}
			
		$(function(){
			addCount();
			setTimeout(nodeAds,stopTime); //停留时间自己适当调整
		});
	};
	
	var addCount = function (){
		if(time>0){
			time--;
			h += speed;
		}else{
			return;
		}
		if(h > H) return;
		document.getElementById(id).style.display = "";
        document.getElementById(id).style.height = h+"px";
        setTimeout(addCount,30); 
	}
	var nodeAds = function (){
		if(T>0){
            T--;
            H = H-speed;
        }else{
            return;
        }
        if(H<0){
            document.getElementById(id).style.display = "none";
            return;
        }
        document.getElementById(id).style.height = H+"px";
        setTimeout(nodeAds,30); 
	}
});