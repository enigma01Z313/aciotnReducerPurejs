const todoReducer = require("./todoReducer");

let action;

let todos = ["git tutorilal", "readux tutorial"];

const addTodo = (todo) => {
  todos = [...todos, todo];
};
















// addTodo("salam");
action = { type: "ADD_TODO", payload: "salam" };
todos = todoReducer(todos, action);
console.log(todos);

///////////////
action = { type: "REMOVE_TODO", payload: "readux tutorial" };
todos = todoReducer(todos, action);
console.log(todos);
