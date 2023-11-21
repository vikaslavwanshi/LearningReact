import React from 'react';
import { Brand, Cta, Navbar } from './Components';
import { Blog,Header,Footer,Features,Possibility,Whatgpt3 } from './Containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
        <Brand />
        <Whatgpt3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App