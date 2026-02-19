"use client";

import { Testing } from "./cards/Testing";
import { BusinessPlan } from "./cards/BusinessPlan";
import { Social } from "./cards/Social";
import { BrendAnalitics } from "./cards/BrendAnalitics";
import { BussinessAnalitics } from "./cards/BussinessAnalitics";
import { Brendbook } from "./cards/Brendbook";
import { SSMBook } from "./cards/SSMBook";
import { ADBook } from "./cards/ADBook";
import { PlatformBrend } from "./cards/PlatformBrend";

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
  if (id === 8) return <Brendbook />;
  if (id === 11) return <SSMBook />;
  if (id === 12) return <ADBook />;
  if (id === 6) return <PlatformBrend />;

  return null;
};
