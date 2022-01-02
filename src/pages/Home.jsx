import React from "react";
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from "../components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const categoryMames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular", order: "desc"},
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "alphabet", order: "asc" },
];

function Home() {
  const dispatch = useDispatch();

  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });

  const { isLoading } = useSelector(({ pizzas }) => {
    return {
      isLoading: pizzas.isLoading,
    };
  });

  const { category, sortBy } = useSelector(({ filters }) => {
    return {
      category: filters.category,
      sortBy: filters.sortBy,
    };
  });

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  });

  const onSelectSortBy = React.useCallback((obj) => {
    dispatch(setSortBy(obj));
  });

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryMames}
        />
        <SortPopup
          onClickSortType={onSelectSortBy}
          activeSortType={sortBy.type}
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? items.map((obj) => (
              <PizzaBlock onClickAddPizza={() => alert(111)} key={obj.id} isLoading={true} {...obj} />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
