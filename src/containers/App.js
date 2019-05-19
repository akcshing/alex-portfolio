import React from 'react';
import logo from '../logo.svg';

function App() {
  return (
    <div className="app">
      <header className="page-container">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <main className="page-container">
        <div className="box" >A</div>
        <div className="box" >B</div>
        <div className="box" >C</div>
      </main>
      <footer className="page-container">
        <span>test</span>
      </footer>
    </div>
  );
}

export default App;
