import cls from "./style.module.scss";

export const Skeleton = ({
  width,
  height,

  className = "",
}: {
  width?: number | string;
  height?: number | string;
  className?: string;
}) => (
  <div
    className={`${cls.skeleton} ${className}`}
    style={{
      width,
      height,
    }}
  />
);
