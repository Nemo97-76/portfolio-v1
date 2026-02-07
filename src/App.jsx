import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
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
