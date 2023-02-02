import { ITask } from "../../App";
import { useList } from "../../utils/useList";
import { ListElement } from "./ListElement";

export const ListTasks = () => {
  const todos = useList();
  return (
    <div className="app__list">
      {todos.map((elem, i) => (
        <ListElement key={elem.text + i} task={elem} id={i} />
      ))}
    </div>
  );
};
