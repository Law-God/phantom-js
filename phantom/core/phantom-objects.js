define(function(require,exports,module){
	var _$=require("./lib/jqueryCMD");
	var _Common=require("./util/util-common");
	var _Browser=require("./util/util-browser");
	var _DateUtil=require("./util/util-date");
	var _DomUtil=require('./util/util-dom');
	var _MaskLayerUtil=require('./util/util-maskLayer');
	var _Logger=require("./util/util-logger");
	var _NumberUtil=require("./util/util-number");
	var _Path=require("./util/util-path");
	var _StringUtil=require("./util/util-string");
	var _Validate=require("./util/util-validate");
    var _MD5=require("./util/util-md5");
	var _AjaxUtil=require('./util/util-ajax');
	module.exports = {
		$ : _$,
		Browser : _Browser,
		Common : _Common,
		DateUtil : _DateUtil,
		DomUtil : _DomUtil,
		Logger : _Logger,
		NumberUtil : _NumberUtil,
		Path : _Path,
		StringUtil : _StringUtil,
		Validate : _Validate,
        MD5 : _MD5,
		AjaxUtil : _AjaxUtil,
		MaskLayerUtil:_MaskLayerUtil
	}
});