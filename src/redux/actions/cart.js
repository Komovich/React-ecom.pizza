export const addPizzatoCart = (pizzasObj) => ({
    type: "ADD_PIZZA_CART",
    payload: pizzasObj
});

export const clearCart = () => ({
    type: "CLEAR_CART"
});

