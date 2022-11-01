import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from 'templates/Header';
import Footer from 'templates/Footer';

import About from 'screens/About';
import Contact from 'screens/Contact';
import Home from 'screens/Home';
import Detail from 'screens/Detail';

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
            <Route path = "/components/:component" element = {<Detail/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;
