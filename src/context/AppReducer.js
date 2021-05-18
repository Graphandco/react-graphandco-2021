export default (state, action) => {
    switch (action.type) {
      case 'REMOVE_TIP':
        return {
          ...state,
          tips: state.tips.filter(tip => {
            return tip.id !== action.payload;
          })
        }
      case 'ADD_TIP':
        return {
          ...state,
          tips: [action.payload, ...state.tips]
        }
      case 'EDIT_TIP':
        const updateTip = action.payload;
  
        const updateTips = state.tips.map(tip => {
          if (tip.id === updateTip.id) {
            return updateTip;
          }
          return tip;
        })
        return {
          ...state,
          tips: updateTips
        }
  
      default:
        return state;
    }
  }