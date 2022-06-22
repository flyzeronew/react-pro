import React from "react";
import $ from 'jquery';

export default class Myjs  extends React.Component {

    componentDidMount(){

        $(window).scroll(function(){object_scroll(); });
        function object_scroll(){
        if($(window).scrollTop()>50){
            $('#back').fadeIn(300);
        }else{
            $('#back').hide();
        }
       }
        /*gotop*/
        var $el = $(scrollableElement('html', 'body'));
        var speed = 550;
        var $iconTOP = $('#back-img1');
        $($iconTOP).click(function(event) {
            event.preventDefault();
            $el.stop().animate({ scrollTop: -50 }, speed);
        });
        // 透過scrollTop檢測可用元素的函數// http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links#update4
        function scrollableElement() {
            var i, len, el, $el, scrollable;
            for (i = 0, len = arguments.length; i < len; i++) {
                el = arguments[i];
                $el = $(el);
                if ($el.scrollTop() > 0) {

                    return el;
                } else {
                    $el.scrollTop(1);
                    scrollable = $el.scrollTop() > 0;
                    $el.scrollTop(0);
                    if (scrollable) {
                        return el;
                    }
                }
            }
            return [];
        }
        /*gotop ed*/

        $('.program_content2_main_button li').each(function(i){
            $('.program_content2_main .program_content2_main_button li').eq(i).click(function(){
            $('.program_content2_main .program_content2_main_button li').children('.button01 a').removeClass('active');
            $('.program_content2_main .program_content2_main_button li').eq(i).children('.button01 a').addClass('active');
            
            $('.program_content2_main .program_content2_main_box .program_content_main_information2').css({display:'none'});
            $('.program_content2_main .program_content2_main_box .program_content_main_information2').eq(i).fadeIn(500);
            });
            
            
        });
        
        $('.program_header_nav li').each(function(i){
            $('.program_header_nav li').eq(i).mouseover(function(){
            $('.program_header_nav_child').css({display:'none'});
            $('.program_header_nav li').eq(i).find('.program_header_nav_child').css({display:'block'});
            });
            
            $('.program_header_box').mouseleave(function(){
            $('.program_header_nav_child').css({display:'none'});
            });
        });

        $('.program_header_arraw').click(function(){
            $(this).toggleClass('open1');            
            if($(this).hasClass('open1')){
                $(this).css({transform:'rotate(90deg)',transition:'0.3s'});
                $('.program_header_box_hamburger').slideDown();
                }else{
                    $(this).css({transform:'rotate(0deg)',transition:'0.3s'});
                $('.program_header_box_hamburger').slideUp();
                $('.program_header_box_hamburger1_child').slideUp();
                }
            });
            
            $('.program_header_box_hamburger1 li').each(function(i){
                $('.program_header_box_hamburger1 li').eq(i).click(function(){
            
                $('.program_header_box_hamburger1_child').slideUp();
                $('.program_header_box_hamburger1 li').eq(i).find('.program_header_box_hamburger1_child').slideDown();
                
                });
            });
      
      }    
    render(){return (
    <div className="myjs">
    </div>)}
}

