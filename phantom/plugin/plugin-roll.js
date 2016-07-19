/* 无缝向上滚动 */
/* 
	html 结构
	<div id="rollSup" style="overflow:hidden;height:200;width:90;">
		<div id="rollId">
			<span>数据区</span>
		</div>
		<div id="rollBro"></div>
	</div>
*/
define(function(require,exports,module){
	var Objects=require('core/phantom-objects');
	
	var $=Objects.$;
	var Logger=Objects.Logger;
	var Validate=Objects.Validate;

	
	//默认配置参数
	var defaults = {
			rollId : '',
			rollBroId : '',
			rollSupId : '',
			speed : 30//滚动速度ms
	};
	
	var rollId,rollSup,rollBro;


	module.exports = function(options){
		var settings = $.extend(defaults,options);
		rollId=settings.rollId;
		rollSup=settings.rollSupId;
		rollBro=settings.rollBroId;

		var _id = '#'+settings.rollId;
		var _speed = settings.speed;

		if(Validate.isUndefined(_id)){
			Logger.log('rollId不能为空');
			return ;
		}

		//$(_id).wrap($_rollSupDiv); //添加父节点
		//$_rollBroDiv.insertAfter($(_id));//添加兄弟节点

		document.getElementById(rollBro).innerHTML=document.getElementById(rollId).innerHTML //克隆rollId为rollBro

		var rollMar=setInterval(rollMarquee,_speed); //设置定时器

		//鼠标移上时清除定时器达到滚动停止的目的
		$('#'+rollSup).mouseover(function(){
			clearInterval(rollMar)
		});

		//鼠标移开时重设定时器
		$('#'+rollSup).mouseout(function(){
			rollMar=setInterval(rollMarquee,_speed);
		});

	}

	function rollMarquee(){
		var rollObj=document.getElementById(rollId);
		var rollSupObj=document.getElementById(rollSup);
		var rollBroObj=document.getElementById(rollBro);

		//console.log(rollBroObj.offsetTop-rollObj.scrollTop);

		if(rollBroObj.offsetTop-rollSupObj.scrollTop<=0){ //当滚动至roll与rollBro交界时
			rollSupObj.scrollTop-=rollObj.offsetHeight; //rollSup跳到最顶端
		}else{
			rollSupObj.scrollTop++;
		}
	}



});