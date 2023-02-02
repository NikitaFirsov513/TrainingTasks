import { useState } from "react";
import { ITask } from "../../App";
import { Dispatch, SetStateAction } from "react";
import { useAddOne } from "../../utils/useList";

export const FormContainer = () => {
  const [text, setText] = useState("");

  const addOne = useAddOne();

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text == "") return;
    addOne(text);
  };

  return (
    <form action="" onSubmit={(e) => add(e)}>
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
