"use client";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "l-jelly": any; // Замените 'any' на тип вашего элемента, если он известен
    }
  }
}

import { useEffect } from "react";
import "./Loader.scss";

export const Loader = () => {
  useEffect(() => {
    const { jelly } = require("ldrs");
    jelly.register();
  }, []);

  return (
    <div className="lds-dual-ring">
      <l-jelly size="40" speed="1.1" color="blue"></l-jelly>
    </div>
  );
};
