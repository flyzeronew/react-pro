import React, { useState, useEffect } from 'react'
import Header from './../header';
import {Helmet} from "react-helmet";
import Myjs from './../Myjs';
import gotop from './../images/gotop.png';
import ad_top from './../images/ad970x90.jpg';
import ad_top_m from './../images/ad320x100.jpg';
import kv_img from './../images/kv850x470.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../css/program_master.css';
import './../css/program_article_share.css';
import queryString from "query-string";
import Footer from './../components/Footer.js';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';
import ReactPaginate from 'react-paginate';

var get_pathname=window.location.pathname.split('/').filter(Boolean);
var get_id=get_pathname[0];

let img = 'img';
let ad_img = 'ad_img';
let logo = 'logo';


function Program_list() {
    const [loading, setLoading] = useState('')
    const [cover, setCover] = useState('')
    const [social, setSocial] = useState('')
    const [time, setTime] = useState('')
    const [program_info, setProgram_info] = useState('')
    const [relative_news, setRelative_news] = useState('')
    const [articles, setArticles] = useState('')
    const [pageCount, setPageCount] = useState(0)
    const [offset, setOffset] = useState(0)
    const [perPage] = useState(10);
    
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

    const urls2 =["https://tvbsapp.tvbs.com.tw/program_api/wonderful_list","https://tvbsapp.tvbs.com.tw/program_api/wonderful_pages"];
    const getDataFromServer2 = async () => {
      setLoading(true);
         const [result1,result2] = await Promise.all(
        
        urls2.map((url) => fetch(url+"?id="+ get_id +"&limit=12&page="+offset).then((res) => res.json()))
     );
      setLoading(false);
      setArticles(result1.data);
      setPageCount(result2.data.length)
      
    };

const handlePageClick = (e) => {
  const selectedPage = e.selected;
  setOffset(selectedPage + 1)
};
console.log(handlePageClick);
    // 模擬componentDidMount
    useEffect(() => {
        getDataFromServer()
        getDataFromServer2()
    }, [offset])

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
          <div className="ad_970x250_pc">
                <DFPSlotsProvider dfpNetworkId={'21697024903'} adUnit="news.tvbs.com.tw_m_index_top">
                <AdSlot sizes={[[970,250],[1,1]]} />
                </DFPSlotsProvider>
                {/* <img src={ad_top} alt={ad_img}/> */}
              </div>
              <div className="ad_320x100_mo">
                <DFPSlotsProvider dfpNetworkId={'21697024903'} adUnit="news.tvbs.com.tw_pc_index_top">
                <AdSlot sizes={[[320,100],[1,1]]} />
                </DFPSlotsProvider>
                {/* <img src={ad_top_m} alt={ad_img}/> */}
              </div>
          </div>
        <div className="height20px"></div>
        <div className="program_content">
          <div className="program_content_main">
            <div className="program_content_main_information_titel">
                <p className="program_content_main_information_titel_p font30_1">精彩內容</p>
                <div className="program_content_main_information_titel_more"></div>
                <div className="line01"></div>
            </div>
            <div className="height20px"></div>
              <div className="program_content_main_information_box1">
                  <div className="program_content_main_information">
                    <ul>
                    {Array.from(articles).map((item, index) => (
                      <li>
                        <a href={`/reveiew/article/`+item.id}>
                          <div className="program_content_main_information_img">
                              <div className="mask"></div>
                              <img src={item.cover_image} alt={img}/>
                          </div>
                        <p className="font18_1">{item.title}</p>
                  </a>
                    </li>
                    ))}
                      
                    </ul>
                  </div>

                  <div className="jump_list pc_display">
                    <ReactPaginate
                      previousLabel={"上一頁"}
                      nextLabel={"下一頁"}
                      breakLabel={"..."}
                      marginPagesDisplayed={1}
                      pageRangeDisplayed={5}
                      containerClassName={"jump_list"}
                      activeClassName={"act"}
                      pageCount={pageCount}
                      onPageChange={handlePageClick}
                    />
                      
                    </div>
              </div>
          </div>

          <div className="program_content_right">

            <div className="program_content_right_time"><p className="font16_3">{time.content}</p></div>
            <div className="program_content_right_ad_box">
             
              <DFPSlotsProvider dfpNetworkId={'21697024903'} adUnit="news.tvbs.com.tw_pc_read_r1">
              <AdSlot sizes={[[300,250]]} />
              </DFPSlotsProvider>
           
            </div>
            <div className="program_content_right_fb_box">
              <Iframe iframe={iframe_fb}/>
            </div>

            <div className="program_content_right_ad_box">
             
             <DFPSlotsProvider dfpNetworkId={'21697024903'} adUnit="news.tvbs.com.tw_pc_read_r2">
             <AdSlot sizes={[[300,600]]} />
             </DFPSlotsProvider>
          
           </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Program_list;
