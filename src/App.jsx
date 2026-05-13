/* import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import 
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route expact path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
 */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
