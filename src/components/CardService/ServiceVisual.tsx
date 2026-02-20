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
import { Naming } from "./cards/Naming";
import { BrandedStyle } from "./cards/BrandedStyle";
import { Tz } from "./cards/Tz";
import { MotionDesign } from "./cards/MotionDesign";
import { PromoProducts } from "./cards/PromoProducts";
import { Illustration } from "./cards/Illustration";
import { ThreeD } from "./cards/ThreeD";
import { PrintedProducts } from "./cards/PrintedProducts";
import { Package } from "./cards/Package";
import { PromotionLending } from "./cards/PromotionLending";

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
  if (id === 7) return <Naming />;
  if (id === 9) return <BrandedStyle />;
  if (id === 10) return <Tz />;

  if (id === 13) return <MotionDesign />;
  if (id === 14) return <PromoProducts />;
  if (id === 15) return <Illustration />;
  if (id === 16) return <ThreeD />;
  if (id === 17) return <Package />;
  if (id === 18) return <PrintedProducts />;

  if (id === 19) return <PromotionLending />;

  return null;
};
