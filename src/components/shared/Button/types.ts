import React from "react";

export type ButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  dataAttribute?: string | number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
