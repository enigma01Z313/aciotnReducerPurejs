const todoReducer = require("./todoReducer");

const createStore = function (reducer, def) {
  let currentState = def;

  // dispatch function in the same scope will have access to the most current state and your reducer(s)
  const dispatch = (action) => {
    currentState = reducer(currentState, action);
    return currentState;
  };

  return [currentState, dispatch];
};





let [todos, todoDispatch] = createStore(todoReducer, ['farzin']);
let [tasks, taskDispatch] = createStore(todoReducer, ['task1']);

todoDispatch({ type: "ADD_TODO", payload: "salam" });
todos = todoDispatch({ type: "ADD_TODO", payload: "mohamad" });


tasks = taskDispatch({ type: "ADD_TODO", payload: "task2" });

console.log(todos);
console.log(tasks);
