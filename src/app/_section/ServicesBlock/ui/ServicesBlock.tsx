"use client";

import { useGetServicesNames } from "@/shared/services/servicesName";
import cls from "./style.module.scss";

const ServicesBlock = () => {
  const { data } = useGetServicesNames();

  console.log(data);
  return (
    <section className={cls.servicesBlock}>
      <div className={cls.container}>ServicesBlock</div>
    </section>
  );
};

export { ServicesBlock };
