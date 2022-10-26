import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Home from "./Components/pages/Home";

function App() {
  return (
    <Router>
      <div className="main">
        <Header/>
        <div className="container">
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/about" element = {<About/>}/>
            <Route path = "/contact" element = {<Contact/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;
