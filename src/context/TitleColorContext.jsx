import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const TitleColorReducer = (state, action) => {
  //switch
}

export const TitleColorContextProvider = ({children}) => {
  const [state, dispatch ] = useReducer(TitleColorContext, {color: 'purple'})

  return <TitleColorContext.Provider value={{...state}}>{children}</TitleColorContext.Provider>
}