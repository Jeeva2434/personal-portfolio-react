
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Navbar from './components/Navbar'
import Contact from './pages/contact/Contact'
import Portfolio from './pages/Portfolio/Portfolio'
import Themes from './components/Themes';

function App() {
  return (
    <BrowserRouter>
      <Navbar/> 
      <Themes/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
