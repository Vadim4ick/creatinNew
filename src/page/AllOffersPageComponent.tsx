"use client";

import { GetServicesNamesQuery } from "@/graphql/__generated__";
import ServiceLayout from "@/layouts/ServiceLayout";
import { Offers } from "../components/Offers";
import { useGetOffersPage } from "@/shared/services/offers";
import { getRouteServices } from "@/shared/const/pages";
import { BurgerAbout } from "@/components/Burger/ui/BurgerAbout/Burger";

const AllOffersPageComponent = ({
  serviceNames,
}: {
  serviceNames: GetServicesNamesQuery["serviceNames"]["data"];
}) => {
  const { data: offersPage, isLoading: isLoadingOffers } = useGetOffersPage();

  return (
    <ServiceLayout
      isLoading={isLoadingOffers}
      items={serviceNames}
      urlPathname={getRouteServices()}
      serviceId={serviceNames[0].id}
      BugerMenu={({ complexTitle }: { complexTitle: any }) => {
        return <BurgerAbout complexTitle={complexTitle} SubMenuName="услуги" />;
      }}
    >
      <Offers data={offersPage} />
    </ServiceLayout>
  );
};

export { AllOffersPageComponent };
