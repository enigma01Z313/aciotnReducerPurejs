const todoReducer = (state, action) => {
    if (action.type === "ADD_TODO") return [...state, action.payload];
    if (action.type === "REMOVE_TODO")
      return state.filter((item) => item !== action.payload);
    if (action.type === "LOAD_TODOS") return [...state];
  };;

module.exports = todoReducer;
