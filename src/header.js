import React from "react";
import $ from 'jquery';
import arrow from './images/icon_label01.svg';
import tvbslogo from './images/TVBS_logo.svg';
import searchbtn from './images/search_btn.svg';
import ham from './images/ham.svg';
import ham_close from './images/ham_close.svg';
import dropdown from './images/dropdown.svg';
import cover_ad_xx from './images/idle_xx.png';
import cover_ad from './images/ad_360x540.PNG';
import fix_ad from './images/ad_320x50.png';
import './css/main.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DFPSlotsProvider, AdSlot } from 'react-dfp';
import MyAdjs from './MyAdjs';

class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          menu:[],portal_menu:[],child_menu:[]
        };
    }
    componentDidMount(){        

        fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/menu?id='+this.props.get_id)
        .then(res => res.json())
        .then(json => this.setState({
            title:json.program.title,url:json.program.og_url,
            fb:json.program.facebook,yt:json.program.youtube,menu:json.data,
        }));

        fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/portal_menu')
        .then(res => res.json())
        .then(json => this.setState({
            portal_menu:json.portal_menu,
        }));

    }

  render () {
    return (

        <div className="program_header">
             <DFPSlotsProvider dfpNetworkId={'31610311'}>
                 <AdSlot sizes={[[320, 480]]}  slotId="fixed_ad"  adUnit="v4_focus_m_index_bottom" />
             </DFPSlotsProvider>
            {/* floating banner */}
            <div class="flexd_bottom_ad" id="fixed_ad"></div> 
            {/* <div class="flexd_bottom_ad"><img src={fix_ad} alt="close lightbox"/></div>  */}
            {/* floating banner ed */}

             {/*  蓋版廣告 */}
             <div  class="lightbox_ad" style={{ display: 'none'}}>
                 <div class="box">
                    <div class="img">
                        <div class="xx ad_xx" style={{ display: 'none', zIndex : 1}} ><img src={cover_ad_xx} alt="close lightbox"/></div>
                            <DFPSlotsProvider dfpNetworkId={'31610311'}>
                                <AdSlot sizes={[[320, 480]]}  slotId="cover_ad_xx"  adUnit="v4_focus_m_index_splash" />
                            </DFPSlotsProvider>
                            <div id="cover_ad_xx"></div>
                            {/* <div id="cover_ad_xx"><img src={cover_ad} alt="close lightbox"/></div> */}
                    </div>
                </div>
            </div>
            <MyAdjs />
             {/*  蓋版廣告 end */}
            <script async src="https://cse.google.com/cse.js?cx=f59bec45b33cb6c21"></script>
            <div className="google-search">
                <div className="gcse-search"></div>
            </div>
            <div className="main_header">
                <div className="header_inner">
                    <h1 className="header_logo"><a href="https://www.tvbs.com.tw/" title="TVBS"><img src={tvbslogo} alt={this.props.logo}/></a></h1>
                    <div className="header_search_pc">
                        <input className="search_input" type="search" id="search" placeholder="關鍵字"/>
                        <button class="search_btn" id="search_button"><img src={searchbtn} alt="search_btn" title="search_btn"/></button>
                        <a class="en_page" href="https://www.tvbs.com.tw/ours/en" target="_new">EN</a>
                    </div>

                    <div className="header_search_m">
                        <button className="search_btn"><img src={searchbtn} alt="search_btn" title="search_btn"/></button>
                        <button className="ham"><img src={ham} alt="hamburger_selector"/></button>
                        <div className="search_page">
                            <button class="search_close_btn"><img src={ham_close} alt="ham_close"/></button>                             
                            <div className="search_page_inner">
                                <input className="search_page_input" type="search" id="search_mobile" placeholder="請輸入關鍵字"/>
                                <button id="search_button_mobile" className="search_page_btn">搜尋</button>
                            </div>
                        </div>
                    </div>
                </div>

                <nav>
                    
                    <div className="nav_bg"></div>                    
                    
                    <ul className="nav_inner_pc">                       
                        {
                            this.state.portal_menu.length == 0
                            ? 'Loading menu...'
                            : this.state.portal_menu.map(key => (
                                
                                <li>
                                    <a href={key.url}>{key.title}</a> 
                                        { key.child ? 
                                        <div className="nav_sub">
                                            {
                                                key.child.map(key2 => (
                                                    <a href={key2.url}>{key2.title}</a>
                                                ))
                                            }                                            
                                        </div>
                                        : '' }
                                </li>
                            ))
                        }                       
                    </ul>
                    <ul className="nav_inner_m">      
                      <button class="ham_close"><img src={ham_close} alt="ham_close"/></button>              
                        {
                            this.state.portal_menu.length == 0
                            ? 'Loading menu...'
                            : this.state.portal_menu.map(key => (
                                
                                <li>
                                    <a href={key.url}>{key.title}</a> 
                                        {key.child ?
                                        <div>
                                            <div className="arraw"><img src={dropdown} alt="dropdown"/></div>                                            
                                            <div className="nav_sub">
                                                
                                                {
                                                    key.child.map(key2 => (
                                                        <a href={key2.url}>{key2.title}</a>
                                                    ))
                                                }                                            
                                            </div>
                                        </div>
                                        : '' }
                                </li>
                            ))
                        }
                    </ul>
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


                <div class="program_header_titel font26_1"><a href={"/"+this.props.get_id}>{this.state.title}</a></div>
                <div className="program_header_nav">
                    <ul className="font20_1">
                        {
                            this.state.menu.length == 0
                            ? 'Loading menu...'
                            : this.state.menu.map((key, index) => (
                                index == 0 ?
                                 <li key={key.id}> <a href={"/"+this.props.get_id+'/list'} >{key.title}</a> </li>
                                 :<li key={key.id}> <a href={key.url}>{key.title}</a> </li>
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