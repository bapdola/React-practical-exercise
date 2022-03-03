import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const { listTodos, checkAll, isCheckedAll } = props;
  localStorage.setItem("DataTodo", JSON.stringify(listTodos));
  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        onChange={() => {
          checkAll();
        }}
        checked={isCheckedAll}
      />
      <label htmlFor="toggle-all" onClick={checkAll}></label>
      <ul className="todo-list">
        {listTodos.map((todo, index) => (
          <Todo index={index} key={todo.id} todo={todo} {...props} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
