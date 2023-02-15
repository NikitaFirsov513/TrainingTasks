// isErr errMesssage isActive

import { Dispatch, useRef } from "react";

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
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.92611 13.2966L9.94567 13.279L9.96327 13.2595C10.0647 13.1468 10.1612 13.014 10.2308 12.836C10.2923 12.6864 10.3333 12.515 10.3333 12.3333C10.3333 12.1492 10.2911 11.9755 10.2282 11.8244C10.164 11.6704 10.0747 11.531 9.96327 11.4072L9.94567 11.3876L9.92611 11.37C9.80228 11.2586 9.66287 11.1693 9.50893 11.1051C9.18586 10.9705 8.81406 10.9705 8.49099 11.1051C8.33705 11.1693 8.19764 11.2586 8.07381 11.37L8.05425 11.3876L8.03665 11.4072C7.9252 11.531 7.8359 11.6704 7.77175 11.8244C7.70878 11.9755 7.66663 12.1492 7.66663 12.3333C7.66663 12.515 7.70762 12.6864 7.76915 12.836C7.83871 13.014 7.93524 13.1468 8.03665 13.2595L8.05425 13.279L8.07381 13.2966C8.19763 13.4081 8.33704 13.4974 8.49098 13.5615C8.64213 13.6245 8.81577 13.6667 8.99996 13.6667C9.18414 13.6667 9.35779 13.6245 9.50893 13.5615L9.31663 13.1L9.50893 13.5615C9.66288 13.4974 9.80229 13.4081 9.92611 13.2966ZM1.16663 9C1.16663 4.68448 4.68443 1.16667 8.99996 1.16667C13.3155 1.16667 16.8333 4.68448 16.8333 9C16.8333 13.3155 13.3155 16.8333 8.99996 16.8333C4.68443 16.8333 1.16663 13.3155 1.16663 9ZM8.99996 4.54167C8.38215 4.54167 7.87496 5.04886 7.87496 5.66667V9.83333C7.87496 10.4511 8.38215 10.9583 8.99996 10.9583C9.61777 10.9583 10.125 10.4511 10.125 9.83333V5.66667C10.125 5.04886 9.61777 4.54167 8.99996 4.54167Z"
              fill="#CC3535"
              stroke="#CC3535"
            />
          </svg>
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
