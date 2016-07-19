/* 遮罩层 */
define(function(require,exports,module){
	"use strict";
	var cssUrl = require.toUrl("./css/maskLayer/maskLayer.css");
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = cssUrl;
    document.getElementsByTagName("head")[0].appendChild(link);
	
	var CommonUtil = require('./util-common');
	var $ = require('../lib/jqueryCMD');
	var ValidateUtil = require('./util-validate');
	var DomUtil = require('./util-dom');
	var JqueryUtil = require('./util-jquery');
	
	//默认配置参数
	var defaults = {
			id : 'maskLayer',
			text : '',
			class : 'maskLayer'
	};
	
	var MaskLayerUtil = {
		show : function(options){
			defaults = JqueryUtil.init(defaults,options);
			show();
		},
		hidden : function(){
			hidden();
		}
	}

	CommonUtil.freeze(MaskLayerUtil);//冻结对象属性
	module.exports = MaskLayerUtil;
	
	
	function show(){
		var width = DomUtil.Page().width + 'px';
		var height = (DomUtil.Page().height-18) + 'px';//18解决高度出现滚动条
		var style = "width:"+width+";height:"+height+";"
		$("body").append('<div id='+defaults.id+' class='+defaults.class+' style='+style+'>'+defaults.text+'</div>');
		//页面窗口改变时重新调整遮罩层宽高
		$(window).resize(function(){
			width = DomUtil.Page().width + 'px';
			height = (DomUtil.Page().height-18) + 'px';
			$("#"+defaults.id).css({"width":width,"height":height});
		});
	}
	
	function hidden(){
		$("#"+defaults.id).css("display","none");
	}


});