import { ReactNode } from "react";
import { arrowSVGLeft, arrowSVGRight } from "../../icons/icons";
import { CostomButton } from "./Button";
import "./Buttons.scss";



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
