import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../components";
import {useSelector} from "react-redux"
import {setPizzas} from "../redux/actions/pizzas";
import { useDispatch } from "react-redux";
import axios from "axios";

function Home() {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    axios("http://localhost:3000/db.json").then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

const {items} = useSelector(({pizzas}) => {
return {
  items: pizzas.items,
};
});

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "alphabet" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
