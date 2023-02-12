import { ReactNode } from "react";
import { CostomButton } from "./Button";
import "./Buttons.scss";

const arrowSVGRight = (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.46906 13.28L10.8157 8.93333C11.3291 8.42 11.3291 7.58 10.8157 7.06667L6.46906 2.72"
      stroke="white"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const arrowSVGLeft = (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.7614 13.28L6.41475 8.93333C5.90142 8.42 5.90142 7.58 6.41475 7.06667L10.7614 2.72"
      stroke="white"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Buttons = () => {
  return (
    <div className="buttons">
      <h1>Buttons</h1>
      <div className="buttons__list">
        <CostomButton isDisabled={false}>Label</CostomButton>
        <CostomButton isDisabled={false}>{arrowSVGLeft} Label</CostomButton>
        <CostomButton isDisabled={false}>
          Label
          {arrowSVGRight}
        </CostomButton>
      </div>
      <div className="buttons__list">
        <CostomButton isDisabled={true}>Label</CostomButton>
        <CostomButton isDisabled={true}>{arrowSVGLeft} Label</CostomButton>
        <CostomButton isDisabled={true}>
          Label
          {arrowSVGRight}
        </CostomButton>
      </div>
    </div>
  );
};
