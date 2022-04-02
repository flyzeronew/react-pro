import React from "react";
import arrow from './images/icon_label01.svg';

class Header extends React.Component {
  render () {
    let imgtag = 'img';
    return (
        <div className="program_header">
            <div className="program_header_box">
        
                <div class="program_header_box_hamburger">
                    <div class="program_header_box_hamburger1">
                        <ul class="font20_1">

                            <li><a href="#">商品資訊</a></li>
                            <li><a href="#">完整影音</a></li>
                            <li><a href="#">達人推薦</a></li>
                            <li><a href="#">達人會客室</a></li>
                            <li><a href="#">試用報告</a></li>
                            <li><a href="#">雜誌訂閱</a></li>

                            <li>
                            <a href="#">更多＋</a>

                        
                            <div class="program_header_box_hamburger1_child">
                            <ul class="font16_3">
                            <li><a href="#">子項目選單</a></li>
                            <li><a href="#">子項目選單</a></li>
                            <li><a href="#">子項目選單</a></li>
                            <li><a href="#">子項目選單</a></li>
                            <li><a href="#">子項目選單</a></li>
                            <li><a href="#">子項目選單</a></li>
                            </ul>
                            </div>
                 
                            </li>

                        </ul>
                    </div>

                    <div class="program_header_box_hamburger_community">
                
                        <div class="community_btn">
                            <ul>
                                <li class="font16_1"><a href="#">加入</a></li>
                                <li class="font16_2"><a href="#">訂閱</a></li>
                            </ul>
                        </div>
                
                    </div>
                </div>


                <div class="program_header_titel font26_1"><a href="http://woman.tvbs.com.tw/">節目公版</a></div>          
                <div className="program_header_nav">
                    <ul className="font20_1">
                        <li><a href="#">商品資訊</a></li>
                        <li><a href="#">完整影音</a></li>
                        <li><a href="#">達人推薦</a></li>
                        <li><a href="#">達人會客室</a></li>
                        <li><a href="#">試用報告</a></li>
                        <li><a href="#">雜誌訂閱</a></li>        
                        <li>
                            <a href="#">更多＋</a>                    
                            <div class="program_header_nav_child">
                                <ul>
                                    <li className="font16_3"><a href="#">子選單1</a></li>
                                    <li className="font16_3"><a href="#">子選單2</a></li>
                                    <li className="font16_3"><a href="#">子選單3</a></li>
                                </ul>
                            </div>
                        </li>  
                    </ul>
                </div>
                
                <div class="program_header_community">
                    <div class="community_btn">
                        <ul>
                            <li class="font16_1"><a href="#">加入</a></li>
                            <li class="font16_2"><a href="#">訂閱</a></li>
                        </ul>
                    </div>
                </div>

                <div class="program_header_arraw"><img src={arrow} alt={imgtag} /></div>
            </div>
        </div>
    );
  }
};
export default Header;