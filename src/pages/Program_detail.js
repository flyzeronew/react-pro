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
import { DFPSlotsProvider, AdSlot } from 'react-dfp';
import $ from 'jquery';

var get_pathname=window.location.pathname.split('/').filter(Boolean);
var get_id=get_pathname[0];
var get_detail_id=get_pathname[2];

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
    const [detail, setDetail] = useState('')
    const [menu,setMenu] = useState('')
    const [prev,setPrev] = useState('')
    const [next,setNext] = useState('')
    //多組api fetch
    const urls = ['https://tvbsapp.tvbs.com.tw/program_api/index_cover', "https://tvbsapp.tvbs.com.tw/program_api/social","https://tvbsapp.tvbs.com.tw/program_api/broadcast_time","https://tvbsapp.tvbs.com.tw/program_api/program_info","https://tvbsapp.tvbs.com.tw/program_api/related_news_by_keywords","https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/menu"];

    const getDataFromServer = async () => {
      setLoading(true);
      const [result1,result2,result3,result4,result5,result6] = await Promise.all(
        urls.map((url) => fetch(url+"?id="+ get_id).then((res) => res.json()))
     );
      setLoading(false);
      setCover(result1.data[0]);
      setSocial(result2.data[0]);
      setTime(result3.data[0]);
      setProgram_info(result4.data[0]);
      setRelative_news(result5.data.slice(0,2))
      setMenu(result6.program);
    };

    // 抓內頁 資料
    const urls2 =["https://tvbsapp.tvbs.com.tw/program_api/wonderful_detail"];
    const getDataFromServer2 = async () => {
      setLoading(true);
      const [result1] = await Promise.all(
        urls2.map((url) => fetch(url+"?id="+get_detail_id).then((res) => res.json()))
     );
      setLoading(false);
      setDetail(result1.data[0]);
    };
    // 抓內頁 資料ed
    // 抓上一頁 資料
    const urls3 =["https://tvbsapp.tvbs.com.tw/program_api/next_prev_article"];
    const getDataFromServer3 = async () => {
      setLoading(true);
      const [result1] = await Promise.all(
        urls3.map((url) => fetch(url+"?tbl=6&type=st&id="+get_detail_id).then((res) => res.json()))
      );
      const [result2] = await Promise.all(
        urls3.map((url) => fetch(url+"?tbl=6&type=gt&id="+get_detail_id).then((res) => res.json()))
      );
      setLoading(false);
      setPrev(result1.data[0]);
      setNext(result2.data[0]);
    };
     // 抓上一頁 資料ed

    // 模擬componentDidMount
    useEffect(() => {
        getDataFromServer()
        getDataFromServer2()
        getDataFromServer3()
    }, [])

    //fb iframe
    let fb_url=social.facebook;
    let iframe_fb = '<iframe src="https://www.facebook.com/plugins/page.php?href='+fb_url+'&tabs=timeline&width=328&height=418&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=690035817779098" width="328" height="418" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'; 
    function Iframe(props) {
      return (<div dangerouslySetInnerHTML={ {__html:props.iframe?props.iframe:""}} />);
    }
  
    // 關鍵字轉換及搜尋
    const str =""+detail.keyword+"";
    const keywords = str.split(',').filter(Boolean);
    $('.keyword_btn').click(function(){
      $('#gsc-i-id1').val($(this).val());
      $('button.gsc-search-button').click(); 
    }); 
    // 關鍵字轉換及搜尋 ed

    
  return (
    <div className="program_container">
      
     <div id="back">
        <div id="back-img1"><img src={gotop} alt={ad_img}/></div>
     </div>
      <Myjs />
      <Helmet>
          <meta charSet="utf-8" />
          <title>{detail.title+" | "+menu.title+" | TVBS 官網"}</title>
          <meta name="viewport" content="width=device-width"/>
          <meta name="keywords" content={detail.keyword}/>
          <meta name="description" content="導言"/>                
       </Helmet> 
      <header>
        <Header img={img} get_id={get_id} logo={logo}/>
      </header>
      <main>      
        <div className="height20px"></div>
        <div className="program_ad_box">
            <div className="ad_970x250_pc">
              <DFPSlotsProvider dfpNetworkId={'21697024903'}  adUnit="news.tvbs.com.tw_pc_index_top">
              <AdSlot sizes={[[970,250],[1,1]]} />
              </DFPSlotsProvider>     
            </div>
            <div className="ad_320x100_mo">
              <DFPSlotsProvider dfpNetworkId={'21697024903'}  adUnit="news.tvbs.com.tw_m_index_top">
              <AdSlot sizes={[[320,100],[1,1]]} />
              </DFPSlotsProvider> 
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
                            <a href={prev.id}>
                              <div className="program_content_updown_page_context-img"><img src={prev.cover_image} alt={img}/></div>
                              <p className="font18_1">{prev.title}</p>
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
                            <a href={next.id}>
                              <div className="program_content_updown_page_context-img"><img src={next.cover_image} alt={img}/></div>
                              <p className="font18_1">{next.title}</p>
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
                {
                  menu.facebook=="" ? "" :                            
                  <li><a href={menu.facebook} target="_blank"><img src={facebook_img} alt={img}/></a></li>
                }
                  <li><a href="##"><img src={talk_img} alt={img}/></a></li>
                </ul>
              </div>
          </div>
          {/* 手機板 */}
          <div class="program_content_community_list_mobile text_center mobile_display">
            <ul>
              {
                menu.facebook=="" ? "" :                            
                <li><a href={menu.facebook} target="_blank"><img src={facebook_img} alt={img}/></a></li>
              }
                <li><a href="##"><img src={talk_img} alt={img}/></a></li>
            </ul>
          </div>
          {/* 手機板 ed*/}
        {/* 內頁用社群跟著跑 ed*/}

          <div className="program_content_main">

              <div className="program_content_main_detail">
                <div className="program_content_main_detail_titel font26_2">{detail.title}</div>
                <div className="program_content_main_detail_time"><p className="font16_5">{detail.publish}</p></div>
              

               <div className="height20px"></div>

                <div className="program_content_main_detail_context">
                  <div dangerouslySetInnerHTML={ {__html:detail.article_content}} />
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
                      <ul id='keywords'>
                        {/* 關鍵字 */}
                        {
                            keywords.length == 0
                            ? 'Loading  keywords...'                           
                            : keywords.map((item, index) => (                                
                                <li className="font16_6" ><button className="keyword_btn" value={item}>{item}</button></li>
                            ))
                        }
                        {/* 關鍵字 ed*/}
                      </ul>
                    </div>
                  </div>

                  <div class="program_content_main_detail_label">
                    <div class="program_content_main_detail_label_titel font16_5">追　　蹤</div>

                    <div class="community_btn">
                      <ul>
                        {
                          menu.facebook=="" ? "" :                            
                          <li className="font16_1"><a href={menu.facebook} target="_blank">加入</a></li>
                          }
                          {
                          menu.youtube=="" ? "" :                            
                          <li className="font16_2"><a href={menu.youtube} target="_blank">訂閱</a></li>
                        }
                      </ul>
                    </div>
                </div>


                <div class="jump_list_up_down2 text_center mobile_display">
                  <ul>
                    <li><a href={prev.id}><p class="float_left">{prev.title}</p></a></li>
                    <li><a href={next.id}><p class="float_right text_right">{next.title}</p></a></li>
 
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
              <div className="program_content_right_ad_box">
                <DFPSlotsProvider dfpNetworkId={'21697024903'} adUnit="news.tvbs.com.tw_pc_read_r1">
                <AdSlot sizes={[[300,250]]} />
                </DFPSlotsProvider>
              </div>

              <div className="program_content_right_time"><p className="font16_3">{time.content}</p></div>

              <div className="program_content_right_fb_box">
                <Iframe iframe={iframe_fb}/>
              </div>

              <div className="program_content_right_ad_box">             
                <DFPSlotsProvider dfpNetworkId={'21697024903'} adUnit="news.tvbs.com.tw_pc_read_r2">
                <AdSlot sizes={[[300,250]]} />
                </DFPSlotsProvider>           
              </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );

  
}

export default Program_detail;
