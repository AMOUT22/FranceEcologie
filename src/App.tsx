import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Page from './Page2';
import Services from './Services';
import Section3 from './Section3';
import Partenaire from './Partenaire';
import Clients from './assets/Clients';
import Footer from './Footer';
import Aboutus from './Aboutus';
import Blog from './Blog';
import Contactus from './Contactus';

function App() {
  return (
    <div>
      
        <Navbar />
        <Home />
        <Page />
        <Services  />
        <Aboutus />
        <Blog />
        <Partenaire />
        
        <Clients/>
        <Contactus />
        <Footer />
    </div>
  );
}

export default App;
