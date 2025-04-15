import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Callback to toggle dark mode
  function handleDarkModeClick() {
    setIsDarkMode((prev) => !prev);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      {/* Pass the dark mode toggle callback as a prop */}
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
