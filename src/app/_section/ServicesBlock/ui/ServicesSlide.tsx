import Link from "next/link";
import cls from "./style.module.scss";
import { classNames } from "@/shared/lib";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { BtnArrowThird } from "@/shared/icons/BtnArrowThird";
import { GetServicesNamesQuery } from "@/graphql/__generated__";

const ServicesSlide = ({
  item,
}: {
  item: GetServicesNamesQuery["serviceNames"]["data"][0];
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const title = item.attributes.name ?? "";
  const img = item.attributes.image_service.data?.attributes.url ?? "";

  return (
    <div
      className={classNames(`swiper-slide ${cls.slide}`, {
        [cls[item.attributes.nameID]]: isHovered,
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cls.arrow}>
        <BtnArrowThird />
      </div>

      <Link
        href={`/services/${item.id}`}
        className={`swiper-slide ${cls.slide}`}
      >
        <div className={cls.image}>
          <img src={img} alt={item.attributes.name} />
        </div>

        <div className={cls.content}>
          <h2 className={cls.title}>{title}</h2>

          <ReactMarkdown
            skipHtml
            components={{
              p: ({ children }) => {
                return (
                  <>
                    <div className={cls.description}>{children}</div>
                  </>
                );
              },
            }}
          >
            {item.attributes.service.data.attributes.description}
          </ReactMarkdown>
        </div>
      </Link>
    </div>
  );
};

export { ServicesSlide };
