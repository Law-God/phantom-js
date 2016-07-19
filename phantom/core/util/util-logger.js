define(function(require,exports,module){
	//var Objects = require("phantom/phantom-objects");
	var Browser=require('./util-browser');
	var Common=require('./util-common');
	
	var debug = true;//开发模式，打印输出
	
	var Logger = {
		log : function(msg){
			if(!!window.console){
				if(debug){
					window.console.log(msg);
				}	
			}
		},
		warn : function(msg){
			if(!!window.console){
				if(debug){
					window.console.warn(msg);
				}
			}
		},
		info : function(msg){
			if(!!window.console){
				if(debug){
					window.console.info(msg);
				}
			}
		},
		error : function(msg){
			if(!!window.console){
				if(debug){
					window.console.error(msg);
				}
			}
		}
	}
	Common.freeze(Logger);//冻结对象属性
	module.exports = Logger;
});