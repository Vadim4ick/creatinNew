import { ReactNode } from "react";
import { classNames } from "../lib";

interface ButtonProps extends ReactTagProps<"button"> {
  className?: string;
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  const { className, children, ...othersProps } = props;

  return (
    <button {...othersProps} className={classNames("btn", {}, [className])}>
      <span className="btn__text">{children}</span>
    </button>
  );
};

export { Button };
