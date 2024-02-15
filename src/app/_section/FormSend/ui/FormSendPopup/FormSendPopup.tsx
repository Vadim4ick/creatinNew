"use client";

import { classNames } from "@/shared/lib";
import { Input } from "@/shared/ui/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChangeEvent,
  memo,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import cls from "./../FormSendMain/FormSend.module.scss";
import { PopupProviderContext } from "@/shared/providers/popupProvider";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import { useMedia } from "@/shared/hooks/useMedia";
import { File } from "@/shared/icons/File";
import { SuccessPopup } from "../SuccessPopup/SuccessPopup";

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
  file: z.any(),
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
  file: z.any(),
});

type FormPopupFullSchemaType = z.infer<typeof FormPopupSchemaFull>;
type FormPopupSchemaType = z.infer<typeof FormPopupSchema>;

const FormSendPopup = memo(() => {
  const { open, setOpen } = useContext(PopupProviderContext);
  const [fileLoaded, setFileLoaded] = useState(false);

  const isMobile = useMedia("(max-width: 767px)");

  const [full, setFull] = useState(true);

  const [send, setSend] = useState(false);

  const formRef = useRef<HTMLDivElement | null>(null);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFileLoaded(event.target.files?.length !== 0);
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormPopupFullSchemaType | FormPopupSchemaType>({
    resolver: full
      ? zodResolver(FormPopupSchemaFull)
      : zodResolver(FormPopupSchema),
  });

  const handleClickOutside = (event: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      setSend(false);
      setOpen(false);
      setFileLoaded(false);
      reset();
      setValue("phone", "");
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const onSubmit = async (
    data: FormPopupFullSchemaType | FormPopupSchemaType
  ) => {
    const file = data.file[0];
    const formData = new FormData();

    if (file) {
      formData.append("file", file);
    }
    formData.append("name", data.name);
    formData.append("company", data.company);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("taskDescription", data.taskDescription);

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
        body: formData,
      }).then(() => {
        setSend(true);
        reset();
      });
    } else {
      console.log(`Неудача с оценкой: ${response?.data?.score}`);
      reset();
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
          <div
            ref={formRef}
            style={
              send && full && !isMobile.matches
                ? { maxHeight: "676px", height: "100%" }
                : undefined
            }
            className="popup__content"
          >
            <div className="popup__tabs">
              {!send && (
                <>
                  <nav className="popup__navigation">
                    <button
                      type="button"
                      onClick={() => {
                        setFull(false);
                        reset();
                        setFileLoaded(false);
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
                        setFileLoaded(false);
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
                                    [cls.error]:
                                      errors.taskDescription?.message,
                                  },
                                  []
                                )}
                              />
                            </div>
                          </div>
                          <div className="form__item">
                            <label
                              className={classNames(
                                "form-file__label",
                                { [cls.inputFile]: fileLoaded },
                                []
                              )}
                              htmlFor="file2"
                            >
                              <File />
                              Прикрепить файл
                            </label>

                            <input
                              {...register("file")}
                              type="file"
                              id="file2"
                              className={classNames("visually-hidden", {}, [])}
                              onChange={handleFileChange}
                            />
                          </div>
                        </div>

                        <button type="submit" className="btn popup__btn">
                          <span className="btn__text">Отправить</span>
                        </button>

                        <div className="form__comment">
                          Нажимая кнопку, вы соглашаетесь на обработку
                          персональных данных
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {send && (
        <SuccessPopup
          setFileLoaded={setFileLoaded}
          full={full}
          setSend={setSend}
          reset={reset}
        />
      )}
    </>
  );
});

export { FormSendPopup };
