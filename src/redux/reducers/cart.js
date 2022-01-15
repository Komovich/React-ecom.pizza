const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const currentPizzaItem = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItem,
          totalPrice: getTotalPrice(currentPizzaItem),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items); //создаём пустой массив и добавляем в него канкатенированнные массивы которые добавляються при нажатии
      const totalPrice = getTotalPrice(allPizzas); //сумируем цены всех добавленных объектов

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: totalPrice,
      };
    }

    case "CLEAR_CART": {
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    }

    default:
      return state;
  }
};
export default pizzas;
