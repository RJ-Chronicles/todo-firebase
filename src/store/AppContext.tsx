import { State } from "../type/index";
import React, { createContext, useReducer, ReactNode } from "react";
import AppReducer, { Dispatch } from ".";
const initialState: State = {
  isLoading: false,
  error: {
    hasError: false,
    errorMessage: "",
  },
  method: undefined,
  filter: "ALL",
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<{
  state: State;
  dispatch: Dispatch;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
