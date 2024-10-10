import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-blue-950 text-white text-center rounded p-5">
      <p>
        Copyright © {new Date().getFullYear()} - All right reserved by
        Stationeryhive
      </p>
    </footer>
  );
};

export default Footer;
