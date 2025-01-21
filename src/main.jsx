import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './components/Home/App.jsx'
import NotFound from './components/NotFound/NotFound.jsx';
import Navbar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Contact from './components/Contact/Contact.jsx';
import PrivacyPolicy from './components/Privacy/Privacy.jsx';
import Instructions from './components/Instructions/Instructions.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/ideals-website/" element={<App />} />
          <Route path="/ideals-website/contact" element={<Contact />} />
          <Route path="/ideals-website/privacy" element={<PrivacyPolicy />} />
          <Route path="/ideals-website/privacy.html" element={<PrivacyPolicy />} />
          <Route path="/ideals-website/guide" element={<Instructions />} />
          <Route path="*" element={<NotFound />} /> {/* Page Not Found */}
        </Routes>  
      </div>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
