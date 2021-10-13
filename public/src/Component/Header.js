import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo" id="logo">
        <h1>Logo Here</h1>
      </div>
      <nav className="nav-wrapper">
        <ul className="nav-item-wrapper">
          <li>
            <a>Menu 1</a>
          </li>
          <li>
            <a>Menu 2</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
