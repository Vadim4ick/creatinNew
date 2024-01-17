"use client";

import { classNames } from "@/shared/lib";
import { Input } from "@/shared/ui/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { memo, useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import cls from "./../FormSendMain/FormSend.module.scss";
import { PopupProviderContext } from "@/shared/providers/popupProvider";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";

const FormPopupSchemaFull = z.object({
  name: z
    .string()
    .min(3, { message: "Имя слишком короткое" })
    .max(20, { message: "Имя слишком длинное" }),

  phone: z
    .string()
    .min(7, { message: "Телефонный номер слишком короткий" })
    .max(25, { message: "Телефонный номер слишком длинный" }),

  company: z
    .string()
    .min(3, { message: "Название компании слишком короткое" })
    .max(35, { message: "Название компании слишком длинное" }),

  email: z.string().email({ message: "Некорректный адрес электронной почты" }),

  taskDescription: z.string(),
});
const FormPopupSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Имя слишком короткое" })
    .max(20, { message: "Имя слишком длинное" }),

  phone: z
    .string()
    .min(7, { message: "Телефонный номер слишком короткий" })
    .max(25, { message: "Телефонный номер слишком длинный" }),

  company: z.string(),

  email: z.string().email({ message: "Некорректный адрес электронной почты" }),

  taskDescription: z.string(),
});

type FormPopupFullSchemaType = z.infer<typeof FormPopupSchemaFull>;
type FormPopupSchemaType = z.infer<typeof FormPopupSchema>;

const FormSendPopup = memo(() => {
  const { open, setOpen } = useContext(PopupProviderContext);

  const [full, setFull] = useState(true);

  const formRef = useRef<HTMLDivElement | null>(null);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormPopupFullSchemaType | FormPopupSchemaType>({
    resolver: full
      ? zodResolver(FormPopupSchemaFull)
      : zodResolver(FormPopupSchema),
  });

  const handleClickOutside = (event: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    if (open) {
      document.body.classList.add("popup-show");
      document.querySelector("html")?.classList.add("lock");
    } else {
      document.body.classList.remove("popup-show");
      document.querySelector("html")?.classList.remove("lock");
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const onSubmit = async (
    data: FormPopupFullSchemaType | FormPopupSchemaType
  ) => {
    if (!executeRecaptcha) {
      return console.log("Вы бот");
    }

    const gRecaptchaToken = await executeRecaptcha("inquirySubmit");
    const response = await axios({
      method: "post",
      url: "/api/recaptcha",
      data: {
        gRecaptchaToken,
      },
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });
    if (response?.data?.success === true) {
      console.log(`Успех с оценкой: ${response?.data?.score}`);
      await fetch(`/api/telegramm`, {
        method: "POST",
        body: JSON.stringify(data),
      });
    } else {
      console.log(`Неудача с оценкой: ${response?.data?.score}`);
    }
  };

  return (
    <>
      <div
        id="callback"
        className={classNames("popup popup_callback", {
          popup_show: open,
        })}
      >
        <div className="popup__wrapper">
          <div ref={formRef} className="popup__content">
            <div className="popup__tabs">
              <nav className="popup__navigation">
                <button
                  type="button"
                  onClick={() => {
                    setFull(false);
                    reset();
                  }}
                  className={classNames("popup__tab-btn js-popup-form", {
                    "_tab-active": !full,
                  })}
                  style={{
                    // @ts-ignore
                    "--active-color-bg": "var(--color-alt)",
                    "--active-color-text": "var(--color-whte)",
                  }}
                >
                  шорт
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setFull(true);
                    reset();
                  }}
                  className={classNames("popup__tab-btn js-popup-form", {
                    "_tab-active": full,
                  })}
                  style={{
                    // @ts-ignore
                    "--active-color-bg": "var(--color-accent)",
                    "--active-color-text": "var(--color-primary)",
                  }}
                >
                  фулл
                </button>
              </nav>

              <div className="popup__tabs-content">
                <div className="popup__body _tab-active">
                  <div className="popup__title">
                    Заполните анкету, чтобы обсудить проект
                  </div>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="callback-form popup__form form"
                  >
                    <fieldset
                      className={classNames(
                        "callback-form__group form__group js-popup-one",
                        {
                          _active: full,
                        },
                        []
                      )}
                    >
                      <div className="form__item">
                        <Input
                          id="inp11"
                          type="text"
                          label="Имя"
                          register={register("name")}
                          watch={watch("name")}
                          className={classNames(
                            "",
                            {
                              [cls.error]: errors.name?.message,
                            },
                            []
                          )}
                        />
                      </div>
                      <div className="form__item js-popup-input">
                        <Input
                          id="inp12"
                          type="text"
                          label="Компания"
                          register={register("company")}
                          watch={watch("company")}
                          className={classNames(
                            "",
                            {
                              [cls.error]: errors.company?.message,
                            },
                            []
                          )}
                        />
                      </div>
                    </fieldset>

                    <fieldset className="callback-form__group form__group">
                      <div className="form__item">
                        <Input
                          id="inp13"
                          type="email"
                          label="E-mail"
                          register={register("email")}
                          watch={watch("email")}
                          className={classNames(
                            "",
                            {
                              [cls.error]: errors.email?.message,
                            },
                            []
                          )}
                        />
                      </div>
                      <div className="form__item">
                        <Input
                          id="inp14"
                          register={register("phone")}
                          label="Телефон"
                          type="tel"
                          watch={watch("phone")}
                          mask="+7 (999) 999-9999"
                          className={classNames(
                            "",
                            {
                              [cls.error]: errors.phone?.message,
                            },
                            []
                          )}
                        />
                      </div>
                    </fieldset>

                    <div hidden={!full} className="js-popup-group">
                      <div className="callback-form__item form__textarea-item">
                        <div className=" form__item">
                          <Input
                            id="txta15"
                            register={register("taskDescription")}
                            label="Описание задачи (тезисно)"
                            type="text"
                            watch={watch("taskDescription")}
                            inpType="textarea"
                            className={classNames(
                              "",
                              {
                                [cls.error]: errors.taskDescription?.message,
                              },
                              []
                            )}
                          />
                        </div>
                      </div>
                      <div className="form__item">
                        <label className="form-file__label" htmlFor="file2">
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
                          Прикрепить файл
                        </label>
                        <input
                          type="file"
                          name="form[1]"
                          data-error="Ошибка"
                          id="file2"
                          className="visually-hidden"
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn popup__btn">
                      <span className="btn__text">Отправить</span>
                    </button>

                    <div className="form__comment">
                      Нажимая кнопку, вы соглашаетесь на обработку персональных
                      данных
                    </div>

                    <div className="form__sended">
                      <div className="form__sended-text">
                        Заявка успешно отправлена
                      </div>

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export { FormSendPopup };
