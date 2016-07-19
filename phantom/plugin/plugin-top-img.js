/*��ҳ����ͼƬ������ʾЧ��*/
//setTimeout("nodeAds()",stopTime); ҳ�汨nodeAds()δ������󣬽����������function nodeAds() ����� var nodeAds = function(){}
define(function(require,exports,module){
	"use strict";
	var Objects = require('../core/phantom-objects');
	var $ = Objects.$;
	var Validate = Objects.Validate;
	var Logger = Objects.Logger;

	var defaults = {
		id : '',
		stopTime : 7000, //ͼƬ������ʾͣ��ʱ��
		H : 300, //ͼƬdiv�߶�
		speed : 5 //�����ٶ�
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
			Logger.log('����ͼƬDIV id����Ϊ��');
			return;
		}
			
		$(function(){
			addCount();
			setTimeout(nodeAds,stopTime); //ͣ��ʱ���Լ��ʵ�����
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