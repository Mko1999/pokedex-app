import React, { forwardRef } from "react";

import { InputProps } from "./types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type, value, placeholder, onChange, className, maxLength, checked },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        className={className}
        maxLength={maxLength}
        checked={checked}
        placeholder={placeholder}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;
