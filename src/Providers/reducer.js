export default (state, action) => {
  if (action.type === "SET_BREAKPOINT") {
    return {
      ...state,
      breakpoint: action.payload,
    };
  }
  return state;
};
