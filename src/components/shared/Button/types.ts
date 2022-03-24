import React from "react";

export type ButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  dataAttribute?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
