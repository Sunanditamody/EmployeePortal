import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Register from './component/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
   <div>
     <Navbar/>
     <BrowserRouter>
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
          
        
      </Routes>
     </BrowserRouter>
      
    
     
    </div>
  );
}

export default App;
