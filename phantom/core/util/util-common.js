define(function(require,exports,module){
	var $ = require('../lib/jqueryCMD');
	var Common = {
		freeze : function(obj,properties){
			return freeze(obj,properties);
		},
		objAllProperties : function(obj){
			var proStr = '';
			for(pro in obj){
				//for in中obj.pro获取不到值，需要使用obj.[pro]
				proStr += pro + ":" + obj[pro] + " ";
			}
			return proStr;
		}
	};

	freeze(Common);//冻结对象属性
	module.exports = Common;

	/*
	*冻结对象属性
	*/
	function freeze(obj,properties){
		if(properties == undefined){
			if(!!$.browser.msie && parseInt($.browser.version,10) < 9 ){//ie8 不支持Object.defineProperty
				
			}else{
				for(var pro in obj){
				Object.defineProperty(obj,pro,{
					writable : false
				});
			}
			}
			
		}
	}
	
});