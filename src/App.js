import './App.css';
import {Routes, Route, withRouter } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Works from './components/works/Works';
import { themeContext } from './context';
import { useContext } from 'react';


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : '',
      }}
    >
      <Navbar/>
        <Routes>
          <Route exact path=" " element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/works" element={<Works/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;