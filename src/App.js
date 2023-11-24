import React from 'react'
import Featured from './components/featured/Featured'
import Best from './components/best/Best'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Card from './components/card/card'

function App() {
  return (
   <div>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Card/>
      <Footer />
      </div>
  );
}

export default App;
