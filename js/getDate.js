$(document).ready(function() { 
	$("#time").datepicker(
	{ 
		prevText: '&#x3c;上月',
		nextText: '下月&#x3e;',
		//showMonthAfterYear: true, // 月在年之后显示       
		changeMonth: true,   // 允许选择月份       
		//changeYear: true,   // 允许选择年份   
		dateFormat:'yy-mm-dd',  // 设置日期格式 
		currentText: '今天',
		monthNames: ['一月','二月','三月','四月','五月','六月',
			'七月','八月','九月','十月','十一月','十二月'],
		monthNamesShort: ['一','二','三','四','五','六',
			'七','八','九','十','十 一','十 二'],
		dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
		dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
		dayNamesMin: ['日','一','二','三','四','五','六'],
		weekHeader: '周',
	}); 
 }); 