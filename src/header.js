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
          menu:[],portal_menu:[],child_menu:[],
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
            <script async src="https://cse.google.com/cse.js?cx=f59bec45b33cb6c21"></script>
            <div className="gcse-search"></div>
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