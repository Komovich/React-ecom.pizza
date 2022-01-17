import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from "../components";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавит", type: "name", order: "asc" },
]; // массивы для сравнений, используем внутри компонентов

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items); // state из redux
  const cartItems = useSelector(({ cart }) => cart.items); // state из redux
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded); // state из redux
  const { category, sortBy } = useSelector(({ filters }) => filters); // state из redux

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]); // при обновлении category или sortBy в редаксе, получаем через useSelector новые данные и делаем запрос по API

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []); // dispatch категории по index из Categories

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []); // dispatch выбранного type в редакс из SortPopup

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  }; // dispatch объекта с пиццами в корзину, передаём функцию в компоненту PizzaBlock

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category} // активная категория из useSelector
          onClickCategory={onSelectCategory} //  Передаём dispatch новой категории
          items={categoryNames} // созданный массив для сравнения с актуальным(выбранным) внутри компонента
        />
        <SortPopup
          activeSortType={sortBy.type} // активный тип из useSelector
          items={sortItems} // созданный массив для сравнения с актуальным(выбранным) внутри компонента
          onClickSortType={onSelectSortType} // Передаём dispatch нового типа
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded // если isLoaded: true отображаем PizzaBlock, если false, отображаем PizzaLoadingBlock
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart} // Передаём dispatch объекта с пиццами
                key={obj.id} 
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} //??
                {...obj} // деструктуризируем перебираемый массив внутрь компонента
              />
            ))
          : Array(12)
              .fill(0) //создаём 12 массивов с нулевым значением, перебираем их и присваеваем каждому массиву PizzaLoadingBlock,,, //??
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
