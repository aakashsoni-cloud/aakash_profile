import { useState } from "react";
import "./index.css";
import Navigation from "../navigation";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (error) setError("");
  };

  const handleAddOrUpdateTodo = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setError("No able to add empty text");
      return;
    }
    // Update
    if (editId != null) {
      setTodos((prevData) =>
        prevData.map((todo) =>
          todo.id == editId ? { ...todo, name: text.trim() } : todo
        )
      );
      setEditId(null);
      setText("");
    } else {
      // add new todo
      const addNew = { id: index, name: text };
      setTodos([...todos, addNew]);
      setIndex((prev) => prev + 1);
      setText("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (todo) => {
    setText(todo.name);
    setEditId(todo.id);
  };

  console.log(todos);

  return (
    <div>
      <Navigation />

      <div className="main-container">
        <form className="action-container" onSubmit={handleAddOrUpdateTodo}>
          <input
            type="text"
            className="input"
            placeholder="add todo"
            value={text}
            onChange={handleTextChange}
          />
          <div className="button-container">
            <button type="submit">{editId !== null ? "Update" : "Add"}</button>
            {!!error && <h4 className="error">{error}</h4>}
          </div>
        </form>

        <div className="todo-list-container">
          {todos.length > 0 ? (
            todos.map((todo) => {
              return (
                <div className="item-container" key={todo.id}>
                  <div className="todo-item">{todo.name}</div>
                  <div className="action-buttons">
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteTodo(todo.id)}>
                      &#x2716;
                    </button>
                    <button
                      className="edit-button"
                      onClick={() => handleEditTodo(todo)}>
                      &#x270E;
                    </button>
                    <button
                      className="done-button"
                      onClick={() => handleEditTodo(todo)}>
                      &#x2714;
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <>No Todo(s) in list</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
