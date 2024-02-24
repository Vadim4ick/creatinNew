"use client";

import React, { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useGetComplexPage } from "@/shared/services/complex";
import { getRouteComplex, getRouteServices } from "@/shared/const/pages";
import ServiceLayout from "@/layouts/ServiceLayout";
import { GetServicesNamesQuery } from "@/graphql/__generated__";
import { Footer } from "@/layouts/Footer/ui/Footer";
import { Complex } from "@/components/Complex";
import { BurgerAbout } from "@/components/Burger/ui/BurgerAbout/Burger";

const AllComplexPageComponent = ({
  serviceNames,
}: {
  serviceNames: GetServicesNamesQuery["serviceNames"]["data"];
}) => {
  const { data, isLoading } = useGetComplexPage();
  const router = useRouter();

  const onClick = useCallback(() => {
    if (data?.complexAccompany) {
      router.push(
        getRouteComplex(
          data.complexAccompany.data.attributes.complexBlocks[0].id
        )
      );
    }
  }, [data, router]);

  return (
    <>
      <ServiceLayout
        isLoading={isLoading}
        items={serviceNames}
        urlPathname={getRouteServices()}
        BugerMenu={({ complexTitle }: { complexTitle: any }) => {
          return (
            <BurgerAbout complexTitle={complexTitle} SubMenuName="услуги" />
          );
        }}
      >
        <Complex data={data} />
      </ServiceLayout>

      {data?.complexAccompany.data.attributes.footer && (
        <Footer
          title={data.complexAccompany.data.attributes.footer.title}
          img={data.complexAccompany.data.attributes.footer.img.data.attributes}
          callback={onClick}
        />
      )}
    </>
  );
};

export { AllComplexPageComponent };
