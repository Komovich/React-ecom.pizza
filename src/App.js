import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Cart, Home } from "./pages";
import { useDispatch } from "react-redux";
import {setPizzas} from "./redux/actions/pizzas";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas')
      .then(({ data }) => 
      dispatch(setPizzas(data)))
  }, [])


  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/cart" element={<Cart/>} exact />
      </Routes>
    </div>
  );
}

export default App;
