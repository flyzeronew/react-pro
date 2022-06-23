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
var parsed = queryString.parse(window.location.search);
var get_id=parsed.id;

let iframe_fb = '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwomanqueenwomanqueen&tabs=timeline&width=328&height=418&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=690035817779098" width="328" height="418" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'; 
function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}

let img = 'img';
let ad_img = 'ad_img';

function Program_index() {

    const [cover, setCover] = useState('')
    const getDataFromServer = async () => {
        // 先開起載入指示器
        // setIsLoading(true)
        // 模擬和伺服器要資料，先寫死
        // 注意header資料格式要設定，伺服器才知道是json格式

        const response = await fetch(
          'https://tvbsapp.tvbs.com.tw/program_api/index_cover?id=' + get_id,
          {
            method: 'get',
            headers: new Headers({
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }),
          }
        )
        const coverdata = await response.json()

        // 最後設定到狀態中
        // setOrderDisplay(data)
        // let arr = []
        //  arr.push(data)
        // 因為有好幾個項目，所以要.rows才可以只把rows叫出來
        // setSuccessdata(data.rows)
        // setBook_name(data.book_name)
        // setISBN(data.ISBN)
        // setBook_pics(data.book_pics)
        // setNickname(data.nickname)
        // setMatch_c_sid(data.Match_c_sid)
        setCover(coverdata.data[0])
    
        console.log(coverdata)
      //  console.log(coverdata.data[0].cover_image)
        
        // 3秒後關閉指示器
        setTimeout(() => {
          // setIsLoading(false)
        }, 3000)
      }
    // 模擬componentDidMount
    useEffect(() => {
        getDataFromServer()
    }, [])
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
        <Header img={img} get_id={get_id}/>
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
          <div className="program_content_main">
            <div className="program_content_main_kv">          
                    <li>
                        <a href={cover.url} target="_blank" >
                          <div className="program_content_main_kv_writing"><p className=" font20_2">{cover.title}</p></div>
                          <div className="img">
                            <div className="mask"></div>
                            <img src={cover.cover_image} alt={ad_img}/>
                            {/* <img src={kv_img} alt={ad_img}/> */}
                          </div>
                        </a>
                    </li>
            </div>
          </div>
          <div className="program_content_right">

            <div className="program_content_right_time"><p className="font16_3">鎖定:TVBS每週一至週五 18:00~18:30</p></div>
            
            <div className="program_content_right_fb_box">
              <Iframe iframe={iframe_fb}/>
            </div>

          </div>
        </div>
         <div className="program_content2">
          <div className="program_content2_main2">
            
              <div className="program_content_main_information_titel">
                  <p className="program_content_main_information_titel_p font30_1">精彩內容</p>
                  <div className="program_content_main_information_titel_more">
                    <div className="more01"><a className="font15_1" href="#">MORE</a></div>
                  </div>
                  <div className="line01"></div>
              </div>
              
              <div className="height20px"></div>

              <div className="program_content_main_information2">
                <li>
                  <a href="#">
                    <div className="program_content_main_information2_img">
                        <div className="mask"></div>
                        <img src={kv_img} alt={img}/>
                    </div>
                    <p className="font24_1">1.女人我最大商品資訊女人我最大商品資訊女人我最大商品資訊</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="program_content_main_information2_img">
                        <div className="mask"></div>
                        <img src={kv_img} alt={img}/>
                    </div>
                    <p className="font24_1">1.女人我最大商品資訊女人我最大商品資訊女人我最大商品資訊</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="program_content_main_information2_img">
                        <div className="mask"></div>
                        <img src={kv_img} alt={img}/>
                    </div>
                    <p className="font24_1">1.女人我最大商品資訊女人我最大商品資訊女人我最大商品資訊</p>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <div className="program_content_main_information2_img">
                        <div className="mask"></div>
                        <img src={kv_img} alt={img}/>
                    </div>
                    <p className="font24_1">1.女人我最大商品資訊女人我最大商品資訊女人我最大商品資訊</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="program_content_main_information2_img">
                        <div className="mask"></div>
                        <img src={kv_img} alt={img}/>
                    </div>
                    <p className="font24_1">1.女人我最大商品資訊女人我最大商品資訊女人我最大商品資訊</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="program_content_main_information2_img">
                        <div className="mask"></div>
                        <img src={kv_img} alt={img}/>
                    </div>
                    <p className="font24_1">1.女人我最大商品資訊女人我最大商品資訊女人我最大商品資訊</p>
                  </a>
                </li>
              </div>
          </div>
        </div>
        <div className="program_content">
            <div className="program_content_main">
                <div className="program_content_main_information_box">
                    <div className="program_content_main_information_titel">
                        <p className="program_content_main_information_titel_p font30_1">節目資訊</p>
                        <div className="program_content_main_information_titel_more">
                            <div className="more01"><a className="font15_1" href="#">MORE</a></div>
                        </div>
                        <div className="line01"></div>
                    </div>

                    <div className="height20px"></div>

                  <div className="program_content_main_information_one">
                      <div className="program_content_main_information_one_img1"><img src={kv_img} alt={img}/></div>
                      <div className="program_content_main_information_one_p1">
                        <p className="font24_2">TVBS 56頻道 / 女人我最大</p>
                        <p className="font18_3">主持人:藍心湄</p>
                        <p className="font18_3">每週一至週五 晚間6點</p>
                        <p className="font18_4">
                          ★ 高畫質完整版【<a href="#">線上看</a>】<br/>
                          ★ <a href="#">http://goo.gl/2C0hKj</a><br/>
                          ★ 快來訂閱【<a href="#">TVBS 女人我最大</a>】官方頻道！
                        </p>
                      </div>
                  </div>

                </div>
            </div>

            <div className="program_content_right">   
                <div className="program_content_main_information_titel">
                  <p className="program_content_main_information_titel_p font30_1">相關新聞</p>
                  <div className="program_content_main_information_titel_more">
                  <div className="more01"><a className="font15_1" href="#">MORE</a></div>
                  </div>
                  <div className="line01"></div>
                </div>

                <div className="height20px"></div>

                <div className="program_content_right_activity2">
                  <ul>
                    <li>
                      <div className="program_content_right_activity_img2"><img src={kv_img} alt={img}/></div>
                      <p className="font18_1"><a href="#">女人我最大好康活動女人我最大好康活動女人我最大好康活動女人我最大好康活動</a></p>
                    </li>

                    <li>
                      <div className="program_content_right_activity_img2"><img src={kv_img} alt={img}/></div>
                      <p className="font18_1"><a href="#">女人我最大好康活動女人我最大好康活動女人我最大好康活動女人我最大好康活動</a></p>
                    </li>

                  </ul>
                </div>
            </div>
        </div>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default Program_index;
