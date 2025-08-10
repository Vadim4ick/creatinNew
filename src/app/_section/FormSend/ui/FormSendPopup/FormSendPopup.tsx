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
import { Close } from "@/shared/icons/Close";

const FormPopupSchemaFull = z.object({
  name: z
    .string()
    .min(3, { message: "Имя слишком короткое" })
    .max(20, { message: "Имя слишком длинное" }),

  phone: z
    .string()
    .min(7, { message: "Телефонный номер слишком короткий" })
    .max(25, { message: "Телефонный номер слишком длинный" }),

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

  const [files, setFiles] = useState<File[]>([]);

  console.log(files);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files ?? []);

    setFiles((prev) => {
      // мердж + дедупликация
      const merged = [...prev];
      for (const f of picked) {
        if (
          !merged.some(
            (p) =>
              p.name === f.name &&
              p.size === f.size &&
              p.lastModified === f.lastModified
          )
        ) {
          merged.push(f);
        }
      }

      setFileLoaded(merged.length > 2);

      // прокидываем в RHF как массив файлов
      setValue("file", merged as any, {
        shouldValidate: true,
        shouldDirty: true,
      });

      return merged;
    });

    // чтобы можно было выбрать тот же файл повторно
    e.currentTarget.value = "";
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
    const formData = new FormData();

    // вместо data.file берём накопленные файлы из state
    for (const f of files) formData.append("file", f);

    formData.append("name", data.name);
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

  const removeFile = (idx: number) => {
    setFiles((prev) => {
      const next = prev.filter((_, i) => i !== idx);
      setValue("file", next as any, {
        shouldValidate: true,
        shouldDirty: true,
      });
      return next;
    });
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
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="popup__close"
            >
              <Close />
            </button>
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
                              type="text"
                              label="Имя/Компания"
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
                        </fieldset>

                        <fieldset className="callback-form__group form__group">
                          <div className="form__item">
                            <Input
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
                              id="file2"
                              type="file"
                              multiple
                              className={classNames("visually-hidden", {}, [])}
                              {...register("file")}
                              onChange={handleFileChange}
                            />
                          </div>
                        </div>

                        {files.length > 0 && (
                          <div className="form-file__list">
                            {files.map((f, i) => (
                              <div
                                key={`${f.name}-${f.lastModified}-${f.size}`}
                                className="form-file__item"
                              >
                                <span className="form-file__icon">
                                  <File />
                                </span>
                                <span
                                  className="form-file__name"
                                  title={f.name}
                                >
                                  {f.name}
                                </span>

                                <button
                                  type="button"
                                  className="form-file__remove"
                                  aria-label="Удалить файл"
                                  onClick={() => removeFile(i)}
                                >
                                  <Close />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

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

      {send && <SuccessPopup full={full} setSend={setSend} />}
    </>
  );
});

export { FormSendPopup };
