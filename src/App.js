import Header from './header';
import {Helmet} from "react-helmet";
import Myjs from './Myjs';
import ad_top from './images/ad970x90.jpg';
import ad_top_m from './images/ad320x100.jpg';
import arraw01_l from './images/arraw01-L.svg';
import arraw01_r from './images/arraw01-R.svg';
import kv_img from './images/kv850x470.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/program_master.css';
import './css/program_article_share.css';

function Arrow_l(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
         ...style,left:'10px',zIndex:1,
        }}
      onClick={onClick}
    />
  );
}
function Arrow_r(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right:'10px',zIndex:1}}
      onClick={onClick}
    />
  );
}

let img = 'img';
let ad_img = 'ad_img';
var settings = {
  speed: 500,
  slidesToShow: 1,
  infinite:true,
  prevArrow: <Arrow_l />,
  nextArrow: <Arrow_r />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};
function App() { 

  return (
    <div className="program_container">      
      <Myjs/>
      <Helmet>
          <meta charSet="utf-8" />
          <title>節目公版</title>
          <meta name="viewport" content="width=device-width"/>
          <meta name="keywords" content="關鍵字" />
          <meta name="description" content="導言"/>                
       </Helmet> 
      <header img={img}>
        <Header/>
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
              {/* <div className="program_content_main_kv_arrawL"><img src={arraw01_l} alt={img}/></div>
              <div className="program_content_main_kv_arrawR"><img src={arraw01_r} alt={img}/></div> */}              
       
                  <Slider {...settings}>
                    <li>
                    <div className="program_content_main_kv_writing"><p className=" font20_2">女人我最大招募女孩軍團囉~ 對時尚有興趣嗎?想與達人老師學習最新的時尚資訊？</p></div>
                    <img src={kv_img} alt={ad_img}/>
                    </li>

                    <li>
                    <div className="program_content_main_kv_writing"><p className=" font20_2">女人我最大招募女孩軍團囉~ 對時尚有興趣嗎?想與達人老師學習最新的時尚資訊？</p></div>
                    <img src={kv_img} alt={ad_img}/>
                    </li>

                    <li>
                    <div className="program_content_main_kv_writing"><p className=" font20_2">女人我最大招募女孩軍團囉~ 對時尚有興趣嗎?想與達人老師學習最新的時尚資訊？</p></div>
                    <img src={kv_img} alt={ad_img}/>
                    </li>
                    </Slider>
               
               
            </div>
          </div>
        </div>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
