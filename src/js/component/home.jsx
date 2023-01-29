import React, { useState, useEffect, useRef } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
		if (inputValue === "") {alert("input task")}
		else {
      setTodos(todos.concat(inputValue));
      setInputValue("");
    }}
  };

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(-1);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((t, currentIndex) => index !== currentIndex));
  };
  return (
    <div className="container">
      <h1>todos</h1>
      <ul>
        <li>
		<input
            type="text"
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
          />
        </li>
        {todos.length > 0 ? (
        todos.map((t, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="task-item"

          >
            {t}
            {hoverIndex === index && (
              <i
                className="fas fa-trash alt"
                onClick={() => handleDelete(index)}
              ></i>
            )}
          </li>
        ))
      ) : (
        <li>No tasks, add a task</li>
      )}
    </ul>
    <div>{todos.length} tasks</div>
  </div>
);
	  }
export default Home;
