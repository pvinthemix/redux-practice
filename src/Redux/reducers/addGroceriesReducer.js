export const addGroceriesReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_GROCERY":
      return [...state, action.groceryItem]
    default: 
      return state
  }
} 