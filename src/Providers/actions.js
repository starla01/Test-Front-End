export default (dispatch, state) => ({
  getProducts: () => {
    return fetch('https://corebiz-test.herokuapp.com/api/v1/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'GET_PRODUCTS',
          payload: data,
        });
        return data;
      });
  },
  addToCart: (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  },
  setBreakpoint: (breakpoint) => {
    dispatch({ type: 'SET_BREAKPOINT', payload: breakpoint });
  },
});
