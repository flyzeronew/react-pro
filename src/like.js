import React from "react";
class Like extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
          like_arr:[],
        };
    }

  render () {
        fetch('https://tvbsapp.tvbs.com.tw/program_api/umightlike_article?tbl=6&keywords='+this.props.kw+'&id='+this.props.get_detail_id)
        .then(res => res.json())
        .then(json => this.setState({
            like_arr:json.data,
        }));
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