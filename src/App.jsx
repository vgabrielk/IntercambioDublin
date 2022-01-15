
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './responsive.css'

import { useEffect } from 'react';

import 'aos/dist/aos.css'
import AOS from 'aos'

import Main from './components/Main/Main';
import Slider from './components/Slider/Slider';
import Donation from './components/Donation/Donation';
import MapDublin from './components/MapDublin/MapDublin';
import Count from './components/CountDown/Count';
import Social from './components/Social/Social';
import Bruno from './components/Bruno/Bruno';
import Footer from './components/Footer/Footer';


function App() {

  useEffect(()=>{
    AOS.init({
      duration: 2500
    });
  },[])
  return (
    <>

      <nav className="nav">
        <div className="nav__img">
        </div>
        <div className="nav__right">
    <a href='https://instagram.com/viniciustica09'>@viniciustica09</a>
        </div>
      </nav>
        <Slider/>
        <Count/>
        <Donation/>
        <Main/>
        <Social/>
        <MapDublin/>
        <Bruno/>
        <Footer/>
    </>
  );
}

export default App;
