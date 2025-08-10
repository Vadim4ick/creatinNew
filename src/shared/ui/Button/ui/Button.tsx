import { ReactNode } from "react";
import { classNames } from "../../../lib";
import cls from "./style.module.scss";

interface ButtonProps extends ReactTagProps<"button"> {
  className?: string;
  children: ReactNode;
  variant?: "default";
}

const Button = (props: ButtonProps) => {
  const { className, children, variant = "default", ...othersProps } = props;

  return (
    <button {...othersProps} className={classNames("btn", {}, [className])}>
      {variant === "default" && <span className="btn__text">{children}</span>}
    </button>
  );
};

export { Button };
