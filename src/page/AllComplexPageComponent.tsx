"use client";

import React from "react";
import { useGetComplexPage } from "@/shared/services/complex";
import { getRouteServices } from "@/shared/const/pages";
import ServiceLayout from "@/layouts/ServiceLayout";
import { GetServicesNamesQuery } from "@/graphql/__generated__";
import { Complex } from "@/components/Complex";
import { BurgerAbout } from "@/components/Burger/ui/BurgerAbout/Burger";

const AllComplexPageComponent = ({
  serviceNames,
}: {
  serviceNames: GetServicesNamesQuery["serviceNames"]["data"];
}) => {
  const { data, isLoading } = useGetComplexPage();

  return (
    <ServiceLayout
      isLoading={isLoading}
      items={serviceNames}
      urlPathname={getRouteServices()}
      BugerMenu={({ complexTitle }: { complexTitle: any }) => {
        return <BurgerAbout complexTitle={complexTitle} SubMenuName="услуги" />;
      }}
    >
      <Complex data={data} />
    </ServiceLayout>
  );
};

export { AllComplexPageComponent };
