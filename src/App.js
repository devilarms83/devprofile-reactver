import './reset.css';
import './App.css';
import * as React from "react";
import Nav from './components/Nav';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <section class="subhead" />
        <section class="subsection">
          <Routes>
            <Route path='aboutme' element={<Aboutme />} />
            <Route path='devprofile-reactver' element={<Aboutme />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='contact' element={<Contact />} />
            <Route path='resume' element={<Resume />} />
          </Routes>
        </section>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
