import React from "react";
import $ from 'jquery';
import queryString from "query-string";

export default class MyAdjs  extends React.Component {
    componentDidMount(){

    // 大首頁共用
    
    
    $(document).ready(function(){ 
        //蓋板廣告
        if(document.body.clientWidth >=768) {
            $('.lightbox_ad').remove();
        }
        $('.ad_xx').click(function(){
            $('.lightbox_ad').remove();
        });


        setInterval(function() {$(".ad_xx").show();},2000); 
        function receiveMessageFromIframePage (event) 
        {
            if(event.data.msg == "MessageFromIframePage")
            {
                $(".lightbox_ad").show();
                $(".lightbox_ad").css("z-index","2147483647");
                $(".cookie_box").css("z-index","2147483646")
            }
        }

        window.addEventListener("message", receiveMessageFromIframePage, false);
        //蓋板廣告 end


        //手機底版廣告
        $(window).scroll(function(){
            var $all_h=$(window).scrollTop() + $(window).height();
            var $obj_h=$('footer').outerHeight()+10;
            var $header_h=$('header').outerHeight();
            var $main_h=$('main').outerHeight();
            var $foot_top= $header_h+$main_h;
            var $bottom_ad_h=$('.flexd_bottom_ad').outerHeight();
    
   
            if ($(window).width()>767){
                $(".flexd_bottom_ad").hide();
                if($all_h > $foot_top) {
                    //alert("near bottom!");
                    $("#back").css({"bottom":$obj_h});
                }else{
                    $("#back").css({"bottom":"20px"});
                }
            }else{
                if ($(window).scrollTop()>50){
                    $(".flexd_bottom_ad").show();
                }else{
                    $(".flexd_bottom_ad").hide();
                }
                if($all_h > $foot_top) {
                    //alert("near bottom!");
                    $("#back").css({"bottom":$obj_h+$bottom_ad_h-5,"transition":"0.3s"});
                    $(".flexd_bottom_ad").css({"bottom":$obj_h-10});
    
                }else{
                    $("#back").css({"bottom":$bottom_ad_h+5,"transition":"0.3s"});
                    $(".flexd_bottom_ad").css({"bottom":"0px"});
                }
            }
         });
        //手機底版廣告 end


        });
       
      }
    render(){return (
    <div className="MyAdjs">
    </div>)}
}

