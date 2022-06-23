// 套件
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Program_index from './pages/Program_index';
function App() { 
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Program_index/>} />
      </Routes>
    </Router>
  );
}
export default App;
