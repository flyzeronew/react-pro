import Head from './Head';
import Header from './header';
import Myjs from './Myjs';
import './css/program_master.css';
import './css/program_article_share.css';

function App() {
  
  return (
    <div className="program_container">      
      <Head/> 
      <Myjs/>
      <header>
        <Header/>
      </header>
      <main> 
      <div className="test">aaa</div>       
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
