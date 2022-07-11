import React, { useState, useEffect } from 'react'
import Header from './../header';
import {Helmet} from "react-helmet";
import Myjs from './../Myjs';
import gotop from './../images/gotop.png';
import ad_top from './../images/ad970x90.jpg';
import ad_top_m from './../images/ad320x100.jpg';
import ad_300x250 from './../images/ad300x250.jpg';
import ad_650x100 from './../images/ad650x100.jpg';
import facebook_img from './../images/content_community_list_facebook.svg';
import talk_img from './../images/content_community_list_talk.svg';
import kv_img from './../images/kv850x470.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../css/program_master.css';
import './../css/program_article_share.css';
import queryString from "query-string";
import Footer from './../components/Footer.js';
var get_pathname=window.location.pathname.split('/').filter(Boolean);
var get_id=get_pathname[0];

let img = 'img';
let ad_img = 'ad_img';
let logo = 'logo';


function Program_detail() {
    const [loading, setLoading] = useState('')
    const [cover, setCover] = useState('')
    const [social, setSocial] = useState('')
    const [time, setTime] = useState('')
    const [program_info, setProgram_info] = useState('')
    const [relative_news, setRelative_news] = useState('')
    const [articles, setArticles] = useState('')
    
    //多組api fetch
    const urls = ['https://tvbsapp.tvbs.com.tw/program_api/index_cover', "https://tvbsapp.tvbs.com.tw/program_api/social","https://tvbsapp.tvbs.com.tw/program_api/broadcast_time","https://tvbsapp.tvbs.com.tw/program_api/program_info","https://tvbsapp.tvbs.com.tw/program_api/related_news_by_keywords"];

    const getDataFromServer = async () => {
      setLoading(true);
      const [result1, result2,result3,result4,result5] = await Promise.all(
        urls.map((url) => fetch(url+"?id="+ get_id).then((res) => res.json()))
     );
      setLoading(false);
      setCover(result1.data[0]);
      setSocial(result2.data[0]);
      setTime(result3.data[0]);
      setProgram_info(result4.data[0]);
      setRelative_news(result5.data.slice(0,2))
    };

    const urls2 =["https://tvbsapp.tvbs.com.tw/program_api/wonderful_list"];
    const getDataFromServer2 = async () => {
      setLoading(true);
      const [result1] = await Promise.all(
        urls2.map((url) => fetch(url+"?id="+ get_id +"&limit=5&page=0").then((res) => res.json()))
     );
      setLoading(false);
      setArticles(result1.data);

      console.log(articles);
    };




    // 模擬componentDidMount
    useEffect(() => {
        getDataFromServer()
        getDataFromServer2()
    }, [])

    //fb iframe
    let fb_url=social.facebook;
    let iframe_fb = '<iframe src="https://www.facebook.com/plugins/page.php?href='+fb_url+'&tabs=timeline&width=328&height=418&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=690035817779098" width="328" height="418" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'; 
    function Iframe(props) {
      return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
    }

    //const program_info_text=program_info.content.innerHTML;
    const program_info_text= {__html:program_info.content};



  return (
    <div className="program_container">
     <div id="back">
        <div id="back-img1"><img src={gotop} alt={ad_img}/></div>
     </div>
      <Myjs />
      <Helmet>
          <meta charSet="utf-8" />
          <title>節目公版</title>
          <meta name="viewport" content="width=device-width"/>
          <meta name="keywords" content="關鍵字" />
          <meta name="description" content="導言"/>                
       </Helmet> 
      <header>
        <Header img={img} get_id={get_id} logo={logo}/>
      </header>
      <main>      
        <div className="height20px"></div>
        <div className="program_ad_box">
            <div className="ad_970x90_pc">
              <img src={ad_top} alt={ad_img}/>
            </div>
            <div className="ad_320x100_mo">
              <img src={ad_top_m} alt={ad_img}/>
            </div>
        </div>
        <div className="height20px"></div>
        <div className="program_content">
          <div className="program_content_updown_page_box pc_display">

          {/* PC版上下頁文章 */}
            <div className="program_content_updown_page">
              <ul>
                <li>
                    <div className="program_content_updown_page_L">
                      <div className="program_content_updown_page_arraw"></div>
                        <div className="program_content_updown_page_context_box">
                          <div className="program_content_updown_page_context ">
                            <a href="#">
                              <div className="program_content_updown_page_context-img"><img src={kv_img} alt={img}/></div>
                              <p className="font18_1">拉筋痛到大叫南韓政府教士兵跳芭蕾舒壓拉筋痛到大叫南韓政府教士兵跳芭蕾舒壓拉筋痛到大叫南韓政府教士兵跳芭蕾舒壓拉筋痛到大叫南韓政府教士兵跳芭蕾舒壓</p>
                            </a>  
                          </div>
                        </div>
                    </div>
                 </li>
                 <li>
                    <div className="program_content_updown_page_R">
                      <div className="program_content_updown_page_arraw"></div>
                        <div className="program_content_updown_page_context_box">
                          <div className="program_content_updown_page_context ">
                            <a href="#">
                              <div className="program_content_updown_page_context-img"><img src={kv_img} alt={img}/></div>
                              <p className="font18_1">拉筋痛到大叫南韓政府教士兵跳芭蕾舒壓拉筋痛到大叫南韓政府教士兵跳芭蕾舒壓拉筋痛到大叫南韓政府教士兵跳芭蕾舒壓拉筋痛到大叫南韓政府教士兵跳芭蕾舒壓</p>
                            </a>  
                          </div>
                        </div>
                    </div>
                 </li>
              </ul>
            </div>
          </div>
          {/* PC版上下頁文章 ed*/}
          {/* 內頁用社群跟著跑 */}
          <div className="program_content_community_list_box">
              <div className="program_content_community_list">
                <ul>
                  <li><a href="##"><img src={facebook_img} alt={img}/></a></li>
                  <li><a href="##"><img src={talk_img} alt={img}/></a></li>
                </ul>
              </div>
          </div>
          {/* 手機板 */}
          <div class="program_content_community_list_mobile text_center mobile_display">
            <ul>
              <li><a href="##"><img src={facebook_img} alt={img}/></a></li>
              <li><a href="##"><img src={talk_img} alt={img}/></a></li>
            </ul>
          </div>
          {/* 手機板 ed*/}
        {/* 內頁用社群跟著跑 ed*/}

          <div className="program_content_main">

              <div className="program_content_main_detail">
                <div className="program_content_main_detail_titel font26_2">1這不是拍電影！真的會遇到！明星出國奇遇記！！</div>
                <div className="program_content_main_detail_time"><p className="font16_5">2016/03/20</p></div>
              

               <div className="height20px"></div>

                <div className="program_content_main_detail_context">
                  <div className="program_content_main_detail_context_img"><img src={kv_img}  alt={img}/></div>
                  <p clasNames="font18_5">1吳依霖老師示範陳薇造型，尤其對於有選擇困難症的人，尤其困擾~別擔心！這次跟著鐙輝、子余出發上班族的灶腳報你知！吃飽了再上！</p>
                  <p className="font18_5">2015年7月6日至8月10日播出，共6集，為夏日熱鬪篇企畫5，本年度由浩角翔起組成的「天團組」，與顏永烈、莎莎和愷樂組成的「莎樂烈組」分組對抗，進行「誰是賓果王」實境競賽，遊戲地點為高雄市其中25個行政區，遊戲規則即兩隊各自在賓果盤隨機填入25個數字，消號順序自由選擇，每個號碼代表高雄25個不同行政區，並在選到數字後立刻前往該行政區進行遊戲，任務成功即可消除該號碼，遊戲時間結束前連成最多線者即為贏家，遊戲中並有隱藏關卡及特殊任務。</p>
                  <div className="program_content_main_detail_context_img"><img src={kv_img}  alt={img}/></div>
                </div>

                <div className="ad_650x100_pc pc_display">
                  <img src={ad_650x100}  alt={ad_img}/>
                </div>
                <div className="ad_300x250_mo">
                  <img src={ad_300x250}  alt={ad_img}/>
                </div>

                <div className="height20px"></div>

                <div className="program_content_main_detail_label_box">

                  <div className="program_content_main_detail_label">
                    <div className="program_content_main_detail_label_titel font16_5">標　　籤</div>
                    <div className="program_content_main_detail_label_titel_list">
                      <ul>
                        <li className="font16_6"><a href="##">無尾熊</a></li>
                        <li className="font16_6"><a href="##">鋼管</a></li>
                        <li className="font16_6"><a href="##">闖空門</a></li>
                        <li className="font16_6"><a href="##">野生</a></li>
                      </ul>
                    </div>
                  </div>

                  <div class="program_content_main_detail_label">
                    <div class="program_content_main_detail_label_titel font16_5">追　　蹤</div>

                    <div class="community_btn">
                      <ul>
                        <li class="font16_1"><a href="#">加入</a></li>
                        <li class="font16_2"><a href="#">訂閱</a></li>
                      </ul>
                    </div>
                </div>


                <div class="jump_list_up_down2 text_center mobile_display">
                  <ul>
                    <li><a href="#"><p class="float_left">拉筋痛到大叫南韓政府教士兵跳芭蕾舒壓</p></a></li>
                    <li><a href="#"><p class="float_right text_right">拉筋痛到大叫南韓政府教士兵跳芭蕾舒壓</p></a></li>
                  </ul>
                </div>

              </div>

              <div className="height20px"></div>

              <div className="ad_650x100_pc pc_display">
                <img src={ad_650x100}  alt={ad_img}/>
              </div>
              <div className="ad_300x250_mo">
                <img src={ad_300x250}  alt={ad_img}/>
              </div>

              <div className="height20px"></div>
              <div className="height20px"></div>
              
              <div className="program_content_main_detail_like">
                <div className="program_content_main_detail_like_titel font24_1">你可能也會喜歡</div>
                <div className="program_content_main_information3">
                  <ul>
                    <li>
                      <a href="##"><div className="program_content_main_information3_img"><img src={kv_img} alt={img}/></div>
                        <p class="font18_1"><a href="#">1.女人我最大商品資訊女人我最大商品資訊女人我最大商品資訊</a></p>
                      </a>
                    </li>
                    <li>
                      <a href="##"><div className="program_content_main_information3_img"><img src={kv_img} alt={img}/></div>
                        <p class="font18_1"><a href="#">1.女人我最大商品資訊女人我最大商品資訊女人我最大商品資訊</a></p>
                      </a>
                    </li>
                    <li>
                      <a href="##"><div className="program_content_main_information3_img"><img src={kv_img} alt={img}/></div>
                        <p class="font18_1"><a href="#">1.女人我最大商品資訊女人我最大商品資訊女人我最大商品資訊</a></p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="program_content_right">
              <div className="program_content_right_time"><p className="font16_3">{time.content}</p></div>

              <div className="program_content_right_fb_box">
                <Iframe iframe={iframe_fb}/>
              </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Program_detail;
