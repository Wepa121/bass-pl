import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="main">
        <Header/>
        
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;
