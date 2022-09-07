// 套件
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Program_index from './pages/Program_index';
import Program_list from './pages/Program_list';
import Program_detail from './pages/Program_detail';
function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Program_index/>} />
        <Route path="/list" element={<Program_list/>} />
        <Route path="/detail/*" element={<Program_detail/>}/>
         {/* 上班這黨事  */}
        <Route path="/3" element={<Program_index/>} />
        <Route path="/3/list" element={<Program_list/>}/>
        <Route path="/3/detail/*" element={<Program_detail/>}/>
        {/* 少康  */}
        <Route path="/4" element={<Program_index/>} />
        <Route path="/4/list" element={<Program_list/>}/>
        <Route path="/4/detail/*" element={<Program_detail/>}/>
        {/* 國民大會  */}
        <Route path="/6" element={<Program_index/>} />
        <Route path="/6/list" element={<Program_list/>}/>
        <Route path="/6/detail/*" element={<Program_detail/>}/>
        {/* 一步一腳印  */}
        <Route path="/17" element={<Program_index/>} />
        <Route path="/17/list" element={<Program_list/>}/>
        <Route path="/17/detail/*" element={<Program_detail/>}/>
        {/* 看板人物 */}
        <Route path="/18" element={<Program_index/>} />
        <Route path="/18/list" element={<Program_list/>}/>
        <Route path="/18/detail/*" element={<Program_detail/>}/>
        {/* 中國進行式 */}
        <Route path="/19" element={<Program_index/>} />
        <Route path="/19/list" element={<Program_list/>}/>
        <Route path="/19/detail/*" element={<Program_detail/>}/>
        {/* 世界翻轉中 */}
        <Route path="/20" element={<Program_index/>} />
        <Route path="/20/list" element={<Program_list/>}/>
        <Route path="/20/detail/" element={<Program_detail/>}/>
        {/* 當漲聲響起 */}
        <Route path="/21" element={<Program_index/>} />
        <Route path="/21/list" element={<Program_list/>}/>
        <Route path="/21/detail/*" element={<Program_detail/>}/>
        {/* 當漲聲響起 */}
        <Route path="/21" element={<Program_index/>} />
        <Route path="/21/list" element={<Program_list/>}/>
        <Route path="/21/detail/*" element={<Program_detail/>}/>
        {/* T觀點 */}
        <Route path="/22" element={<Program_index/>} />
        <Route path="/22/list" element={<Program_list/>}/>
        <Route path="/22/detail/*" element={<Program_detail/>}/>
        {/* Focus全球新聞 */}
        <Route path="/28" element={<Program_index/>} />
        <Route path="/28/list" element={<Program_list/>}/>
        <Route path="/28/detail/*" element={<Program_detail/>}/>
      </Routes>
    </Router>
  );
}
export default App;
