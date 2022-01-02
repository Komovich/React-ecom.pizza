
const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}



const pizzas = (state = initialState, action) => {
    switch(action.type){
        case "SET_TOTAL_PRICE":
            return {
                ...state,
                totalPrice: action.peyload 
               };

        case "SET_TOTAL_COUNT":
            return {
                ...state,
                totalCount: action.peyload
               };
        default: 
        return state;
    }

}
export default pizzas;