import React from "react";

import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  className,
  type,
  onClick,
  disabled,
  dataAttribute,
  children,
}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-attribute={dataAttribute}
    >
      {children}
    </button>
  );
};

export default Button;
