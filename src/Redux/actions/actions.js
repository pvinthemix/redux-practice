export const addGrocery = groceryItem => ({
  type: "ADD_GROCERY",
  groceryItem
});

export const removeGrocery = groceryIndex => ({
  type: "REMOVE_GROCERY",
  groceryIndex
});

//2 things to have in an action: the type and the item you are passing in
