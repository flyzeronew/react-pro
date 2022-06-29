import React, { useState, useEffect } from 'react'
import './../css/p_footer_news.css';
function Footer() {
    const [loading, setLoading] = useState('')
    const [footer_content, setFooter_content] = useState('')


    //多組api fetch
    const urls = ['https://www.tvbs.com.tw/portal/footer'];
    const footer_data = 'https://www.tvbs.com.tw/portal/footer';

    const getDataFromServer = async () => {
      setLoading(true);
      const [result1] = await Promise.all(
        //   res.json改res.text 即可
        urls.map((url) => fetch(url).then((res) => res.text()))
     );
      setLoading(false);
      setFooter_content(result1);
    };


   // 模擬componentDidMount
   useEffect(() => {
    getDataFromServer()
}, [])



//   <!--Footer-->
const footer_jsx=(
<>

  <div class="footer">
    {/* <!--底霸內框PC版--> */}
    <div class="square">
       {/* <!--TVBS logo灰--> */}
       <div class="logo">
         <a href="https://www.tvbs.com.tw/"><img src="https://cc.tvbs.com.tw/portal/images/logo-1.png"/></a>
       </div>
       {/* <!--TVBS logo灰end--> */}
       <span id="footer_all" dangerouslySetInnerHTML={{__html: footer_content}}></span>

    {/* <!--客服--> */}
      <ul>
        <li><div class="service"><p>您的意見是我們前進的動力.歡迎來信或來電反映</p>
          <ul>            
            <li>意見反映：<a href="mailto:service@tvbs.com.tw">service@tvbs.com.tw</a></li>
            <li>觀眾服務專線：<span class="service-hover">02-2656-1599</span></li>
          </ul>
        </div>
        </li>
      </ul>
      {/* <!--客服end--> */}
    </div>
    {/* <!--底霸內框PC版end--> */}
    {/* <!--底霸內框手機版--> */}
    <div class="square-m">
        <ul>
          <li class="service13"><a href="mailto:service@tvbs.com.tw">意見反映</a></li>
          <li class="service13">觀眾服務專線:02-2656-1599</li>
        </ul>
        <div class="square-m-under1">聯利媒體股份有限公司  TVBS Media Inc‧ All Rights Reserved.</div>
        {/* <!--320px--> */}
        <div class="square-m-under2">觀眾服務專線:02-2656-1599<br/>聯利媒體股份有限公司<br/>© TVBS Media Inc. All Rights Reserved.</div>
    </div>
    {/* <!--底霸內框手機版end--> */}
    {/* <!--地址與版權宣告--> */}
    <small>台北市內湖區瑞光路451號 | 聯利媒體股份有限公司 © TVBS Media Inc. All Rights Reserved.</small>
    {/* <!--地址與版權宣告end--> */}
  </div>
  {/* <!--Footer end--> */}
  </>
// </div>  


)
return footer_jsx;
}

export default Footer;