import { GetServiceCollectionByIdQuery } from "@/graphql/__generated__";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { classNames } from "@/shared/lib";
import { useRef } from "react";

interface SectionTitleProps {
  title: GetServiceCollectionByIdQuery["serviceCollection"]["data"]["attributes"]["Title"];
  style?: React.CSSProperties;
}

const SectionTitle = (props: SectionTitleProps) => {
  const { title, style } = props;

  const ref = useRef<HTMLElement | null>(null);

  useIntersectionObserver({
    ref: ref,
    once: true,
  });

  return (
    <section ref={ref} style={style} className="steps fade-up">
      <div className="steps__row">
        <h2 className="steps__title">{title.title}</h2>

        <ul className="steps__list">
          {title.titles.map((el) => (
            <li
              key={el.id}
              className={classNames("steps__item", {
                greenTitle: el.activeTitle,
              })}
            >
              {el.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { SectionTitle };
