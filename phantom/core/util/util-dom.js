define(function(require,exports,module){
	"use strict"
	var Common=require('./util-common');
	var $=require('../lib/jqueryCMD');
	var Validate=require('./util-validate');
	var Logger=require('./util-Logger');

	var DomUtil = 	{
		//元素的坐标
		Coord : function(id){
			return coord(id);
		},
		//网页宽高  
		Page : function() {  
			if (typeof window.innerWidth !== 'undefined') {//Notice:'undefined' is right  
				//Logger.info("window.innerWidth="+window.innerWidth + "	window.innerHeight=" + window.innerHeight);
				//Logger.info("document.body.clientWidth="+document.body.clientWidth + "	document.body.clientHeight=" + document.body.clientHeight);
				//Logger.info("document.body.offsetWidth="+document.body.offsetWidth + "	document.body.offsetHeight=" + document.body.offsetHeight);
				//Logger.info("document.body.scrollWidth="+document.body.scrollWidth + "	document.body.scrollHeight=" + document.body.scrollHeight);
				//Logger.info("document.body.scrollTop="+document.body.scrollTop + "	document.body.scrollLeft=" + document.body.scrollLeft);
				//Logger.info("window.screen.height="+window.screen.height + "	window.screen.width=" + window.screen.width);
				//Logger.info("window.screen.availWidth="+ window.screen.availWidth + "	window.screen.availHeight=" + window.screen.availHeight);
				//Logger.info("$(window).width()="+ $(window).width() + "	$(window).height()=" + $(window).height());
				//Logger.info("document.body.clientTop="+document.body.clientTop + "	document.body.clientLeft=" + document.body.clientLeft);
				return {  
					width : window.innerWidth,  
					height : window.innerHeight  
				}  
			} else {
				return {  
					width : document.documentElement.clientWidth,  
					height : document.documentElement.clientHeight  
				}  
			}  
		},
		//页面input获取光标，默认第一个input
		inputAutofocus : function(param){
			var input;
			if(Validate.isUndefined(param)){
				input = $("input[type='text']:first").focus();
			}else if(Validate.isHtmlElement(param)){
				$(param).focus();
			}else if(Validate.isString(param)){
				$("#"+param).focus();
			}else{
				Logger('DomUtil:inputAutofocus 传入参数错误');
			}
		},
		//input获取光标全选内容
		inputSelectAll : function(param){
			if(Validate.isUndefined(param)){
				$('input[type=text]').focus(function(){
					this.select();
				});
			}else if(Validate.isHtmlElement(param)){
				$(param).focus(function(){
					this.select();
				});
				
			}else if(Validate.isString(param)){
				$('#'+param).focus(function(){
					this.select();
				});
			}else{
				Logger.log('DomUtil:inputSelectAll 传入参数错误');
			}
		}
	}

	Common.freeze(DomUtil);//冻结对象属性
	module.exports = DomUtil;

	function coord(id){
		if(Validate.isUndefined(id)){
			Logger.log('元素id为必须');
			return;
		}
		var $offset=$('#'+id).offset();
		return {left:$offset.left,top:$offset.top};
	}

});