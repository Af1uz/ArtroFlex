import React from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar'
import Intro from '../components/Intro/Intro'
import Fouter from '../components/Fouter/Fouter'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Fouter/>
    </div>
  );
};

export default App;