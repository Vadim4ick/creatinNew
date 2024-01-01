import { GetHomePageQuery } from "@/graphql/__generated__";
import { formatPhoneNumber } from "@/shared/helpers/numberFormatter";
import { File } from "@/shared/icons/File";
import { Button } from "@/shared/ui/Button";
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
              {form.number && (
                <Link
                  href={`tel:${form.number}`}
                  className="callback__contancs-item fade-up"
                  data-watch
                  data-watch-once
                >
                  <span>{formatPhoneNumber(String(form.number))} </span>
                </Link>
              )}
              {form.email && (
                <Link
                  href={`mailto:${form.email}`}
                  className="callback__contancs-item fade-up"
                  data-watch
                  data-watch-once
                >
                  <span>{form.email}</span>
                </Link>
              )}
              {form.address && (
                <a
                  className="callback__contancs-item fade-up"
                  data-watch
                  data-watch-once
                >
                  <span>{form.address}</span>
                </a>
              )}
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
                  <File />
                  Прикрепить файл
                </label>
                <input
                  type="file"
                  name="form[]"
                  id="file1"
                  className="visually-hidden"
                />
              </div>
            </div>
            <Button type="submit" className="form__btn">
              Отправить
            </Button>

            <div className="form__comment">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </div>

            <div className="form__sended">
              <div className="form__sended-text">Заявка успешно отправлена</div>

              <Button
                type="button"
                className="form__sended-btn js-remove-sended"
              >
                Замечательно
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export { FormSend };
