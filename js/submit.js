$(function(){
	$oDd1=$(".level1>dd");
	$oDd2=$(".level2>dd");
	// 一级分类
	selectedRadio($oDd1);
	// 二级分类
	selectedRadio($oDd2);
	
	// 单选按钮切换
	function selectedRadio($el){
		$el.each(function(){
			$(this).click(function(){
				$(this).addClass("selected").siblings('dd').removeClass("selected");
			});
		});
	}
});
