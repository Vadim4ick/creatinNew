import { gql } from "@/graphql/client";
import { About } from "../_section/About";
import { notFound } from "next/navigation";
import { Quality } from "./_section/Quality";
import { Partners } from "../_section/Partners";
import { FormSend } from "../_section/FormSend";

const AboutPage = async () => {
  const { studio } = await gql.GetStudio();
  const { serviceNames } = await gql.GetServicesNames();

  const { partner } = await gql.GetPartners();

  const { formFeedback } = await gql.GetFormFeedback();

  if (!studio.data) {
    return notFound();
  }

  return (
    <>
      <main className="page">
        <div
          className="video fade-up video--about"
          data-watch
          data-watch-once
          data-watch-margin="30"
        >
          <div className="video__container">
            <div
              className="video__item"
              // @ts-ignore
              style={{ "--icon": "url(/img/icons/video-icon-gray.svg)" }}
            ></div>
          </div>
        </div>

        {studio.data.attributes.introCards && (
          <About aboutSection={studio.data.attributes} />
        )}

        {serviceNames.data && <Quality serviceNames={serviceNames.data} />}

        {partner.data.attributes.partners && (
          <Partners partners={partner.data.attributes.partners} />
        )}

        <section className="vacancies">
          <div className="vacancies__container">
            <div className="vacancies__row">
              <div className="vacancies__column">
                <h2 className="vacancies__title" data-observe>
                  Хочешь в команду?
                </h2>
                <div className="vacancies__info">
                  Когда вы настроили сетку под свои потребности, вы можете
                  использовать её
                </div>
                <div className="vacancies__image">
                  <img src="/img/about/vacancies.png" alt="" />
                </div>
              </div>

              <div className="vacancies__content" data-spollers>
                <div className="vacancies__desc">
                  <time className="vacancies__time">октябрь, 2023</time>
                  <div className="vacancies__desc-info">
                    актуальные вакансии
                  </div>
                </div>
                <div className="vacancies__item">
                  <button
                    type="button"
                    data-spoller
                    className="vacancies__spoller"
                  >
                    графический дизайнер <span data-text="middle"></span>
                  </button>
                  <div className="vacancies__text vacancies-text">
                    <div className="vacancies-text__title">
                      Что будет делать дизайнер? (обязанности)
                    </div>
                    <div className="vacancies-text__info">Перечень работ:</div>
                    <ul className="vacancies-text__list">
                      <li>прототип;</li>
                      <li>дизайн-макеты (десктоп и мобильная версия).;</li>
                    </ul>
                    <div className="vacancies-text__title">
                      Скиллы дизайнера (требования)
                    </div>
                    <div className="vacancies-text__info">
                      Мы ожидаем, что вы:
                    </div>
                    <ul className="vacancies-text__list">
                      <li>имеете опыт разработки многостраничных сайтов;</li>
                      <li>
                        готовите дизайн-макеты вместе с дизайн-системой сайта;
                      </li>
                      <li>
                        отталкиваетесь в дизайн-решениях от задач бизнеса;
                      </li>
                      <li>соблюдаете поставленные сроки.</li>
                    </ul>
                    <div className="vacancies-text__title">Условия</div>
                    <div className="vacancies-text__info">
                      Мы ожидаем, что вы:
                    </div>
                    <ul className="vacancies-text__list">
                      <li>Удаленная работа;</li>
                      <li>Работа по догочячячявору.</li>
                      <li>Подробное техническое задание по запросу.</li>
                    </ul>
                    <div className="vacancies-text__btn btn btn--whte">
                      <a className="btn__text">Откликнуться</a>
                      <a className="btn__arrow">
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
                      </a>
                    </div>
                  </div>
                </div>
                <div className="vacancies__item">
                  <button
                    type="button"
                    data-spoller
                    className="vacancies__spoller"
                  >
                    ux/ui дизайнер <span data-text="junior"></span>
                  </button>
                  <div className="vacancies__text vacancies-text">
                    <div className="vacancies-text__title">
                      Что будет делать дизайнер? (обязанности)
                    </div>
                    <div className="vacancies-text__info">Перечень работ:</div>
                    <ul className="vacancies-text__list">
                      <li>прототип;</li>
                      <li>дизайн-макеты (десктоп и мобильная версия).;</li>
                    </ul>
                    <div className="vacancies-text__title">
                      Скиллы дизайнера (требования)
                    </div>
                    <div className="vacancies-text__info">
                      Мы ожидаем, что вы:
                    </div>
                    <ul className="vacancies-text__list">
                      <li>имеете опыт разработки многостраничных сайтов;</li>
                      <li>
                        готовите дизайн-макеты вместе с дизайн-системой сайта;
                      </li>
                      <li>
                        отталкиваетесь в дизайн-решениях от задач бизнеса;
                      </li>
                      <li>соблюдаете поставленные сроки.</li>
                    </ul>
                    <div className="vacancies-text__title">Условия</div>
                    <div className="vacancies-text__info">
                      Мы ожидаем, что вы:
                    </div>
                    <ul className="vacancies-text__list">
                      <li>Удаленная работа;</li>
                      <li>Работа по догочячячявору.</li>
                      <li>Подробное техническое задание по запросу.</li>
                    </ul>
                    <div className="vacancies-text__btn btn btn--whte">
                      <a className="btn__text">Откликнуться</a>
                      <a className="btn__arrow">
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
                      </a>
                    </div>
                  </div>
                </div>
                <div className="vacancies__item">
                  <button
                    type="button"
                    data-spoller
                    className="vacancies__spoller"
                  >
                    копирайтер <span data-text="senoir"></span>
                  </button>
                  <div className="vacancies__text vacancies-text">
                    <div className="vacancies-text__title">
                      Что будет делать дизайнер? (обязанности)
                    </div>
                    <div className="vacancies-text__info">Перечень работ:</div>
                    <ul className="vacancies-text__list">
                      <li>прототип;</li>
                      <li>дизайн-макеты (десктоп и мобильная версия).;</li>
                    </ul>
                    <div className="vacancies-text__title">
                      Скиллы дизайнера (требования)
                    </div>
                    <div className="vacancies-text__info">
                      Мы ожидаем, что вы:
                    </div>
                    <ul className="vacancies-text__list">
                      <li>имеете опыт разработки многостраничных сайтов;</li>
                      <li>
                        готовите дизайн-макеты вместе с дизайн-системой сайта;
                      </li>
                      <li>
                        отталкиваетесь в дизайн-решениях от задач бизнеса;
                      </li>
                      <li>соблюдаете поставленные сроки.</li>
                    </ul>
                    <div className="vacancies-text__title">Условия</div>
                    <div className="vacancies-text__info">
                      Мы ожидаем, что вы:
                    </div>
                    <ul className="vacancies-text__list">
                      <li>Удаленная работа;</li>
                      <li>Работа по догочячячявору.</li>
                      <li>Подробное техническое задание по запросу.</li>
                    </ul>
                    <div className="vacancies-text__btn btn btn--whte">
                      <a className="btn__text">Откликнуться</a>
                      <a className="btn__arrow">
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
                      </a>
                    </div>
                  </div>
                </div>
                <div className="vacancies__item">
                  <button
                    type="button"
                    data-spoller
                    className="vacancies__spoller"
                  >
                    маркетолог <span data-text="middle"></span>
                  </button>
                  <div className="vacancies__text vacancies-text">
                    <div className="vacancies-text__title">
                      Что будет делать дизайнер? (обязанности)
                    </div>
                    <div className="vacancies-text__info">Перечень работ:</div>
                    <ul className="vacancies-text__list">
                      <li>прототип;</li>
                      <li>дизайн-макеты (десктоп и мобильная версия).;</li>
                    </ul>
                    <div className="vacancies-text__title">
                      Скиллы дизайнера (требования)
                    </div>
                    <div className="vacancies-text__info">
                      Мы ожидаем, что вы:
                    </div>
                    <ul className="vacancies-text__list">
                      <li>имеете опыт разработки многостраничных сайтов;</li>
                      <li>
                        готовите дизайн-макеты вместе с дизайн-системой сайта;
                      </li>
                      <li>
                        отталкиваетесь в дизайн-решениях от задач бизнеса;
                      </li>
                      <li>соблюдаете поставленные сроки.</li>
                    </ul>
                    <div className="vacancies-text__title">Условия</div>
                    <div className="vacancies-text__info">
                      Мы ожидаем, что вы:
                    </div>
                    <ul className="vacancies-text__list">
                      <li>Удаленная работа;</li>
                      <li>Работа по догочячячявору.</li>
                      <li>Подробное техническое задание по запросу.</li>
                    </ul>
                    <div className="vacancies-text__btn btn btn--whte">
                      <a className="btn__text">Откликнуться</a>
                      <a className="btn__arrow">
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
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {formFeedback.data.attributes.formFeedback && (
          <FormSend form={formFeedback.data.attributes.formFeedback} />
        )}
      </main>
    </>
  );
};

export default AboutPage;
