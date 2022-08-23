import React from "react";
class Like extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
          like_arr:[],
        };
    }
    componentDidMount(){        
        fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/menu?id='+this.props.get_id)
        .then(res => res.json())
        .then(json => this.setState({
            title:json.program.title,url:json.program.og_url,
            fb:json.program.facebook,yt:json.program.youtube,menu:json.data,
        }));

        fetch('https://tvbsapp.tvbs.com.tw/program_api/umightlike_article?tbl=6&keywords=西班牙,泰隆尼亞,獨立&id='+this.props.get_detail_id)
        .then(res => res.json())
        .then(json => this.setState({
            like_arr:json.data,
        }));

       
    }
  render () {
    return (
        <div className="program_content_main_detail_like">     
            <div className="program_content_main_detail_like_titel font24_1">你可能也會喜歡</div>
            <div className="program_content_main_information3">
                <ul> 
                       {
                            this.state.like_arr.length == 0
                            ? 'Loading menu...'
                            : this.state.like_arr.map(key => (                                
                                <li>
                                <a href={key.id}>
                                    <div className="program_content_main_information3_img">
                                        <div className="mask"></div>                       
                                        <img src={key.cover_image} alt={this.props.img}/>
                                    </div>
                                    <p class="font18_1"><a href={key.id}>{key.title}</a></p>
                                </a>
                                </li>
                            ))
                        }
                </ul>
            </div>
      </div>
    );
  }
};
export default Like;