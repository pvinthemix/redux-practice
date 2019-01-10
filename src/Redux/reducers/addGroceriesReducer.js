export const addGroceriesReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_GROCERY":
      state.push(action.groceryItem)
      return state
    default: 
      return state
  }
} 