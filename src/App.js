import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Cart, Home } from "./pages";
import axios from "axios";


function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/db.json")
      .then(({data}) => setPizzas(data.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home items={pizzas} />} exact />
        <Route path="/cart" element={<Cart />} exact />
      </Routes>
    </div>
  );
}

export default App;
