import { useState } from "react";
import { ITask } from "../../App";
import { Dispatch, SetStateAction } from "react";

interface IFormContainerProps {
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}

export const FormContainer = ({ tasks, setTasks }: IFormContainerProps) => {
  const [text, setText] = useState("");
  const Add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text == "") return;

    setTasks((old) => [...old, { text: text, isDone: false }]);
  };

  return (
    <form action="" onSubmit={(e) => Add(e)}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        name="text"
      />
      <input type="submit" value="Add" />
    </form>
  );
};
