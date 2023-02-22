// isErr errMesssage isActive

import { Dispatch, useRef } from "react";
import { errSVG } from "../../icons/icons";

type InputTypeProps = {
  isRequired: boolean;
  isErr: boolean;
  errMesssage?: string;
  isActive: boolean;
  placeholder?: string;
  val?: string;
  setVal: Dispatch<string>
};

export const Input = ({
  isRequired,
  isErr,
  errMesssage,
  isActive,
  placeholder,
  val,
  setVal
}: InputTypeProps) => {


  const inputRef = useRef<HTMLInputElement | null>(null);


  const handleChange = () => {

    if (inputRef == null)
      return
    if (inputRef.current?.value === undefined)
      return
    if (setVal === undefined)
      return
    setVal(inputRef.current?.value);


  }





  return (
    <div className="inputs__container ">
      <label htmlFor="">
        Label
        {isRequired ? (
          <span className="inputs__required">*</span>
        ) : (
          <span className="inputs__not-required">(Not Required)</span>
        )}
      </label>
      <div className={"inputs__input " + (isErr ? "inputs__input--err" : "")}>
        {isErr ? (
          errSVG
        ) : (
          ""
        )}

        {isActive ? (
          <input ref={inputRef} type="text" value={val} onChange={elem => { handleChange() }} placeholder={placeholder} />
        ) : (
          <input ref={inputRef} type="text" value={val} disabled placeholder={placeholder} />
        )}
        {isErr ? <p>{errMesssage}</p> : ""}
      </div>
    </div>
  );
};
