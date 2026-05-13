import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import LandingPage from './components/LandingPage.jsx';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
