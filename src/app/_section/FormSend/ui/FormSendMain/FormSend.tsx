"use client";

import { FormSendFragmentFragment } from "@/graphql/__generated__";
import React, { ChangeEvent, memo, useCallback, useRef, useState } from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import cls from "./FormSend.module.scss";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import { Address } from "../Address/Address";
import { classNames } from "@/shared/lib";
import { File } from "@/shared/icons/File";
import MaskedInput from "react-input-mask";
import { motion } from "framer-motion";
import { fieldMotionInp } from "../../model/fieldMotionInp";
import { SendBtn } from "./SendBtn";
import { Close } from "@/shared/icons/Close";
import { SuccessPopup } from "../SuccessPopup/SuccessPopup";

const SignUpSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Имя слишком короткое" })
      .max(20, { message: "Имя слишком длинное" }),

    phone: z.union([
      z
        .string()
        .min(7, { message: "Телефонный номер слишком короткий" })
        .max(25, { message: "Телефонный номер слишком длинный" }),
      z.literal(""),
    ]),

    email: z.union([
      z.string().email({ message: "Некорректный адрес электронной почты" }),
      z.literal(""),
    ]),

    taskDescription: z.string(),
    file: z.any(),
  })
  .superRefine((data, ctx) => {
    const hasEmail = data.email && data.email.trim() !== "";
    const hasPhone = data.phone && data.phone.trim() !== "";

    if (!hasEmail && !hasPhone) {
      const msg = "Укажите e-mail или телефон";
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: msg,
        path: ["email"],
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: msg,
        path: ["phone"],
      });
    }
  });

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

interface FormSendProps {
  form: FormSendFragmentFragment;
  className?: string;
}

const FormSend = memo((props: FormSendProps) => {
  const { form, className = "" } = props;

  const { executeRecaptcha } = useGoogleReCaptcha();

  const [fileCount, setFileCount] = useState(0);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<SignUpSchemaType>({
    mode: "onChange",
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      taskDescription: "",
      file: [] as any,
    },
  });

  const [send, setSend] = useState(false);

  const [files, setFiles] = useState<File[]>([]);
  const [fileLoaded, setFileLoaded] = useState(false);

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

      setFileCount(merged.length);
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

  const removeFile = (idx: number) => {
    setFiles((prev) => {
      const next = prev.filter((_, i) => i !== idx);
      setValue("file", next as any, {
        shouldValidate: true,
        shouldDirty: true,
      });

      setFileCount(next.length);
      return next;
    });
  };

  const onSubmit = async (data: SignUpSchemaType) => {
    const formData = new FormData();

    const filesToSend: File[] = (
      Array.isArray(data.file) ? data.file : Array.from(data.file ?? [])
    ) as File[];
    for (const f of filesToSend) formData.append("file", f);

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("taskDescription", data.taskDescription || "");

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

        setFiles([]);
        setFileCount(0);
        setFileLoaded(false);

        // очистка физического file-инпута
        if (fileInputRef.current) fileInputRef.current.value = "";
      });
    } else {
      console.log(`Неудача с оценкой: ${response?.data?.score}`);
    }
  };

  return (
    <section className={classNames(cls.sendForm, {}, [className])}>
      <div className={cls.container}>
        <div className={cls.mainInfo}>
          <h2 className={cls.titleDesk}>
            Оставьте <span>заявку</span> чтобы обсудить проект
          </h2>

          <div className={cls.contactBlocks}>
            <Address form={form} />
          </div>
        </div>

        <div className={cls.feedBackForm}>
          <h2 className={cls.titleMobile}>
            Оставьте <span>заявку</span> чтобы обсудить проект
          </h2>

          <div className={cls.text}>
            <span>Cвяжитесь с нами любым удобным способом.</span>{" "}
            <span>Мы всегда рады новым идеям и ответим на ваши вопросы</span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <motion.input
                  type="text"
                  placeholder="Ваше имя"
                  className={classNames("", { [cls.error]: !!errors.name }, [])}
                  {...register("name")}
                  {...fieldMotionInp(!!errors.name)}
                  {...field}
                />
              )}
            />

            <div className={cls.block}>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <motion.input
                    type="email"
                    placeholder="E-mail"
                    className={classNames(
                      "",
                      {
                        [cls.error]: errors.email?.message,
                      },
                      []
                    )}
                    {...register("email")}
                    {...fieldMotionInp(!!errors.taskDescription)}
                    {...field}
                  />
                )}
              />

              <span>или</span>

              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <MaskedInput
                    mask="+7 (999) 999-9999"
                    type="tel"
                    placeholder="Телефон"
                    className={classNames(
                      cls.tel,
                      {
                        [cls.error]: errors.phone?.message,
                      },
                      []
                    )}
                    {...field}
                  />
                )}
              />
            </div>

            <Controller
              control={control}
              name="taskDescription"
              render={({ field }) => (
                <motion.textarea
                  placeholder="Описание задачи (тезисно)"
                  className={classNames(
                    "",
                    {
                      [cls.error]: errors.taskDescription?.message,
                    },
                    []
                  )}
                  {...fieldMotionInp(!!errors.taskDescription)}
                  {...field}
                />
              )}
            />

            <div className={cls.footer}>
              <motion.label
                className={classNames(
                  cls.file,
                  { [cls.inputFile]: fileLoaded },
                  []
                )}
                htmlFor="file1"
                {...fieldMotionInp(!!errors.file)}
              >
                <div
                  className={classNames(
                    cls.icon,
                    {
                      [cls.active]: fileCount > 0,
                    },
                    []
                  )}
                >
                  <File />

                  {fileCount > 0 && (
                    <span className={cls.count}>{fileCount}</span>
                  )}
                </div>

                <span> Прикрепить файл</span>
              </motion.label>

              <SendBtn isValid={isValid} />
            </div>

            {files.length > 0 && (
              <div className={cls.attachList}>
                {files.map((f, i) => (
                  <motion.div
                    key={`${f.name}-${f.lastModified}-${f.size}`}
                    className={cls.attachItem}
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -3 }}
                    layout
                  >
                    <span className={cls.attachIcon}>
                      <File />
                    </span>
                    <span className={cls.attachName} title={f.name}>
                      {f.name}
                    </span>

                    <button
                      type="button"
                      className={cls.attachRemove}
                      aria-label="Удалить"
                      onClick={() => removeFile(i)}
                    >
                      <Close />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </form>
        </div>
      </div>

      <input
        {...register("file")}
        ref={fileInputRef}
        type="file"
        id="file1"
        multiple
        className={classNames("visually-hidden", {}, [])}
        onChange={handleFileChange}
      />

      {send && <SuccessPopup full={true} setSend={setSend} />}
    </section>
  );
});

export { FormSend };
