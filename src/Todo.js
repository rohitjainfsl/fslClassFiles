/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Todo() {
  const [inputValue, setInputvalue] = useState("");
  const [inputValues, setInputvalues] = useState([]);
  const [editing, setEditing] = useState(false);

  //Events are passed implicitly in react to event handlers

  function modifyInputValue(e) {
    setInputvalue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editing !== false) {
      inputValues[editing] = inputValue;
      setEditing(false);
    } else setInputvalues([...inputValues, inputValue]);

    setInputvalue("");
  }

  function handleDelete(e, index) {
    e.preventDefault();
    setInputvalues(
      inputValues.filter((task, id) => {
        return id !== index;
      })
    );
  }
  function handleEdit(e, index) {
    e.preventDefault();
    setInputvalue(inputValues[index]);
    setEditing(index);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={inputValue}
          onChange={modifyInputValue}
        ></input>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {inputValues.map((task, index) => {
          // return <li><a href="" onClick={handleDelete}>{task} <DeleteIcon /></a></li>
          return (
            <li>
              {task}
              <a href="" onClick={(e) => handleDelete(e, index)}>
                <DeleteIcon />
              </a>
              <a
                href=""
                onClick={(e) => {
                  handleEdit(e, index);
                }}
              >
                <EditIcon />
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
