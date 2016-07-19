define(function(require,exports,module){
	"use strict";
	var $ = require('../lib/jqueryCMD');
	var Common = require('./util-common');
	var Logger = require('./util-logger');

	var _browserObj = $.browser;
	var _isIE = $.browser.msie == undefined ? false : true;
	var _isMozilla = $.browser.mozilla == undefined ? false : true;
	var _isSafari = $.browser.safari == undefined ? false : true;
	var _isOpera = $.browser.opera == undefined ? false : true;
	var _isChrome = !!$.browser.chrome;
	var _version = $.browser.version;
		
	var _browser = (function(){
		if(_isIE){
			return "IE";
		}else if(_isMozilla){
			return "Mozilla";
		}else if(_isSafari){
			return "Safari";
		}else if(_isOpera){
			return "Opera";
		}else if(_isChrome){
			return "Chrome";
		}else{
			return "Unknow";
		}
	})();

	var Browser = {
		browserObj : _browserObj,
		isIE : _isIE,
		isMozilla : _isMozilla,
		isSafari : _isSafari,
		isOpera	: _isOpera,
		isChrome : _isChrome,
		version : _version,
		versionInt : parseInt(_version,10),
		browserStr : _browser
		
	};
	
	Common.freeze(Browser);//冻结对象属性
	module.exports = Browser;
});