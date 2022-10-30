import { useState, useCallback } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [todo, setTodo] = useState({
    id: todos.length + 1,
    name: "",
    completed: false,
  });

  const resetTodo = useCallback(() => {
    setTodo({
      id: todos.length + 1,
      name: "",
      completed: false,
    });
  }, [todos]);

  const toggleComplete = (todo, i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1, {
      ...todo,
      completed: !todo.completed,
    });
    setTodos(newTodos);
  };

  return {
    todos,
    setTodos,
    selectedTodo,
    setSelectedTodo,
    todo,
    setTodo,
    resetTodo,
    toggleComplete,
  };
}
