import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import BlogDetail from './Pages/BlogDetail';
import About from './Pages/About';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='/about' element={<About />} />
       </Routes>
       <Footer />
      </BrowserRouter>
      
    </div>
  )
}

export default App
