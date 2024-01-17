"use client";

import { jelly } from "ldrs";
import "./Loader.scss";

jelly.register();

export const Loader = () => {
  return (
    <div className="lds-dual-ring">
      <l-jelly size="40" speed="1.1" color="blue"></l-jelly>
    </div>
  );
};
