import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="footer-author">By Julian Garcia for 2nd Period AP Lang</p>
      <a href="/works.html" className="footer-citation">Work Cited </a>
      <a href="https://github.com/julianalg/walkable-cities" className="footer-citation">Source Code</a>
    </footer>
  );
};

export default Footer;