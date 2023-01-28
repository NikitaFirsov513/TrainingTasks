import { ITask } from "../../App";
import { ListElement } from "./ListElement";

interface IListTasksProps {
  tasks: ITask[];
}

export const ListTasks = ({ tasks }: IListTasksProps) => {
  return (
    <div className="app__list">
      {tasks.map((elem, i) => (
        <ListElement key={elem.text + i} task={elem} id={i} />
      ))}
    </div>
  );
};
