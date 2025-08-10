"use client";

import cls from "./Footer.module.scss";
import { useMedia } from "@/shared/hooks/useMedia";
import { memo } from "react";
import { useGetServicesNames } from "@/shared/services/servicesName";
import { GetServicesNamesQuery } from "@/graphql/__generated__";
import { Skeleton } from "@/shared/ui/Skeleton";
import { LogoLink } from "./LogoLink";

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
            : data?.map((el) => {
                return (
                  <li key={el.id}>
                    <a href={`/services/${el.id}`}>{el.attributes.name}</a>
                  </li>
                );
              })}
        </ul>
      </div>
    );
  }
);

const CompanyInfo = memo(() => {
  return (
    <>
      <div className={cls.info}>
        <a href="#!">Публичная оферта</a>
        <a href="#!">Пользовательское соглашение</a>
        <a href="#!">Карта сайта</a>
        <a href="#!">Cookies</a>
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
  const isMobile = useMedia("(max-width: 760px)");

  const { data, isLoading } = useGetServicesNames();

  return (
    <footer className={cls.footer}>
      <div className={cls.container}>
        <div className={cls.companyInfo}>
          <a className={cls.logo} href="/">
            <LogoLink />
          </a>

          {isMobile.matches && (
            <Services data={data?.serviceNames.data} isLoading={isLoading} />
          )}

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
