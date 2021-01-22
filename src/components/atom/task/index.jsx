import React, { useState } from "react";
import DeleteButton from "../deleteButton/deteleButton";
import "./task.css";
import PropTypes from "prop-types";
import CheckBox from "../checkBox";

const Task = ({ task, id, deleteItem, isActive, change }) => {
  const deleteWraper = () => {
    deleteItem(id);
  };
  // const [check, setCheck] = useState(false);
  const checked = isActive;
  const checkBox = () => {
    // setCheck(checked)
    change(id);
  };
  return (
    <li className={!isActive ? "listItem" : "listItemColor"}>
      {task}
      <div className="wrap">
        <CheckBox state={checked} check={checkBox} />
        <DeleteButton onClick={deleteWraper} />
      </div>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.string,
  id: PropTypes.number,
  deleteItem: PropTypes.func,
};
export default Task;
