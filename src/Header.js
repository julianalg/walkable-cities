import React from 'react';
import "./Header.css";

function Header(props) {
  return (
      <div className="header-image">
        <div className="header-title">
          <h1>{props.text}</h1>
        </div>
      </div>
  );
}

export default Header;