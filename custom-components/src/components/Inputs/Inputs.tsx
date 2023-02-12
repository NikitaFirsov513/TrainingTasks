import { Input } from "./Input";
import "./Inputs.scss";

export const Inputs = () => {
  return (
    <div className="inputs">
      <h1>Inputs</h1>
      <Input isRequired={false} isErr={false} isActive={true} />
      <Input isRequired={true} isErr={false} isActive={true} />
      <Input isRequired={false} isErr={false} isActive={false} />
      <Input
        isRequired={true}
        isErr={true}
        isActive={true}
        errMesssage={"Messsage"}
      />
    </div>
  );
};
