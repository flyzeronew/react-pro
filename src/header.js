import React from "react";
class Header extends React.Component {
  render () {
    return (
        <div className="program_header">
            <div className="program_header_box">            
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
            </div>
        </div>
    );
  }
};
export default Header;