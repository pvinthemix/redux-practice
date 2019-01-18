export const groceriesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_GROCERY":
      return [...state, action.groceryItem];
    case "REMOVE_GROCERY":
      let newState = [...state];
      newState.splice(action.groceryIndex, 1);
      return newState;
    default:
      return state;
  }
};
