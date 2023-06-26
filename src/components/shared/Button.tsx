import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  version?: string;
  children?: any;
}

const Button = ({
  children,
  version = "primary",
  type = "button",
  isDisabled = false,
}: ButtonProps) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

export default Button;
