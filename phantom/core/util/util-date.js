/*日期工具*/
define(function(require,exports,module){
	var Validate = require('./util-validate');
	var Common = require('./util-common');
		
	var DateUtil = {
		addDays : function(dateStr,days){
			return arguments.length == 2 ? addDays(dateStr,days) : dateStr;
		},
		dateDiff : function(start, end){
			return dateDiff(start, end);
		},
		millisecond : function(dateStr){//dateStr参数不传，获取当前时间毫秒数
			return arguments.length == 0 ? new Date().getTime() : new Date(dateStr).getTime();
		}
	};

	Common.freeze(DateUtil);//冻结对象属性
	module.exports = DateUtil;

	/*
	*日期加减天数
	*dateStr 日期字符串
	*days	日期天数
	*/
    function addDays(dateStr,days){
        var d=new Date(dateStr);
        d.setDate(d.getDate()+days);
        var month=d.getMonth()+1;
        var day = d.getDate();
        if(month<10){
            month = "0"+month;
        }
        if(day<10){
            day = "0"+day;
        }
        var val = d.getFullYear()+"-"+month+"-"+day;
        return val;
    }

	/*
	*计算日期相差几天
	*start和end是yyyy-MM-dd格式
	*/
    function  dateDiff(start, end){
        var starttime = new Date(start);
        var starttimes = starttime.getTime();

        var endtime = new Date(end);
        var endtimes = endtime.getTime();

        var iDays  =  parseInt(Math.abs(starttimes-endtimes)/1000/60/60/24,10)//把相差的毫秒数转换为天数
        return  iDays;
    }

});