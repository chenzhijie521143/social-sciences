$(function(){
	
	//单选按钮切换
	$oDd=$("#dl>dd");
	$oDd.each(function(){
		$(this).click(function(){
			$(this).addClass("selected").siblings('dd').removeClass("selected");
		});
	});
});
