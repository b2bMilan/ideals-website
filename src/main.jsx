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
import DeleteAccount from './components/DeleteAccount/DeleteAccount.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/ideals-website">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/guide" element={<Instructions />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="*" element={<NotFound />} /> {/* Page Not Found */}
        </Routes>  
      </div>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
