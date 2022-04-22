import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from './components/Header';

function App() {
  const logo = 'MyReact';

  return (
    <div>
      <Header logoText={logo} />
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
