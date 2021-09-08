import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import ConnectUs from "../components/ConnectUs";
export default function layout({children}) {
    return (
        <>
      <Navbar />

      {children}
      <ConnectUs />
      <Footer />
    </>
    )
}
