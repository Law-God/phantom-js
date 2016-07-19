define(function(require,exports,module){
	var Common=require('./util-common');

	var Path = {
		rootPath : function(){
			//获取当前网址，如： http://localhost:8080/SSI/lgoin/login.jsp
			var curWwwPath = window.document.location.href;
			//获取主机地址之后的目录，如： /SSI/lgoin/login.jsp
			var pathName = window.document.location.pathname;
			var pos = curWwwPath.indexOf(pathName);
			//获取主机地址，如： http://localhost:8080
			var localhostPath = curWwwPath.substring(0, pos);
			//获取带"/"的项目名，如：/SSI
			var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
			return(localhostPath + projectName);
		}
	};

	Common.freeze(Path);//冻结对象属性
	module.exports = Path;
});