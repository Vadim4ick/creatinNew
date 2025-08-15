"use client";

import { classNames } from "@/shared/lib";
import Link from "next/link";
import { useContext, useRef, useState } from "react";
import cls from "./Header.module.scss";
import { Logo } from "@/shared/icons/Logo";
import { Burger } from "./Burger";

import { AnimatePresence, motion } from "framer-motion";
import { Arrow } from "@/shared/icons/Arrow";
import { PopupProviderContext } from "@/shared/providers/popupProvider";
import {
  getRouteAbout,
  getRoutePortfolio,
  getRouteServices,
} from "@/shared/const/pages";

const panelVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const listVariants = {
  open: {
    transition: {
      staggerChildren: 0.1, // задержка между элементами (минимальная)
      staggerDirection: 1, // -1 = снизу вверх, 1 = сверху вниз
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1, // чуть быстрее при закрытии
      staggerDirection: 1, // сверху вниз
    },
  },
};

const itemVariants = {
  closed: {
    y: 16,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  open: {
    y: 0,
    transition: { duration: 0.32, ease: "easeOut" },
  },
};

const sideVariants = {
  closed: {
    y: 24,
    transition: { duration: 0.28, ease: "easeOut" },
  },
  open: {
    y: 0,
    transition: { duration: 0.34, ease: "easeOut" },
  },
};

const MENU = [
  { label: "Услуги", href: `${getRouteServices()}/1` },
  { label: "Портфолио", href: getRoutePortfolio() },
  { label: "Студия", href: getRouteAbout() },
  { label: "Контакты", href: "#!" },
];

const Header = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);

  const { onClickPopup } = useContext(PopupProviderContext);

  const clickPopup = () => {
    onClickPopup();
  };

  return (
    <>
      <header ref={headerRef} className={classNames(cls.header)}>
        <div className={cls.container}>
          <div className={cls.body}>
            <Burger
              className={cls.burger}
              open={open}
              onClick={() => setOpen(!open)}
            />

            <Link href={"/"} className={cls.logo}>
              <Logo />
            </Link>

            <button onClick={clickPopup} className={cls.btnDiscuss}>
              Обсудить проект
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="menu"
              className={cls.panel}
              initial="closed"
              animate="open"
              exit="closed"
              variants={panelVariants}
            >
              <div className={cls.panelInner}>
                <motion.ul
                  className={cls.list}
                  variants={listVariants}
                  initial="closed"
                  animate="open"
                  layout
                  exit="closed"
                >
                  {MENU.map((item) => (
                    <motion.li
                      key={item.href}
                      layout
                      className={cls.item}
                      variants={itemVariants}
                      transition={{
                        layout: { duration: 0.28, ease: "easeOut" }, // как двигаются соседи/рефлоу
                      }}
                    >
                      <a href={item.href} className={cls.link}>
                        <span>{item.label}</span>

                        <button className={cls.arrow}>
                          <Arrow />
                        </button>
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.aside
                  className={cls.side}
                  variants={sideVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <div className={cls.contacts}>
                    <div className={cls.contactBlock}>
                      <div className={cls.label}>Созвониться</div>
                      <a href="tel:+79190003003" className={cls.value}>
                        +7 (919) 000-30-03
                      </a>
                    </div>

                    <div className={cls.contactBlock}>
                      <div className={cls.label}>Написать</div>
                      <a href="mailto:hello@creatin.ru" className={cls.value}>
                        creat_in@mail.ru
                      </a>
                    </div>
                  </div>

                  <a href="#!" className={cls.secondaryCta}>
                    Отраслевые решения
                    <button className={cls.arrow}>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M-1.90961e-07 5.63131L-2.46153e-07 4.36869L7.57576 4.36869L4.10354 0.896464L5 -2.18557e-07L10 5L5 10L4.10354 9.10354L7.57576 5.63131L-1.90961e-07 5.63131Z" />
                      </svg>
                    </button>
                  </a>
                </motion.aside>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="mobile-menu-overlay"></div>
    </>
  );
};

export { Header };
