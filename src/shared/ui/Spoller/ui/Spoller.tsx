"use strict";

import { classNames, springTransition } from "@/shared/lib";
import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SpollerProps {
  className?: string;
  style?: any;
  children: React.ReactNode;
  btn: ReactNode;
}

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

const panelVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

export function Spoller(props: SpollerProps) {
  const { children, className, btn, style } = props;

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            style={style}
            data-open={open}
            className={classNames(
              "",
              {
                "_spoller-active": open,
              },
              [className]
            )}
          >
            {btn}
          </Disclosure.Button>

          <motion.div
            variants={variants}
            initial="closed"
            animate={open ? "open" : "closed"}
            transition={springTransition}
          >
            <motion.div variants={panelVariants} transition={springTransition}>
              <Disclosure.Panel static>{children}</Disclosure.Panel>
            </motion.div>
          </motion.div>
        </>
      )}
    </Disclosure>
  );
}
