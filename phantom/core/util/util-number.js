define(function(require,exports,module){
	var Validate=require('./util-validate');
	var Common=require('./util-common');
	
	var NumberUtil = {
		fmoney : function(s,n){
			return fmoney(s,n);
		},
		n2c : function(n){
			return n2c(n);
		}
	};

	Common.freeze(NumberUtil);//冻结对象属性
	module.exports = NumberUtil;

	//金额格式化 #,##0.00
	function fmoney(s, n) {
        var flag = n;
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse(),
                r = s.split(".")[1];
        t = "";
        for(i = 0; i < l.length; i ++ ) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        if(flag < 1){
            return t.split("").reverse().join("");
        }else{
            return t.split("").reverse().join("") + "." + r;
        }
    }

	//中文金额格式
	function n2c(n) {
        n = parseInt(n);
        if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) return "";
        if (typeof(n) == "number") {
            if ( - 1 == n.toString().indexOf(".")) {
                if(n == 0){
                    return "零元整";
                }
                return _seti2cMoney(n) + "整";
            } else {
                var i, istr, f, fstr, a, rstr;
                a = n.toString().split(".");
                i = a[0];
                f = a[1];
                istr = _seti2cMoney(i);
                fstr = _setf2cMoney(f);
                if(istr.length == 0){
                    rstr = fstr;
                }else{
                    rstr = istr + "零" + fstr;
                }
                rstr = rstr.replace(/零+/g, "零");
                return rstr;
            }
        } else {
            return "---";
        }
    }

	function _seti2cMoney(n) {
        var ns = n.toString();
        var tempstr = "";
        for (var i = 1; i < ns.length + 1; i++) {
            switch (i) {
                case 1:
                    var t = ns.substr(ns.length - i, 1);
                    if (t != "0") {
                        tempstr = t + "元" + tempstr;
                    } else {
                        if(ns.length != 1) {
                            tempstr = "元" + tempstr;
                        }else{
                            tempstr = tempstr;
                        }
                    }
                    break;
                case 2:
                    var t = ns.substr(ns.length - i, 1);
                    if (t != "0") {
                        tempstr = t + "拾" + tempstr;
                    } else {
                        tempstr = "0" + tempstr;
                    }
                    break;
                case 3:
                    var t = ns.substr(ns.length - i, 1);
                    if (t != "0") {
                        tempstr = t + "佰" + tempstr;
                    } else {
                        tempstr = "0" + tempstr;
                    }
                    break;
                case 4:
                    var t = ns.substr(ns.length - i, 1);
                    if (t != "0") {
                        tempstr = t + "仟" + tempstr;
                    } else {
                        tempstr = "0" + tempstr;
                    }
                    break;
                case 5:
                    var t = ns.substr(ns.length - i, 1);
                    if (t != "0") {
                        tempstr = t + "万" + tempstr;
                    } else {
                        tempstr = "万" + tempstr;
                    }
                    break;
                case 6:
                    var t = ns.substr(ns.length - i, 1);
                    if (t != "0") {
                        tempstr = t + "拾" + tempstr;
                    } else {
                        tempstr = "0" + tempstr;
                    }
                    break;
                case 7:
                    var t = ns.substr(ns.length - i, 1);
                    if (t != "0") {
                        tempstr = t + "佰" + tempstr;
                    } else {
                        tempstr = "0" + tempstr;
                    }
                    break;
                case 8:
                    var t = ns.substr(ns.length - i, 1);
                    if (t != "0") {
                        tempstr = t + "仟" + tempstr;
                    } else {
                        tempstr = "0" + tempstr;
                    }
                    break;
                case 9:
                    var t = ns.substr(ns.length - i, 1);
                    if (t != "0") {
                        tempstr = t + "亿" + tempstr;
                    } else {
                        tempstr = "亿" + tempstr;
                    }
                    break;
                case 10:
                    var t = ns.substr(ns.length - i, 1);
                    if (t != "0") {
                        tempstr = t + "拾" + tempstr;
                    } else {
                        tempstr = "0" + tempstr;
                    }
                    break;
                case 11:
                    var t = ns.substr(ns.length - i, 1);
                    if (t != "0") {
                        tempstr = t + "佰" + tempstr;
                    } else {
                        tempstr = "0" + tempstr;
                    }
                    break;
                case 12:
                    var t = ns.substr(ns.length - i, 1);
                    if (t != "0") {
                        tempstr = t + "仟" + tempstr;
                    } else {
                        tempstr = "0" + tempstr;
                    }
                    break;
                default:
                    break;
            }
        }
        return _g2b(tempstr);
    }

    function _setf2cMoney(n) {
        var ns = n.toString();
        var tempstr = "";
        for (var i = 0; i < ns.length; i++) {
            switch (i) {
                case 0:
                    var t = ns.substr(i, 1);
                    if (t != "0") {
                        tempstr += t + "角";
                    }
                    break;
                case 1:
                    var t = ns.substr(i, 1);
                    if (t != "0") {
                        tempstr += t + "分";
                    }
                    break;
                default:
                    break;
            }
        }
        return _g2b(tempstr);
    }


	function _g2b(s) {
        var rs = s.replace(/0+/g, "0");
        rs = rs.replace("0元", "元");
        rs = rs.replace("0亿", "亿");
        rs = rs.replace("0万", "万");
        rs = rs.replace("亿万", "亿");
        rs = rs.replace(/0/g, "零");
        rs = rs.replace(/1/g, "壹");
        rs = rs.replace(/2/g, "贰");
        rs = rs.replace(/3/g, "叁");
        rs = rs.replace(/4/g, "肆");
        rs = rs.replace(/5/g, "伍");
        rs = rs.replace(/6/g, "陆");
        rs = rs.replace(/7/g, "柒");
        rs = rs.replace(/8/g, "捌");
        rs = rs.replace(/9/g, "玖");
        return rs;
    }
	
});