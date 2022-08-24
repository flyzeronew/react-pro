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
        });
        //蓋板廣告
      }
    render(){return (
    <div className="MyAdjs">
    </div>)}
}

