import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  tips: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeTip = (id) => {
    dispatch({
      type: 'REMOVE_TIP',
      payload: id
    })
  }

  const addTip = (tip) => {
    dispatch({
      type: 'ADD_TIP',
      payload: tip
    })
  }

  const editTip = (tip) => {
    dispatch({
      type: 'EDIT_TIP',
      payload: tip
    })
  }

  return (
    <GlobalContext.Provider value={{
      tips: state.tips,
      removeTip,
      addTip,
      editTip
    }}>
      {children}
    </GlobalContext.Provider>
  )
}