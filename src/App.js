import './App.css';
import {Routes, Route} from 'react-router-dom';
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
          <Route exact path="/TritoneMusicStudio" element={<Home/>} />
          <Route path="/TritoneMusicStudio/about" element={<About/>} />
          <Route path="/TritoneMusicStudio/services" element={<Services/>} />
          <Route path="/TritoneMusicStudio/works" element={<Works/>} />
          <Route path="/TritoneMusicStudio/testimonials" element={<Testimonials/>} />
          <Route path="/TritoneMusicStudio/contact" element={<Contact/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;