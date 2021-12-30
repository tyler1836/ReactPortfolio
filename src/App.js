import React, {useState} from 'react';
import './App.css'
import Nav from './components/Nav';
import Footer from './components/Footer';
import "@material-tailwind/react/tailwind.css";

function App() {
  return ( 
    <main>
      <Nav />
      <Footer />
      </main>
  );
}

export default App;
