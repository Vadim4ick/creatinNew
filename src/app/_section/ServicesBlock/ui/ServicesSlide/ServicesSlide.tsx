import Link from "next/link";
import cls from "./style.module.scss";
import { classNames, springTransition } from "@/shared/lib";
import ReactMarkdown from "react-markdown";
import { BtnArrowThird } from "@/shared/icons/BtnArrowThird";
import { GetServicesNamesQuery } from "@/graphql/__generated__";
import { motion } from "framer-motion";
import { useMedia } from "@/shared/hooks/useMedia";

const BG_ARROW: Record<string, string> = {
  issledovaniya: "#A6BBEB",
  brending: "#F09B9B",
  dizajn: "#EBC980",
  "web-razrabotka": "#D0B6EB",
  "mobilnye-prilozheniya": "#EBBF98",
};

const cardVariants = {
  rest: {},
  hover: {},
};

const gradientVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
};

const imgVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
};

const arrowVariants = {
  rest: { scale: 0.6, opacity: 0, pointerEvents: "none" as const },
  hover: { scale: 1, opacity: 1, pointerEvents: "auto" as const },
};

const ServicesSlide = ({
  item,
}: {
  item: GetServicesNamesQuery["serviceNames"]["data"][0];
}) => {
  const isDesktop1200 = useMedia("(max-width: 1200px)");

  const steadyState = isDesktop1200.matches ? "hover" : "rest";
  const hoverProp = isDesktop1200.matches ? undefined : "hover"; // на таче ховера нет

  const title = item.attributes.name ?? "";
  const img = item.attributes.image_service.data?.attributes.url ?? "";
  const gradientClass = cls[item.attributes.nameID] || ""; // класс с нужным градиентом

  return (
    <motion.div
      className={classNames(`swiper-slide ${cls.slide}`, {}, [gradientClass])}
      initial="rest"
      animate={steadyState}
      whileHover={hoverProp}
      variants={cardVariants}
      transition={springTransition}
    >
      {/* Градиентный оверлей (фейдим на ховере) */}
      <motion.div
        className={cls.gradient}
        variants={gradientVariants}
        transition={springTransition}
      />

      {/* Кнопка-стрелка (появляется масштабированием) */}
      <motion.button
        type="button"
        className={cls.arrow}
        style={{ background: BG_ARROW[item.attributes.nameID] || "#A6BBEB" }}
        variants={arrowVariants}
        transition={springTransition}
        aria-label="Перейти"
      >
        <BtnArrowThird />
      </motion.button>

      {/* Контент */}
      <Link
        href={`/services/${item.id}`}
        className={classNames(`swiper-slide ${cls.inner}`)}
      >
        <div className={cls.image}>
          <motion.img
            src={img}
            alt={item.attributes.name}
            variants={imgVariants}
            transition={springTransition}
          />
        </div>

        <div className={cls.content}>
          <h2 className={cls.title}>{title}</h2>

          <ReactMarkdown
            skipHtml
            components={{
              p: ({ children }) => (
                <div className={cls.description}>{children}</div>
              ),
            }}
          >
            {item.attributes.service.data.attributes.description}
          </ReactMarkdown>
        </div>
      </Link>
    </motion.div>
  );
};

export { ServicesSlide };
