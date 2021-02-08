import React from "react";
import classNames from "classnames";

const SvgCheckboxIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 200 25"
      className="todo__icon"
    >
      <use xlinkHref="#todo__line" className="todo__line"></use>
      <use xlinkHref="#todo__box" className="todo__box"></use>
      <use xlinkHref="#todo__check" className="todo__check"></use>
      <use xlinkHref="#todo__circle" className="todo__circle"></use>
    </svg>
  );
};

const DelimeterOfTasks = () => {
  return <div className="delimeter"></div>;
};

const Task = ({ id, done, text, onChange, onDelete }) => {
  const ListItemClass = classNames("item", { "task-done": done });

  return (
    <>
      <label className={ListItemClass}>
        <input
          className="todo__state"
          type="checkbox"
          defaultChecked={done}
          onChange={() => onChange(id)}
        />
        <SvgCheckboxIcon />
        <div className="todo__text">{text}</div>
        <button className="delete" onClick={() => onDelete(id)}>
          +
        </button>
      </label>
      <DelimeterOfTasks />
    </>
  );
};

export default Task;
