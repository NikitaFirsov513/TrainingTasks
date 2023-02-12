import { ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
  isDisabled: boolean;
};

export const CostomButton = ({ children, isDisabled }: TButtonProps) => {
  if (isDisabled === true) {
    return <button disabled>{children}</button>;
  }
  return <button>{children}</button>;
};
