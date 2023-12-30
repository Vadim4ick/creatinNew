import { GetHomePageQuery } from "@/graphql/__generated__";
import { formatPhoneNumber } from "@/shared/helpers/numberFormatter";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface FormSendProps {
  form: GetHomePageQuery["homePage"]["data"]["attributes"]["formSend"];
}

const FormSend = (props: FormSendProps) => {
  const { form } = props;

  return (
    <section className="callback animate-block" id="callback">
      <div className="callback__container">
        <div className="callback__row">
          <div className="callback__left">
            <ReactMarkdown
              skipHtml
              components={{
                h2: ({ children }) => (
                  <h2
                    className="callback__title text-decorated fade-up"
                    data-watch
                    data-observe
                  >
                    {children}
                  </h2>
                ),
                strong: ({ children }) => <b>{children}</b>,
              }}
            >
              {form.title}
            </ReactMarkdown>

            <h3 className="callback__subtitle fade-up" data-watch>
              Cвяжитесь с нами любым удобным способом <br />
              Мы всегда рады новым идеям и ответим на ваши вопросы
            </h3>
            <address
              className="callback__contancs"
              data-da=".callback__row,1200,last"
            >
              <Link
                href={`tel:${form.number}`}
                className="callback__contancs-item fade-up"
                data-watch
                data-watch-once
              >
                <span>{formatPhoneNumber(String(form.number))} </span>
              </Link>
              <Link
                href={`mailto:${form.email}`}
                className="callback__contancs-item fade-up"
                data-watch
                data-watch-once
              >
                <span>{form.email}</span>
              </Link>
              <a
                className="callback__contancs-item fade-up"
                data-watch
                data-watch-once
              >
                <span>{form.address}</span>
              </a>
            </address>
          </div>
          <form
            action="#"
            data-ajax
            data-dev
            method="GET"
            className="callback__form callback-form form fade-up"
            data-watch
          >
            <fieldset className="callback-form__group form__group">
              <div className="form__item">
                <label htmlFor="inp1" className="input-label">
                  Имя
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  name="form[]"
                  id="inp1"
                  data-error="Ошибка"
                  placeholder=""
                  data-required
                  className="input"
                />
              </div>
              <div className="form__item">
                <label htmlFor="inp2" className="input-label">
                  Компания
                </label>

                <input
                  autoComplete="off"
                  type="text"
                  name="form[]"
                  id="inp2"
                  data-error="Ошибка"
                  placeholder=""
                  data-required
                  className="input"
                />
              </div>
            </fieldset>
            <fieldset className="callback-form__group form__group">
              <div className="form__item">
                <label htmlFor="inp3" className="input-label">
                  E-mail
                </label>
                <input
                  autoComplete="off"
                  type="email"
                  name="form[]"
                  id="inp3"
                  data-error="Ошибка"
                  placeholder=""
                  className="input"
                  data-required="email"
                />
              </div>
              <div className="form__item">
                <label htmlFor="inp4" className="input-label">
                  Телефон
                </label>
                <input
                  autoComplete="off"
                  type="tel"
                  name="form[]"
                  id="inp4"
                  data-error="Ошибка"
                  className="input"
                  data-required="tel"
                />
              </div>
            </fieldset>
            <div className="callback-form__item form__textarea-item">
              <div className="form-textarea form__item">
                <label htmlFor="txta1" className="input-label">
                  Описание задачи (тезисно)
                </label>
                <textarea
                  autoComplete="off"
                  name="form[]"
                  id="txta1"
                  placeholder=""
                  data-error="Ошибка"
                  className="input"
                ></textarea>
              </div>
              <div className="form-file">
                <label className="form-file__label" htmlFor="file1">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.5 22H10.5C6.729 22 4.843 22 3.672 20.828C2.5 19.657 2.5 17.771 2.5 14V10C2.5 6.229 2.5 4.343 3.672 3.172C4.843 2 6.739 2 10.53 2C11.136 2 11.621 2 12.03 2.017C12.017 2.097 12.01 2.178 12.01 2.261L12 5.095C12 6.192 12 7.162 12.105 7.943C12.219 8.79 12.48 9.637 13.172 10.329C13.862 11.019 14.71 11.281 15.557 11.395C16.338 11.5 17.308 11.5 18.405 11.5H22.457C22.5 12.034 22.5 12.69 22.5 13.563V14C22.5 17.771 22.5 19.657 21.328 20.828C20.157 22 18.271 22 14.5 22Z"
                      fill="#7F7F7F"
                    />
                    <path
                      d="M20.1629 7.53504L16.0091 3.8495C14.8269 2.79959 14.2364 2.27411 13.5094 2L13.5 4.82803C13.5 7.2661 13.5 8.48565 14.2678 9.24282C15.0357 10 16.2724 10 18.7448 10H22.5C22.1203 9.27179 21.4385 8.6677 20.1629 7.53504Z"
                      fill="#7F7F7F"
                    />
                  </svg>
                  Прикрепить файл{" "}
                </label>
                <input
                  type="file"
                  name="form[]"
                  id="file1"
                  className="visually-hidden"
                />
              </div>
            </div>
            <button type="submit" className="btn form__btn">
              <span className="btn__text">Отправить</span>
            </button>
            <div className="form__comment">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </div>
            <div className="form__sended">
              <div className="form__sended-text">Заявка успешно отправлена</div>
              <button
                type="button"
                className="form__sended-btn btn js-remove-sended"
              >
                <span className="btn__text">Замечательно</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export { FormSend };
