const todoReducer = require("./todoReducer");

const createStore = function (reducer, def) {
  let currentState = def;

  // dispatch function in the same scope will have access to the most current state and your reducer(s)
  const dispatch = (action) =>
    new Promise((resolve, reject) => {
      setTimeout(function () {
        currentState = reducer(currentState, action);
        resolve(currentState);
      }, 5000);
    });

  return [currentState, dispatch];
};




(async () => {
  let [todos, todoDispatch] = createStore(todoReducer, ["farzin"]);

  await todoDispatch({ type: "ADD_TODO", payload: "salam" });
  todos = await todoDispatch({ type: "ADD_TODO", payload: "mohamad" });

  console.log(todos);
})();
