import React from "react";
import $ from 'jquery';
import arrow from './images/icon_label01.svg';
import tvbslogo from './images/TVBS_logo.svg';
import searchbtn from './images/search_btn.svg';
import ham from './images/ham.svg';
import ham_close from './images/ham_close.svg';
import dropdown from './images/dropdown.svg';
import './css/main.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          menu:[],
        };
    }
    componentDidMount(){        

        fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/menu?id='+this.props.get_id)
        .then(res => res.json())
        .then(json => this.setState({
            title:json.program.title,
            url:json.program.og_url,
            fb:json.program.facebook,
            yt:json.program.youtube,
            menu:json.data,
        }));

        fetch('https://www.tvbs.com.tw/portal/header?api=header&route=pc')
        .then(res => res.text())
        .then(text => this.setState({
            header:text
        }));

    }



  render () {
    return (
        <div className="program_header">
      
            <div className="main_header">
                <div className="header_inner">
                    <h1 className="header_logo"><a href="https://www.tvbs.com.tw/" title="TVBS"><img src={tvbslogo} alt={this.props.logo}/></a></h1>                    
                    <div className="header_search_pc">
                        <input className="search_input" type="search" placeholder="關鍵字"/>
                        <button class="search_btn"><img src={searchbtn} alt="search_btn" title="search_btn"/></button>
                        <a class="en_page" href="https://www.tvbs.com.tw/ours/en" target="_new">EN</a>                        
                    </div>

                    <div className="header_search_m">
                        <button className="search_btn"><img src={searchbtn} alt="search_btn" title="search_btn"/></button>
                        <button className="ham"><img src={ham} alt="hamburger_selector"/></button>
                        <div className="search_page">
                            <div className="search_page_inner">
                                <input className="search_page_input" type="search" placeholder="請輸入關鍵字"/>
                                <button className="search_page_btn">搜尋</button>
                            </div>
                        </div>
                    </div>
                </div>

                <nav>
                    
                    <div className="nav_bg"></div>                    
                    <div className="nav_inner_pc" dangerouslySetInnerHTML={{__html: this.state.header}} ></div>
                    <div className="m_box">
                        <div className="ham_close"><img src={ham_close} alt="ham_close"/></div>
                        <div className="nav_inner_m" dangerouslySetInnerHTML={{__html: this.state.header}} ></div>
                    </div>
                    
                    {/* <ul className="nav_inner_pc">
                        <li><a href="https://news.tvbs.com.tw/" target="_new">TVBS新聞</a></li>
                        <li><a href="https://woman.tvbs.com.tw/" target="_new">女人我最大</a></li>
                        <li><a href="https://supertaste.tvbs.com.tw/" target="_new">食尚玩家</a></li>
                        <li><a href="https://health.tvbs.com.tw/" target="_new">健康2.0</a></li>
                        <li><a href="https://cars.tvbs.com.tw/" target="_new">地球黃金線</a></li>
                        <li><a href="##">節目</a>
                            <div className="nav_sub">
                                <a href="">TVBS 文莤的世界周報</a>
                                <a href="https://focus.tvbs.com.tw/">Focus 全球新聞</a>
                                <a href="https://2100.tvbs.com.tw/">少康戰情室</a>
                                <a href="https://bellesshow.tvbs.com.tw/">國民大會</a>
                                <a href="https://new-taiwan.tvbs.com.tw/">一步一腳印 發現新台灣</a>
                                <a href="https://people.tvbs.com.tw/">看板人物</a>
                                <a href="https://chinaing.tvbs.com.tw/">中國進行式</a>
                                <a href="https://change.tvbs.com.tw/">世界翻轉中</a>
                                <a href="https://showbiz.tvbs.com.tw/">當掌聲響起</a>
                                <a href="https://t-viewpoint.tvbs.com.tw/">T 觀點</a>
                                <a href="">11 點熱吵店</a>
                                <a href="">T-POP 我們聽大的</a>
                                <a href="">新聞大白話</a>
                            </div>
                        </li>
                        <li><a href="##">戲劇</a>
                            <div class="nav_sub">
                                <a href="https://event.tvbs.com.tw/drama/smart_campus_life" target="_new">機智校園生活</a>
                                <a href="https://drama.tvbs.com.tw/endlesslove/" target="_new">天堂的微笑</a>
                                <a href="https://drama.tvbs.com.tw/girlspower/" target="_new">女兵日記</a>
                                <a href="https://drama.tvbs.com.tw/firstlove/" target="_new">初戀的情人</a>
                                <a href="https://drama.tvbs.com.tw/sprouttvbs/" target="_new">翻牆的記憶</a>
                                <a href="https://drama.tvbs.com.tw/familytime/" target="_new">酸甜之味</a>
                                <a href="https://drama.tvbs.com.tw/standbyme/" target="_new">在一起，就好</a>
                                <a href="https://drama.tvbs.com.tw/lifelist/" target="_new">遺憾拼圖</a>
                                <a href="https://drama.tvbs.com.tw/thewaywewere/" target="_new">16個夏天</a>
                                <a href="https://drama.tvbs.com.tw/" target="_new">戲劇製作部</a>
                            </div>
                        </li>
                        <li><a href="https://www.trendyfood.com.tw/" target="_new">享食尚</a></li>
                        <li><a href="https://tvbsf.tvbs.com.tw/" target="_new">基金會</a></li>
                        <li><a href="##">頻道資訊</a>
                            <div class="nav_sub">
                                <a href="https://schedule.tvbs.com.tw/">節目表</a>
                                <a href="http://vip.tvbs.com.tw/project/tvbse/activity/event/" target="_new">TVBS 精采台</a>
                                <a href="https://www.tvbs.com.tw/ours/en/tvbsasia"> TVBS Asia</a>
                                <a href="https://www.tvbs.com.tw/newmediatv">新媒體數位節目</a>
                            </div>
                        </li>
                        <li><a href="##">更多</a>
                            <div class="nav_sub">
                                <a href="https://www.tvbs.com.tw/ours/company">關於我們</a>
                                <a href="https://www.tvbs.com.tw/ours/advertise">業務服務</a>
                                <a href="https://www.tvbs.com.tw/careers/" target="_new">人才招募</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="nav_inner_m">                        
                        <li><a href="https://news.tvbs.com.tw/" target="_new">TVBS新聞</a></li>
                        <li><a href="https://woman.tvbs.com.tw/" target="_new">女人我最大</a></li>
                        <li><a href="https://supertaste.tvbs.com.tw/" target="_new">食尚玩家</a></li>
                        <li><a href="https://health.tvbs.com.tw/" target="_new">健康2.0</a></li>
                        <li><a href="https://cars.tvbs.com.tw/" target="_new">地球黃金線</a></li>
                        <li><a className="nav_subtitle_m" href="##">節目 <img src={dropdown} alt="dropdown"/></a>
                            <div className="nav_sub_m">
                                <a href="##">TVBS 文莤的世界周報</a>
                                <a href="https://focus.tvbs.com.tw/">Focus 全球新聞</a>
                                <a href="https://2100.tvbs.com.tw/">少康戰情室</a>
                                <a href="https://bellesshow.tvbs.com.tw/">國民大會</a>
                                <a href="https://new-taiwan.tvbs.com.tw/">一步一腳印 發現新台灣</a>
                                <a href="https://people.tvbs.com.tw/">看板人物</a>
                                <a href="https://chinaing.tvbs.com.tw/">中國進行式</a>
                                <a href="https://change.tvbs.com.tw/">世界翻轉中</a>
                                <a href="https://showbiz.tvbs.com.tw/">當掌聲響起</a>
                                <a href="https://t-viewpoint.tvbs.com.tw/">T 觀點</a>
                                <a href="##">11 點熱吵店</a>
                                <a href="##">T-POP 我們聽大的</a>
                                <a href="##">新聞大白話</a>
                            </div>
                        </li>
                        <li><a className="nav_subtitle_m" href="##">戲劇 <img src={dropdown} alt="dropdown"/></a>
                            <div className="nav_sub_m">
                            <a href="https://event.tvbs.com.tw/drama/smart_campus_life" target="_new">機智校園生活</a>
                            <a href="https://drama.tvbs.com.tw/endlesslove/" target="_new">天堂的微笑</a>
                            <a href="https://drama.tvbs.com.tw/girlspower/" target="_new">女兵日記</a>
                            <a href="https://drama.tvbs.com.tw/firstlove/" target="_new">初戀的情人</a>
                            <a href="https://drama.tvbs.com.tw/sprouttvbs/" target="_new">翻牆的記憶</a>
                            <a href="https://drama.tvbs.com.tw/familytime/" target="_new">酸甜之味</a>
                            <a href="https://drama.tvbs.com.tw/standbyme/" target="_new">在一起，就好</a>
                            <a href="https://drama.tvbs.com.tw/lifelist/" target="_new">遺憾拼圖</a>
                            <a href="https://drama.tvbs.com.tw/thewaywewere/" target="_new">16個夏天</a>
                            <a href="https://drama.tvbs.com.tw/" target="_new">戲劇製作部</a>
                            </div>
                        </li>
                        <li><a href="https://www.trendyfood.com.tw/" target="_new">享食尚</a></li>
                        <li><a href="https://tvbsf.tvbs.com.tw/" target="_new">基金會</a></li>
                        <li><a class="nav_subtitle_m" href="#">頻道資訊 <img src={dropdown} alt="dropdown"/></a>
                            <div class="nav_sub_m">
                                <a href="https://schedule.tvbs.com.tw/">節目表</a>
                                <a href="http://vip.tvbs.com.tw/project/tvbse/activity/event/" target="_new">TVBS 精采台</a>
                                <a href="https://www.tvbs.com.tw/ours/en/tvbsasia"> TVBS Asia</a>
                                <a href="https://www.tvbs.com.tw/newmediatv">新媒體數位節目</a>
                            </div>
                        </li>
                        <li><a className="nav_subtitle_m" href="#">更多 <img src={dropdown} alt="dropdown"/></a>
                            <div className="nav_sub_m">
                                <a href="https://www.tvbs.com.tw/ours/company">關於我們</a>
                                <a href="https://www.tvbs.com.tw/ours/advertise">業務服務</a>
                                <a href="https://www.tvbs.com.tw/careers/" target="_new">人才招募</a>
                            </div>
                        </li>

                    </ul> */}
                </nav>
            </div>

            <div className="program_header_box">
                <div className="program_header_box_hamburger">
                    <div className="program_header_box_hamburger1">
                        <ul className="font20_1">
                            {
                                this.state.menu.length == 0
                                ? 'Loading menu...'
                                : this.state.menu.map(key => (
                                <li key={key.id}>
                                <a href={key.url}>{key.title}</a>
                                </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="program_header_box_hamburger_community">

                        <div className="community_btn">
                            <ul>
                                {
                                this.state.fb=="" ? "" :                            
                                <li className="font16_1"><a href={this.state.fb}>訂閱</a></li>
                                }
                                {
                                this.state.yt=="" ? "" :                            
                                <li className="font16_2"><a href={this.state.yt}>訂閱</a></li>
                                }
                            </ul>
                        </div>
                
                    </div>
                </div>


                <div class="program_header_titel font26_1"><a href={this.state.url}>{this.state.title}</a></div>
                <div className="program_header_nav">
                    <ul className="font20_1">
                        {
                            this.state.menu.length == 0
                            ? 'Loading menu...'
                            : this.state.menu.map(key => (
                            <li key={key.id}>
                            <a href={key.url}>{key.title}</a>
                            </li>
                            ))
                        }
                    </ul>
                </div>
                
                <div className="program_header_community">
                    <div className="community_btn">
                        <ul>                            
                            {
                              this.state.fb=="" ? "" :                            
                              <li className="font16_1"><a href={this.state.fb}>訂閱</a></li>
                            }
                            {
                              this.state.yt=="" ? "" :                            
                              <li className="font16_2"><a href={this.state.yt}>訂閱</a></li>
                            }                           
                        </ul>
                    </div>
                </div>

                <div class="program_header_arraw"><img src={arrow} alt={this.props.img} /></div>
            </div>
        </div>
    );
  }
};
export default Header;