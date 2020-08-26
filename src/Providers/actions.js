export default (dispatch, state) => ({
  actionFunctions: ({ params: descructured }) => {},
  setBreakpoint: (breakpoint) => {
    dispatch({ type: "SET_BREAKPOINT", payload: breakpoint });
  },
});
