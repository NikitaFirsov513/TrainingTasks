import React, { MutableRefObject, useEffect, useRef } from "react";
import { createRef } from "react";
import { useMemo } from "react";
import { ITask } from "../../App";

interface IListElementProps {
  task: ITask;
  id: number;
}

export const ListElement = ({ task, id }: IListElementProps) => {
  const lableRef = createRef<HTMLLabelElement>();

  const change = () => {
    if (!lableRef.current) return;

    task.isDone = !task.isDone;
    console.group();
    console.log(lableRef.current);
    console.log(task);
    console.groupEnd();
    lableRef.current.classList.toggle("done");
  };

  useEffect(() => {}, [task]);

  return (
    <div onClick={(e) => change()} className="app__element">
      <input
        type="checkbox"
        className="custom-checkbox"
        id={"happy" + id}
        name="happy"
        value="yes"
        defaultChecked={task.isDone}
      />
      <label ref={lableRef} htmlFor="happy"></label>
      <p >{task.text}</p>
    </div>
  );
};
//pfvtybnm yf use ref
