// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/style.css';
import Header from './layout/header/header';
import Banner from './layout/banner/banner';
import Section from './layout/section/section';
import Expert from './layout/experts/expert';
import Testimonal from './layout/testimonal/testimonial';
import Resorce from './layout/resource/ressouce';
import Footer from './layout/footer/footer';
import NewPage from './pages/NewPage'; // Import the new page component

import logo from './assets/images/logo.png'; // Ensure the correct path

function App() {
  return (
    <Router>
      <div className="App">
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Section />
              <Expert />
              <Testimonal />
              <Resorce />
            </>
          } />
          <Route path="/new-page" element={<NewPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
