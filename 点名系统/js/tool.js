//获取Id命名的元素
function $(id){
	return document.getElementById(id);
}
//获取minNum-maxNum之间的随机数
function getRand(minNum,maxNum){
	return Math.floor(Math.random()*(maxNum-minNum+1)) + minNum; 
}
//判断一个数是否是素数
function isPrime(num){
	//var flage = true;
	for (var i = 2; i < num; i++) {
		if(num%i==0){
			//flage = false;
			return false;
		}
	}
	return true;
}
//获取随机十六进制颜色
function getRandColor(){
	var strColor = "#";
	var str = "0123456789abcdef";
	for (var i = 0; i < 6; i++) {
		var rand = getRand(0,15);//4
		strColor += str.charAt(rand);
	}
	return strColor;
}
//随机验证码
function getRandYZM(num){
	if(num<=0){
		return;
	}
	var YZM = "";
	for (var i = 0; i < num; i++) {
		var ranNum = getRand(48,122);
		if((ranNum >= 58 && ranNum <= 64) || ranNum >=91 && ranNum<=96){
			i--;
		}else{
			var ch = String.fromCharCode(ranNum);
			YZM += ch;
		}
	}
	return YZM;
};
//获取中国式日期
function getMyDate(){
	var time = new String();
	var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	
	var date = new Date();
	var y = date.getFullYear();
	var m = date.getMonth()+1;
	var d = date.getDate();
	var w = date.getDay();
	var h = toDB(date.getHours());
	var M = toDB(date.getMinutes());
	var s = toDB(date.getSeconds());
	
	time += y +"年"+ m +"月"+ d +"日";
    time += " "+h+":"+M+":"+s;
    time += " "+week[w];
    
    return time;
}
function toDB(num){
	return num < 10 ? "0"+num : num;
}
//获取某个时间到现在的时间差（时间数为秒）
function getTimeDiff(date){
	var nowDate = new Date();
	var time = new Date(date);
	return (nowDate.getTime() - time.getTime())/1000;
}

//通过class名称来获取对应的所有元素
function getClassName(cName){
	var ele = document.getElementsByTagName("*");
	var elements = [];
	for (var i = 0; i < ele.length; i++) {
		if(ele[i].className == cName){
			elements.push(ele[i]);
		}
	}
	return elements;
}

//跨浏览器兼容事件事件对象的btton属性
function getButton(eve){//放在事件处理函数中使用。
	var e = eve || event;
	if(eve){//高版本浏览器使用
		return eve.button;
	}else if(window.event){//ie低版本浏览器使用
		switch(e.button){
			case 0 : 
				return 0;
			case 4 :
				return 1;
			case 2 : 
				return 2;
		}
	}
}

//跨浏览器阻止事件冒泡行为
function stopPropa(e){
	var e = e || event;
	if(e.stopPropagation){//高版本浏览器使用
		return e.stopPropagation();	
	}else{//低版本ie浏览器使用
		return e.cancelBubble = true;
	};
}
//跨浏览器取消浏览器默认行为
function stopDefault(e){
	var e = e || event;
	if(e.preventDefault){//高版本浏览器使用
		return e.preventDefault()
	}else{//低版本ie浏览器使用
		return e.returnValue = false;
	}	
}
//跨浏览器事件绑定
function addEvent(ele,eve,callback){
	if(ele.addEventListener){
		ele.addEventListener(eve,callback);//高版本浏览器
	}else{
		ele.attachEvent("on"+eve,callback);//低版本ie使用
	}
}
//碰撞
function pz(ele1,ele2){
	
	var ele1Rect = ele1.getBoundingClientRect();
	var ele2Rect = ele2.getBoundingClientRect();
	
	var ele1Left = ele1Rect.left;
	var ele1Right = ele1Rect.right;
	var ele1Top = ele1Rect.top;
	var ele1Bottom = ele1Rect.bottom;
	
	var ele2Left = ele2Rect.left;
	var ele2Right = ele2Rect.right;
	var ele2Top = ele2Rect.top;
	var ele2Bottom = ele2Rect.bottom;
	
	if(ele1Right < ele2Left || ele1Top > ele2Bottom || ele1Bottom < ele2Top || ele1Left > ele2Right){
		return false;
	}else{
		return true;
	}
}