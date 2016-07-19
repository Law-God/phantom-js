define(function(require,exports,module){
	var CommonUtil=require('./util-common');
	var $=require('../lib/jqueryCMD');

	var idCardPath='./validate/validate-idcard';

	var ValidateUtil = 	{
		isObject : function(obj){
			return isType(obj,'Object');
		},
		isString : function(string){
			return isType(string,'String');
		},
		isArray : function(array){
			return isType(array,'Array');
		},
		isFunction : function(func){
			return isType(func,'Function');
		},
		isUndefined : function(undefined){
			return (undefined == 'Undefined' || $.trim(undefined) == '') ? true : false;
		},
		isNumber : function(number){
			return isType(number,'Number');
		},
		isDate : function(date){
			return isType(date,'Date');
		},
		//是否是html元素
		isHtmlElement : function(element){
			return /^\[object HTML[a-zA-Z]*Element\]$/.test({}.toString.call(element));
		},
		//正整数
		isPositiveInteger : function(number){
			if(number != null && number != ''){
				var r,reg=/^[1-9]\d*$/;
				r = String(number).match(reg);
				return r==number ? true : false;
			}
			else{
				return false;
			}
		},
		//负整数
		isNegativeInteger : function(number){
			if(number != null && number != ''){
				var r,reg=/^-[1-9]\d*$/;
				r = String(number).match(reg);
				return r==number ? true : false;
			}
			else{
				return false;
			}
		},
		//整数
		isInteger : function(number){
		if(number != null && number != ''){
				var r,reg=/^-?[1-9]\d*$/;
				r = String(number).match(reg);
				return r==number ? true : false;
			}
			else{
				return false;
			}
		},
		//非负整数（正整数+0）
		isNonNegativeInteger : function(number){
			if(number != null && number != ''){
				var r,reg=/^[1-9]\d*$/;
				r = String(number).match(reg);
				return r==number ? true : false;
			}
			else if(String(number) == '0'){
				return true;
			}
			else{
				return false;
			}
		},
		//非正整数（负整数+0）
		isNonNegativeInteger : function(number){
			if(number != null && number != ''){
				var r,reg=/^-[1-9]\d*$/;
				r = String(number).match(reg);
				return r==number ? true : false;
			}
			else if(String(number) == '0'){
				return true;
			}
			else{
				return false;
			}
		},
		//正浮点数
		isPositiveFloat : function(number){
			var reg = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/;
			return reg.test(number);
		},
		//负浮点数
		isNegativeFloat : function(number){
			var reg = /^-[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/;
			return reg.test(number);
		},
		//中文
		isChinese : function(chinese){
			var reg = /^[\u4e00-\u9fa5]$/;
			return reg.test(chinese);
		},
		//Email
		isEmail : function(email){
			var reg = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/;
			return reg.test(email);
		},
		//身份证号码
		isIdCard : function(cardNo){
			var IdCard =  require(idCardPath);
			return IdCard.isIdCard(cardNo);
		},
		isEmpty : function(param){
			return !!param;
		}

	}

	CommonUtil.freeze(ValidateUtil);//冻结对象属性
	module.exports = ValidateUtil;

	//Object String Array Function Undefined
	function isType(obj,type) {
		//or  return Object.prototype.toString.call(obj) === "[object " + type + "]";
		return {}.toString.call(obj) == "[object " + type + "]"
	}

});