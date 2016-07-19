define(function(require,exports,module){
	var Objects=require('../core/phantom-objects');
	var $=Objects.$;
	var Validate=Objects.Validate;
	var NumberUtil=Objects.NumberUtil;
	var StringUtil=Objects.StringUtil;
	
	//默认配置参数
	var defaults = {
			id : "",
			n : 2, //小数点位数
			onpaste : "return false", //不可黏贴
			//onkeyup : "this.value=this.value.replace(/\D/g,'')",//修改时每输入一个数字，光标自动跑到最后
			sign : "<span>￥</span>",
			chineseId : "Undefined"
	};

	/*
	module.exports = {
						createMoneyInput : function(options){
							return createMoneyInput(options);
						}
					};
	*/

	module.exports = function(options){
		var settings = $.extend(defaults,options);
		var id = "#"+settings.id;
		var sign = settings.sign;
		$(id).attr("onpaste",settings.onpaste);
		$(id).attr("onkeyup",settings.onkeyup);
		$(sign).insertBefore($(id));
		//只能输入数字
		$(id).keypress(function (event) {
            var eventObj = event || e;
            var keyCode = eventObj.keyCode || eventObj.which;
			//13 => Enter 46 => . 32 => Space
            if ((keyCode >= 48 && keyCode <= 57) || keyCode == 8 || keyCode == 0 || keyCode == 46) {
                return true;
            } else {
                return false;
            }
        });

		//获取焦点时去除,
		$(id).focus(function(){
			var val = $(id).val().replace(/,/g,'');
			$(id).val(val);
		});

		//格式化金额格式
		$(id).blur(function(){
			var val = StringUtil.trim($(id).val());
			val = val.replace(/[a-zA-Z\u4e00-\u9fa5·~！@#￥%……&*（）——+\-=【】｛｝；：‘’“”，。、\|《》？]/g,"");
			var reg = /^\d+(\.\d+)?$/;
			if(val != '' & reg.test(val)){
				//大写金额
				var chineseId = settings.chineseId;
				if(!Validate.isUndefined(chineseId)){
					$("#" + chineseId).html(NumberUtil.n2c(val));
				}
			}
			$(this).val(NumberUtil.fmoney(val,2));
		});
	}


});