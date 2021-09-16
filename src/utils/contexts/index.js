import React, {createContext, useContext, useReducer} from 'react';

const initialState = {
  directoryList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_LIST':
      return {
        ...state,
      };

    default:
      return state;
  }
};

const DefaultContext = createContext();

export const useDefaultContext = () => useContext(DefaultContext);

export const DefaultContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DefaultContext.Provider value={[state, dispatch]}>
      {children}
    </DefaultContext.Provider>
  );
};
