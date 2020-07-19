import React from 'react';
import './App.css';
import Footer from "./components/footer";
import Routes from './router'
function App() {
  return (
    <div className="App">
      <Routes></Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
