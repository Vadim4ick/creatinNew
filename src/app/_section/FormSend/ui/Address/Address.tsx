import { FormSendFragmentFragment } from "@/graphql/__generated__";
import { formatPhoneNumber } from "@/shared/helpers/numberFormatter";
import Link from "next/link";
import { motion } from "framer-motion";

import cls from "./style.module.scss";
import { BtnArrowSecondary } from "@/shared/icons/BtnArrowSecondary";
import { springTransition } from "@/shared/lib";

interface AddressProps {
  form: FormSendFragmentFragment;
}

const cardVariants = {
  idle: {},
  hover: {},
} as const;

const arrowVariants = {
  idle: { rotate: 0, ["--arrow-stroke" as any]: "#7a7b7f" },
  hover: { rotate: 90, ["--arrow-stroke" as any]: "#c0ff00" },
} as const;

const textVariants = {
  idle: { color: "#ffffff" },
  hover: { color: "#c0ff00" },
} as const;

const Address = ({ form }: AddressProps) => {
  return (
    <div className={cls.contancs}>
      {form.number && (
        <motion.div
          className={cls.item}
          variants={cardVariants}
          initial="idle"
          whileHover="hover"
          transition={springTransition}
        >
          <Link href={`tel:${form.number}`}>
            <div className={cls.header}>
              <span>Позвонить</span>

              <motion.button
                type="button"
                variants={arrowVariants}
                transition={springTransition}
                className={cls.iconBtn}
                aria-label="Позвонить"
              >
                <BtnArrowSecondary className={cls.arrow} />
              </motion.button>
            </div>

            <motion.span variants={textVariants} transition={springTransition}>
              {formatPhoneNumber(String(form.number))}
            </motion.span>
          </Link>
        </motion.div>
      )}

      {form.email && (
        <motion.div
          className={cls.item}
          variants={cardVariants}
          initial="idle"
          whileHover="hover"
          transition={springTransition}
        >
          <Link href={`mailto:${form.email}`}>
            <div className={cls.header}>
              <span>Написать</span>

              <motion.button
                type="button"
                variants={arrowVariants}
                transition={springTransition}
                className={cls.iconBtn}
                aria-label="Написать"
              >
                <BtnArrowSecondary className={cls.arrow} />
              </motion.button>
            </div>

            <motion.span variants={textVariants} transition={springTransition}>
              {form.email}
            </motion.span>
          </Link>
        </motion.div>
      )}

      {form.address && (
        <motion.div
          className={cls.item}
          variants={cardVariants}
          initial="idle"
          whileHover="hover"
          transition={springTransition}
        >
          <a
            target="_blank"
            href="https://yandex.com.ge/maps/org/kreatin/83172202372/?ll=38.971131%2C45.042094&z=13.93"
            rel="noreferrer"
          >
            <div className={cls.header}>
              <span>Встретиться в Краснодаре</span>

              <motion.button
                type="button"
                variants={arrowVariants}
                transition={springTransition}
                className={cls.iconBtn}
                aria-label="Маршрут"
              >
                <BtnArrowSecondary className={cls.arrow} />
              </motion.button>
            </div>

            <motion.span variants={textVariants} transition={springTransition}>
              {form.address}
            </motion.span>
          </a>
        </motion.div>
      )}
    </div>
  );
};

export { Address };
