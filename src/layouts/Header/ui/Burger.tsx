"use client";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import { classNames } from "@/shared/lib";

type Props = {
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  open?: boolean;
};

export const Burger: React.FC<Props> = ({
  onClick,
  open,
  className = "",
  ariaLabel = "Открыть меню",
}) => {
  const toggle = () => {
    onClick?.();
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={classNames(styles.burger, { [styles.active]: open }, [
        className,
      ])}
      onClick={toggle}
    >
      <span className={styles.line} />
    </button>
  );
};
