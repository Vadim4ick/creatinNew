import { ReactNode } from "react";
import { BtnArrow } from "../icons/BtnArrow";
import { classNames } from "../lib";

type CustomLinkVariant = "ultramarin" | "chartreuse" | "white";

interface CustomLinkProps extends ReactTagProps<"a"> {
  variant?: CustomLinkVariant;
  children: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

const CustomLink = (props: CustomLinkProps) => {
  const {
    variant = "ultramarin",
    children,
    iconPosition,
    className,
    ...otherProps
  } = props;

  const mods = {
    "btn--default": variant === "ultramarin",
    "btn--alt": variant === "chartreuse",
    "btn--whte": variant === "white",
  };

  return (
    <a
      {...otherProps}
      className={classNames("btn btn--hasarrow", mods, [className])}
    >
      <span className="btn__text">{children}</span>

      {iconPosition === "right" && (
        <span className="btn__arrow">
          <BtnArrow />
        </span>
      )}
    </a>
  );
};

export { CustomLink };
