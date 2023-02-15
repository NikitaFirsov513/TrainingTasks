import { useState } from "react";
import { Input } from "./Input";
import "./Inputs.scss";

export const Inputs = () => {


  const [val, setVal] = useState<string>('')




  return (
    <div className="inputs">
      <h1>Inputs</h1>
      <Input val={val} setVal={setVal} isRequired={false} isErr={false} isActive={true} />
      <Input val={val} setVal={setVal} isRequired={true} isErr={false} isActive={true} />
      <Input val={val} setVal={setVal} isRequired={false} isErr={false} isActive={false} />
      <Input val={val} 
      setVal={setVal}
        isRequired={true}
        isErr={true}
        isActive={true}
        errMesssage={"Messsage"}
      />
    </div>
  );
};
