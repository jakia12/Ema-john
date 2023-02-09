import React from 'react';
import './App.css';
// import Form from './Form';
// import Slider from './components/Slider';
// import { SliderImg} from './components/SliderData';
// import { SliderDot } from './components/SliderData';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (

    <>
      {/* <Form/>
      <Slider slides={SliderImg} dots={SliderDot}/> */}
      <Header />
      <Home />
    </>
  );
}

export default App;
