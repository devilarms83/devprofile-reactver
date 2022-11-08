import './reset.css';
import './App.css';
import * as React from "react";
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Sport from './components/Sport'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <section class="subhead" />
        <section class="subsection">
          <Routes>
            <Route index element={<Aboutme />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='contact' element={<Contact />} />
            <Route path='resume' element={<Resume />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
