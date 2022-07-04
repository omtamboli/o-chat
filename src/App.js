
import './App.css';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat"
import Footer from './component/footer/Footer';




function App() {




  return (

    <div> 
    <Router>
      <Routes>
      <Route exact path="/" element={<Join/>} />
      </Routes>
      <Routes>
        
      <Route path="/chat" element={<Chat/>} />
      </Routes>
     

    </Router>
    
   <Footer/>
   </div>
   
  );
}

export default App;
