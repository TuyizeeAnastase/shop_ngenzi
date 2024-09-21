import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import WhatsAppFloatingButton from "./util/WastappForm"


const Layout = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div>
      {!isDashboard && <Navbar />} {/* Show Navbar only if not on Dashboard */}
      <main>{children}</main>
      {!isDashboard && <Footer />} {/* Show Footer only if not on Dashboard */}
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Layout;
