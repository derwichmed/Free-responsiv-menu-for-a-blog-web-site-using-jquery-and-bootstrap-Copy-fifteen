$(function (){
   $('.drop_down').mouseenter(function (){
        $('.sub_menu:visible').hide();
        subMenuHeight = $(this).find('+ .sub_menu').height();
        $(this).find('+ .sub_menu').show();
        if($(window).width() > 500){
        $(this).find('+ .sub_menu').css('height','50px');
        $(this).find('+ .sub_menu').animate({
            height: subMenuHeight
        }, 300);
        }
   });
   
   $('.drop_down_sub_menu').mouseenter(function (){
        if($(this).find('+ .sub_menu:visible').length == 0){
        subMenuHeight = $(this).find('+ .sub_menu').height();
        $(this).find('+ .sub_menu').show();
        if($(window).width() > 500){
        $(this).find('+ .sub_menu').css('height','50px');
        $(this).find('+ .sub_menu').animate({
            height: subMenuHeight
        }, 300);
        }}
   });
   
   $('.sub_menu_item .sub_menu').mouseleave(function (){
        $(this).hide(); 
   });
   
   $('.search_box_item > div:nth-child(1)').click(function (){
        $('.search_box_menu:visible').hide();
        $(this).find('+ .search_box_menu').show();
        $('.sub_menu:visible').hide();
   });
   
   $('.search_box_menu_item').click(function (){
      $('.search_box_menu').hide(); 
   });
   
   $('.logo_navs img:nth-child(1)').click(function(){
            $('.header_nav_bar').css('width','50px');
            $('.header_nav_bar').show();
            $('.header_nav_bar').animate({
                width: '70%'
            }, 150);
   });
   
   $('.header_nav_bar_mobile_header img:nth-child(2)').click(function(){
       $('.header_nav_bar').fadeOut("slow");
   });
});