import Header from './header';
import {Helmet} from "react-helmet";
import Myjs from './Myjs';
import './css/program_master.css';
import './css/program_article_share.css';

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
      <header>
        <Header/>
      </header>
      <main>       
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
