import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Workshop from './pages/Workshop';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Store from './pages/Store';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './pages/Admin';
import ServicePage from './pages/ServicePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="workshop" element={<Workshop />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:serviceId" element={<ServicePage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="store" element={<Store />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;