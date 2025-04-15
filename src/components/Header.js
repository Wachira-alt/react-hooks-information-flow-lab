import React from "react";

function Header({ onDarkModeClick }) {
  return (
    <header>
      <h2>Shopster</h2>
      {/* Button to toggle dark mode */}
      <button onClick={onDarkModeClick}>Toggle Dark Mode</button>
    </header>
  );
}

export default Header;
