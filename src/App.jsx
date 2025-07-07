import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import FirstCollection from './components/FirstCollection';
import SecondCollection from './components/SecondCollection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <FirstCollection />
      <SecondCollection />
      <Footer />
    </div>
  );
}
