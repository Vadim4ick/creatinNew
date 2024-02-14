"use client";

import { FormSendFragmentFragment } from "@/graphql/__generated__";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { File } from "@/shared/icons/File";
import { Button } from "@/shared/ui/Button";
import React, { ChangeEvent, memo, useRef, useState } from "react";
import { SplitTypeAnimation } from "@/shared/hooks/useSplitTypeAnimation";
import ReactMarkdown from "react-markdown";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { classNames } from "@/shared/lib";
import cls from "./FormSend.module.scss";
import { Input } from "@/shared/ui/Input/Input";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import { Address } from "../../lib/Address";

const SignUpSchema = z.object({
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

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

interface FormSendProps {
  form: FormSendFragmentFragment;
  className?: string;
}

const FormSend = memo((props: FormSendProps) => {
  const { form, className = "" } = props;

  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
  });

  const titleRef = useRef<HTMLDivElement | null>(null);
  const subTitleRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const callbackRef = useRef<HTMLDivElement | null>(null);
  const [fileLoaded, setFileLoaded] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFileLoaded(event.target.files?.length !== 0);
  };

  const onSubmit = async (data: SignUpSchemaType) => {
    const file = data.file[0];
    const formData = new FormData();

    formData.append("file", file);
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
      });
    } else {
      console.log(`Неудача с оценкой: ${response?.data?.score}`);
    }
  };

  useIntersectionObserver({
    ref: titleRef,
    removeClass: true,
  });

  useIntersectionObserver({
    ref: subTitleRef,
    removeClass: true,
  });

  useIntersectionObserver({
    ref: formRef,
    removeClass: true,

    threshold: 0.07,
  });

  return (
    <section className={`callback animate-block ${className}`} id="callback">
      <div className="callback__container">
        <div ref={callbackRef} className="callback__row">
          <div className="callback__left">
            <SplitTypeAnimation bg="#aaaaaa" fg="#181818" refChar={titleRef}>
              <h2
                className="callback__title text-decorated fade-up"
                ref={titleRef}
              >
                Оставьте <b>заявку,</b> <br />
                чтобы обсудить проект
              </h2>
            </SplitTypeAnimation>

            <ReactMarkdown
              skipHtml
              components={{
                p: ({ children }) => {
                  return (
                    <>
                      <h3
                        ref={subTitleRef}
                        className="callback__subtitle fade-up"
                      >
                        {children
                          ?.toString()
                          .split(",\n")
                          .map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              {/* @ts-ignore */}
                              {index < children.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                      </h3>
                    </>
                  );
                },
              }}
            >
              {form.description}
            </ReactMarkdown>

            <Address form={form} callbackRef={callbackRef} />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="callback__form callback-form form fade-up"
            ref={formRef}
          >
            <fieldset className="callback-form__group form__group">
              <Input
                id="inp1"
                register={register("name")}
                label="Имя"
                type="text"
                watch={watch("name")}
                className={classNames(
                  "",
                  {
                    [cls.error]: errors.name?.message,
                  },
                  []
                )}
              />

              <Input
                id="inp2"
                register={register("company")}
                label="Компания"
                type="text"
                watch={watch("company")}
                className={classNames(
                  "",
                  {
                    [cls.error]: errors.company?.message,
                  },
                  []
                )}
              />
            </fieldset>
            <fieldset className="callback-form__group form__group">
              <Input
                id="inp3"
                register={register("email")}
                label="E-mail"
                type="email"
                watch={watch("email")}
                className={classNames(
                  "",
                  {
                    [cls.error]: errors.email?.message,
                  },
                  []
                )}
              />

              <Input
                id="inp4"
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
            </fieldset>
            <div className="callback-form__item form__textarea-item">
              <Input
                id="txta1"
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
              <div className="form-file">
                <label
                  className={classNames(
                    "form-file__label",
                    { [cls.inputFile]: fileLoaded },
                    []
                  )}
                  htmlFor="file1"
                >
                  <File />
                  Прикрепить файл
                </label>

                <input
                  {...register("file")}
                  type="file"
                  id="file1"
                  className={classNames("visually-hidden", {}, [])}
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <Button type="submit" className="form__btn">
              Отправить
            </Button>

            <div className="form__comment">
              Нажимая кнопку, вы соглашаетесь на{" "}
              <a href="/policy.pdf" download>
                обработку персональных данных
              </a>
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
});

export { FormSend };
