import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import FirstCollection from './components/FirstCollection';
import SecondCollection from './components/SecondCollection';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import Contact from './components/Contact';

export default function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Hero />
              <FirstCollection />
              <SecondCollection />
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
