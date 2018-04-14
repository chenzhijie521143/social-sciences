$(function(){
	var cur=null;
	var flag=true;
	$menu_item=$('#menu .title>a');
    $con=$('#menu .menu-two');
	$item=$con.find('.two-item');
	// 展开、收起 菜单
	$menu_item.click(function(){	
		// 节流
		if(flag){
			flag = false;
			setTimeout(function () {
				flag = true;
			}, 500);
            
			// 同辈元素
			$sibs=$(this).parent().parent().siblings().find('.title>a');
            
			$(this).parent().next().slideToggle().end().toggleClass('active');
		    $sibs.parent().next().slideUp().end().removeClass('active');
		}
	});
    
	// 选取二级菜单
	$item.click(function(){
	   $(this).addClass('active').siblings('li').removeClass('active');
	});

});