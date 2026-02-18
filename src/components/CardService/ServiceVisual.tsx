"use client";

import { Testing } from "./cards/Testing";
import { BusinessPlan } from "./cards/BusinessPlan";
import { Social } from "./cards/Social";
import { BrendAnalitics } from "./cards/BrendAnalitics";
import { BussinessAnalitics } from "./cards/BussinessAnalitics";

type Props = {
  serviceId: string;
};

export const ServiceVisual = ({ serviceId }: Props) => {
  const id = Number(serviceId);

  if (id === 5) return <Testing />;
  if (id === 2) return <BusinessPlan />;
  if (id === 3) return <Social />;
  if (id === 1) return <BrendAnalitics />;
  if (id === 4) return <BussinessAnalitics />;

  return null;
};
