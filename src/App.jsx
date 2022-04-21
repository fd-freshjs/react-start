import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";

function App(props) {
  // передать logoText в Header как текст вместо LOGO
  const logoText = 'MyReact';

  return (
    <div>
      {/* вынести хедер в новый компонент components */}
      <header className="logo">
        <h1>LOGO</h1>
      </header>
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
