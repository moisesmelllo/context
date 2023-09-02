import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const TitleColorReducer = (state, action) => {
  switch (action.type) {
    case 'botao1':
      return { ...state, color: 'blue', font: 'Rubik Iso, cursive', };
    case 'botao2':
      return { ...state,  color: 'red', font: 'Noto Sans Osmanya', };
    default:
      return state;
  }
};

export const TitleColorContextProvider = ({children}) => {
  const [state, dispatch ] = useReducer(TitleColorReducer, {color: 'purple', color: 'normal'})

  return <TitleColorContext.Provider value={{...state, dispatch}}>{children}</TitleColorContext.Provider>
}