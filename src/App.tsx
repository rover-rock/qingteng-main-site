import React from 'react';
import './App.scss';
import Footer from "./components/footer";
import Routes from './router'
function App() {
  console.log('开发环境：',process.env.NODE_ENV); 
  return (
    <div className="App">
      <Routes></Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
