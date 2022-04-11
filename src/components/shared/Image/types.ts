export type ImageProps = {
  id?: string;
  alt: string;
  className?: string;
  src: string;
  loading?: "eager" | "lazy" | undefined;
  draggable?: boolean | undefined;
};
