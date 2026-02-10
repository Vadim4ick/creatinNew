"use client";

import cls from "./Footer.module.scss";
import { useMedia } from "@/shared/hooks/useMedia";
import { memo, useRef } from "react";
import { useGetServicesNames } from "@/shared/services/servicesName";
import { GetServicesNamesQuery } from "@/graphql/__generated__";
import { Skeleton } from "@/shared/ui/Skeleton";
import { LogoLink } from "./LogoLink";
import { useInView } from "framer-motion";

const Services = memo(
  ({
    data,
    isLoading,
  }: {
    data?: GetServicesNamesQuery["serviceNames"]["data"];
    isLoading?: boolean;
  }) => {
    return (
      <div className={cls.titles}>
        <h3>Услуги</h3>

        <ul>
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => (
                <li key={i}>
                  <Skeleton width="100px" height="16px" />
                </li>
              ))
            : data &&
              [
                ...data,
                {
                  id: "#!",
                  attributes: { name: "Отраслевые решения" },
                },
                {
                  id: "/offers",
                  attributes: { name: "Спецпредложения" },
                },
              ]?.map((el) => {
                return (
                  <li key={el.id}>
                    <a href={Number(el.id) ? `/services/${el.id}` : el.id}>
                      {el.attributes.name}
                    </a>
                  </li>
                );
              })}
        </ul>
      </div>
    );
  },
);

const CompanyInfo = memo(() => {
  return (
    <>
      <div className={cls.info}>
        <a download href="/Положение_об_обработке_ПД_Оганян.doc">
          Обработка персональных данных
        </a>

        <a download href="/СОГЛАСИЕ_на_обработку_ПД_ИП_Оганян.doc">
          Согласие на обработку персональных данных
        </a>

        <a download href="/пользовательское_соглашение_ИП_Оганян.docx">
          Пользовательское соглашение
        </a>
      </div>

      <div className={cls.company}>
        <span>ИП Оганян А.А.</span>
        <span>КПП 3562563723</span>
        <span>ИНН 832873872878</span>
      </div>
    </>
  );
});

const Footer = memo(() => {
  const isTablet = useMedia("(max-width: 991px)");
  const isMobile = useMedia("(max-width: 768px)");

  const { data, isLoading } = useGetServicesNames();

  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1 });

  return (
    <footer className={cls.footer}>
      <div className={cls.container}>
        <div className={cls.companyInfo}>
          <a className={cls.logo} href="/">
            <LogoLink triggerMobile={inView} />
          </a>

          <div
            style={{
              display: isTablet.matches ? "block" : "none",
            }}
            ref={ref}
          >
            {isMobile.matches && (
              <Services data={data?.serviceNames.data} isLoading={isLoading} />
            )}
          </div>

          {!isMobile.matches && <CompanyInfo />}
        </div>

        <div className={cls.services}>
          {!isMobile.matches && (
            <Services data={data?.serviceNames.data} isLoading={isLoading} />
          )}

          {isMobile.matches && <CompanyInfo />}

          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
});

export { Footer };
