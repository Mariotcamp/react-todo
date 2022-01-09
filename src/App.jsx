import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => {
    if (incompleteTodos.length >= 5) {
      setTodoText("");
    } else {
      setTodoText(event.target.value);
    }
  };
  const onClickAdd = () => {
    if (todoText === "") {
      return;
    } else {
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);
      setTodoText("");
    }
  };
  const onClickDelte = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setState(newIncompleteTodos, newCompleteTodos);
  };
  const onClickReverse = (index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setState(newIncompleteTodos, newCompleteTodos);
  };

  const setState = (Incomp, comp) => {
    setIncompleteTodos(Incomp);
    setCompleteTodos(comp);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelte={onClickDelte}
      />
      <CompleteTodos todos={completeTodos} onClickReverse={onClickReverse} />
    </>
  );
};
