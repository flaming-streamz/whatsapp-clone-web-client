import React from "react";

export const StateContext = React.createContext();

export const StateProvider = ({ initialState, reducer, children }) => {
  return <StateContext.Provider value={React.useReducer(reducer, initialState)}>{children}</StateContext.Provider>;
};

export const useStateProvider = () => {
  return React.useContext(StateContext);
};
