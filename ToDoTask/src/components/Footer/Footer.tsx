import { Dispatch, SetStateAction } from "react";
import { ITask } from "../../App";
import { useList, useRemoveTodo } from "../../utils/useList";

export const Footer = () => {
  const todos = useList();
  const remove = useRemoveTodo();

  const clearAll = () => {
    remove();
  };

  return (
    <div className="app__footer">
      <div className="app__footer-elem">
        <p>{todos.length} item selected</p>
      </div>
      <div onClick={(e) => clearAll()} className="app__footer-elem">
        <p>Clear All</p>
      </div>
    </div>
  );
};
