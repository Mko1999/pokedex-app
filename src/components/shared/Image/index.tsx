import React from "react";

import { ImageProps } from "./types";

const Image: React.FC<ImageProps> = ({
  id,
  src,
  alt,
  className,
  loading,
  draggable,
}) => {
  return (
    <img
      id={id}
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      draggable={draggable}
    />
  );
};

export default Image;
