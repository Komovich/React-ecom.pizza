import React from "react";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import {Route, Routes, Router} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="wrapper">
      <Header />
      <div className="content">
         
        <Routes>
       <Route path="/" element={<Home />}/> 
       </Routes>
      
        <Home/>

      </div>
    </div>
    </Router>
  );
}

export default App;
