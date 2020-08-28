/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import actions from './actions';
import usedevice from 'usedevice';

const breakpoints = [
  {
    name: 'largedesktop',
    min: 1150,
    max: Infinity,
  },
  {
    name: 'desktop',
    min: 1020,
    max: 1150,
  },
  {
    name: 'tablet',
    min: 860,
    max: 1020,
  },
  {
    name: 'phone',
    min: 0,
    max: 860,
  },
];

export const Context = createContext();

export default (props) => {
  const { breakpoint, os, isMobileAgent } = usedevice({ breakpoints });

  const [state, dispatch] = useReducer(reducer, {
    os,
    breakpoint,
    isMobileAgent,
    completedFetch: false,
    completedProfile: false,
    products: null,
    cart: [],
  });

  const _actions = actions(dispatch, state);

  useEffect(() => {
    dispatch({ type: 'SET_BREAKPOINT', payload: breakpoint });
  }, [breakpoint]);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        actions: _actions,
      }}>
      {props.children}
    </Context.Provider>
  );
};
