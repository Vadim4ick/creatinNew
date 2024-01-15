import { classNames } from "@/shared/lib";
import React, { useState } from "react";
import MaskedInput from "react-input-mask";

interface InputProps {
  id: string;
  label: string;
  type: "text" | "tel" | "email";
  register: any;
  className?: string;
  watch?: string | number;
  inpType?: "input" | "textarea";
  mask?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  register,
  className,
  watch,
  inpType = "input",
  mask,
}) => {
  const [focus, onFocus] = useState(false);

  const InputComponent = mask ? MaskedInput : "input";

  return (
    <div
      className={classNames(
        "form__item",
        {
          "_form-focus": focus,
          "_form-field": Boolean(watch),
          "form-textarea": inpType === "textarea",
        },
        []
      )}
    >
      <label htmlFor={id} className="input-label">
        {label}
      </label>

      {inpType === "input" && (
        <InputComponent
          autoComplete="off"
          type={type}
          id={id}
          {...register}
          className={classNames(
            "input",
            {
              "_form-focus": focus,
              "_form-field": Boolean(watch),
            },
            [className]
          )}
          onFocus={() => onFocus(true)}
          onBlur={() => onFocus(false)}
          mask={mask}
        />
      )}

      {inpType === "textarea" && (
        <textarea
          autoComplete="off"
          type={type}
          id={id}
          {...register}
          className={classNames(
            "input",
            {
              "_form-focus": focus,
              "_form-field": Boolean(watch),
            },
            [className]
          )}
          onFocus={() => onFocus(true)}
          onBlur={() => onFocus(false)}
        ></textarea>
      )}
    </div>
  );
};

export { Input };
