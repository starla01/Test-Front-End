export default (state, action) => {
  if (action.type === 'SET_BREAKPOINT') {
    return {
      ...state,
      breakpoint: action.payload,
    };
  } else if (action.type === 'GET_PRODUCTS') {
    return {
      ...state,
      products: action.payload,
    };
  } else if (action.type === 'ADD_TO_CART') {
    state.cart.push(action.payload);
    const strCart = JSON.stringify(state.cart);
    window.localStorage.cart = strCart;
    return {
      ...state,
      cart: state.cart,
    };
  }
  return state;
};
