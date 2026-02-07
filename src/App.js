import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
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
