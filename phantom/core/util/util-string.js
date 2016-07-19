define(function(require,exports,module){
	var Common=require('./util-common');
	var Logger=require('./util-logger');
	var Validate=require('./util-validate');
	
	var StringUtil = {
		//去掉字符串左右空格
		trim : function(val){
			return val.replace(/(^\s*)|(\s*$)/g, "");
		},
		//去掉字符串左边空格
		trimLeft : function(val){
			return val.repalce(/^\s*/g,"");
		},
		//去掉字符串右边空格
		trimRight : function(val){
			return val.replace(/\s*$/g,"");
		},
		//获取文件名
		fileName : function(fileFullName){
			if(!Validate.isString(fileFullName)){
				Logger.error('文件名不是String类型');
				return fileFullName;
			}else if(fileFullName.lastIndexOf('\.') != -1){
				return fileFullName.substring(0,fileFullName.lastIndexOf('\.'));
			}else{
				return fileFullName;
			}
		},
		fileSuffix : function(fileFullName){
			if(!Validate.isString(fileFullName)){
				Logger.error('文件名不是String类型');
				return fileFullName;
			}else if(fileFullName.lastIndexOf('\.') != -1){
				return fileFullName.substring(fileFullName.lastIndexOf('\.'),fileFullName.length);
			}else{
				return fileFullName;
			}
		}
	};

	Common.freeze(StringUtil);//冻结对象属性
	module.exports = StringUtil;
});