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
      setError("No able to add empty text, Put some text");
      return;
    }
    // Update
    if (editId != null) {
      setTodos((prevData) =>
        prevData.map((todo) =>
          todo.id == editId
            ? { ...todo, name: text.trim(), completed: todo.completed }
            : todo
        )
      );
      setEditId(null);
      setText("");
    } else {
      // add new todo
      const addNew = { id: index, name: text, completed: false };
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

  const handleCompletedTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

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
          </div>
        </form>

        {!!error && <h4 className="error">{error}</h4>}

        <div className="todo-list-container">
          {todos.length > 0 ? (
            todos.map((todo) => {
              return (
                <div className="item-container" key={todo.id}>
                  <div
                    className={`todo-item ${
                      todo.completed ? "completed" : ""
                    }`}>
                    {todo.name}
                  </div>
                  <div className="action-buttons">
                    <button
                      className={`delete-button ${
                        todo.completed ? "disabled" : ""
                      }`}
                      disabled={todo.completed}
                      onClick={() => handleDeleteTodo(todo.id)}>
                      &#x2716;
                    </button>
                    <button
                      className={`edit-button ${
                        todo.completed ? "disabled" : ""
                      }`}
                      disabled={todo.completed}
                      onClick={() => handleEditTodo(todo)}>
                      &#x270E;
                    </button>
                    {!todo.completed ? (
                      <button
                        className="done-button"
                        onClick={() => handleCompletedTodo(todo.id)}>
                        &#x2714;
                      </button>
                    ) : (
                      <button
                        className="done-button"
                        onClick={() => handleCompletedTodo(todo.id)}>
                        &#x274c;
                      </button>
                    )}
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
