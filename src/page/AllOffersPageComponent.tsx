"use client";

import { GetServicesNamesQuery } from "@/graphql/__generated__";
import ServiceLayout from "@/layouts/ServiceLayout";
import { useRef } from "react";
import { Offers } from "../components/Offers";
import { useGetOffersPage } from "@/shared/services/offers";
import { getRouteOffers, getRouteServices } from "@/shared/const/pages";
import { Footer } from "@/layouts/Footer/ui/Footer";
import { useRouter } from "next/navigation";
import { BurgerAbout } from "@/components/Burger/ui/BurgerAbout/Burger";

const AllOffersPageComponent = ({
  serviceNames,
}: {
  serviceNames: GetServicesNamesQuery["serviceNames"]["data"];
}) => {
  const ref = useRef<HTMLElement | null>(null);

  const { data: offersPage, isLoading: isLoadingOffers } = useGetOffersPage();

  const router = useRouter();

  return (
    <>
      <ServiceLayout
        isLoading={isLoadingOffers}
        items={serviceNames}
        urlPathname={getRouteServices()}
        serviceId={serviceNames[0].id}
        BugerMenu={({ complexTitle }: { complexTitle: any }) => {
          return (
            <BurgerAbout complexTitle={complexTitle} SubMenuName="услуги" />
          );
        }}
      >
        <Offers mainRef={ref} data={offersPage} />
      </ServiceLayout>
      {offersPage?.offersPage.data.attributes.footer && (
        <Footer
          title={offersPage.offersPage.data.attributes.footer.title}
          img={offersPage.offersPage.data.attributes.footer.img.data.attributes}
          callback={() =>
            router.push(
              getRouteOffers(
                offersPage.offersPage.data.attributes.offersBlock[0].offers
                  .data[0].id
              )
            )
          }
        />
      )}
    </>
  );
};

export { AllOffersPageComponent };
