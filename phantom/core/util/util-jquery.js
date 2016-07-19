define(function(require,exports,module){
	var Common = require('./util-common');
	var $ = require('../lib/jqueryCMD');
	var ValidateUtil = require('./util-validate');
	var Logger = require('./util-logger');
	
	
	var JqueryUtil = {
		init : function(defaults,options){
			return init(defaults,options);
		}
	};

	Common.freeze(JqueryUtil);
	module.exports = JqueryUtil;
	
	function init(defaults,options){
		if(ValidateUtil.isUndefined(defaults)){
			Logger.log('默认参数对象必传');
			return defaults;
		}
		if(ValidateUtil.isUndefined(options)){
			return defaults;
		}else{
			return $.extend(defaults,options);
		}
	}
	
});