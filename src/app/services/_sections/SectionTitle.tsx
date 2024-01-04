import { GetServiceCollectionByIdQuery } from "@/graphql/__generated__";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { useRef } from "react";

interface SectionTitleProps {
  title: GetServiceCollectionByIdQuery["serviceCollection"]["data"]["attributes"]["Title"];
}

const SectionTitle = (props: SectionTitleProps) => {
  const { title } = props;

  const ref = useRef<HTMLElement | null>(null);

  useIntersectionObserver({
    ref: ref,
    once: true,
  });

  return (
    <section ref={ref} className="steps fade-up">
      <div className="steps__row">
        <h2 className="steps__title">{title.title}</h2>

        <ul className="steps__list">
          {title.titles.map((el) => (
            <li key={el.id} className="steps__item">
              {el.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { SectionTitle };
