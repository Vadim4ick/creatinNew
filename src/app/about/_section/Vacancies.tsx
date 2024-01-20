"use client";

import { GetStudioQuery } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { SplitTypeAnimation } from "@/shared/hooks/useSplitTypeAnimation";
import { Spoller } from "@/shared/ui/Spoller";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import ReactMarkdown from "react-markdown";

const Vacancies = ({
  vacancies,
}: {
  vacancies: GetStudioQuery["studio"]["data"]["attributes"]["vacancies"];
}) => {
  const titleRef = useRef(null);
  return (
    <section className="vacancies">
      <div className="vacancies__container">
        <div className="vacancies__row">
          <div className="vacancies__column">
            <SplitTypeAnimation bg="#aaaaaa" fg="#181818" refChar={titleRef}>
              <h2 ref={titleRef} className="vacancies__title">
                {vacancies.title}
              </h2>
            </SplitTypeAnimation>

            <div className="vacancies__info">{vacancies.description}</div>
            <div className="vacancies__image">
              {vacancies.image && (
                <Image
                  src={getFileUrl(vacancies.image.data.attributes.url)}
                  width={vacancies.image.data.attributes.width}
                  height={vacancies.image.data.attributes.height}
                  alt=""
                />
              )}
            </div>
          </div>

          <div className="vacancies__content">
            <div className="vacancies__desc">
              <time className="vacancies__time">{vacancies.date}</time>
              <div className="vacancies__desc-info">{vacancies.info}</div>
            </div>

            {vacancies.vacancies.map((vacancy) => (
              <div key={vacancy.id} className="vacancies__item">
                <Spoller
                  className="vacancies__spoller"
                  btn={
                    <>
                      {vacancy.title}
                      <span data-text={vacancy.selectLevel[0]}></span>
                    </>
                  }
                >
                  <div className="vacancies__text vacancies-text">
                    <ReactMarkdown
                      skipHtml
                      components={{
                        p: ({ children }) => {
                          return (
                            <div className="vacancies-text__info">
                              {children}
                            </div>
                          );
                        },
                        h6: ({ children }) => {
                          return (
                            <div className="vacancies-text__title">
                              {children}
                            </div>
                          );
                        },
                        ul: ({ children }) => {
                          return (
                            <ul className="vacancies-text__list">{children}</ul>
                          );
                        },
                      }}
                    >
                      {vacancy.descriptionVacancy}
                    </ReactMarkdown>

                    <div className="vacancies-text__btn btn btn--whte">
                      {vacancy.btnLink && (
                        <Link href={vacancy.btnLink} className="btn__text">
                          Откликнуться
                        </Link>
                      )}
                      {vacancy.telegrammLink && (
                        <Link
                          href={vacancy.telegrammLink}
                          className="btn__arrow"
                        >
                          <svg
                            width="22"
                            height="18"
                            viewBox="0 0 22 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.515 0.118354L1.02726 7.44963C-0.302696 7.97077 -0.295002 8.69456 0.783255 9.01732L5.78654 10.54L17.3627 3.41459C17.9101 3.08968 18.4102 3.26447 17.9991 3.62047L8.62013 11.8782H8.61793L8.62013 11.8793L8.275 16.9105C8.78061 16.9105 9.00373 16.6842 9.28731 16.4172L11.7175 14.1118L16.7725 17.7544C17.7045 18.2551 18.3739 17.9978 18.6058 16.9126L21.9241 1.65602C22.2638 0.327452 21.4042 -0.274105 20.515 0.118354Z"
                              fill="#656565"
                            />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </Spoller>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Vacancies };
