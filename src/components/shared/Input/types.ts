import React from "react";

export type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
  maxLength?: number;
  checked?: boolean;
  type: string;
  className?: string;
};
