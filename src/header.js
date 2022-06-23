import React from "react";
import arrow from './images/icon_label01.svg';
import Slider from "react-slick";
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
        
    }
    

  render () {    
    return (        
        <div className="program_header">
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