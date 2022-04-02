import Header from './header';
import {Helmet} from "react-helmet";
import Myjs from './Myjs';
import './css/program_master.css';
import './css/program_article_share.css';
import ad_top from './images/ad970x90.jpg';
import ad_top_m from './images/ad320x100.jpg';
let img = 'img';
let ad_img = 'ad_img';

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
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
