"use client";

import { GetServicesNamesQuery } from "@/graphql/__generated__";
import ServiceLayout from "@/layouts/ServiceLayout";
import { useMemo, useRef } from "react";
import { BurgerServices } from "../components/Burger/ui/BurgerServices/BurgerServices";
import { Offers } from "../components/Offers";
import { useGetOffersPage } from "@/shared/services/offers";
import { Loader } from "@/shared/ui/Loader/Loader";
import { getRouteOffers, getRouteServices } from "@/shared/const/pages";
import { Footer } from "@/layouts/Footer/ui/Footer";
import { useRouter } from "next/navigation";

const AllOffersPageComponent = ({
  serviceNames,
}: {
  serviceNames: GetServicesNamesQuery["serviceNames"]["data"];
}) => {
  const ref = useRef<HTMLElement | null>(null);

  const { data: offersPage, isLoading: isLoadingOffers } = useGetOffersPage();

  const router = useRouter();

  const index = useMemo(
    () => serviceNames.findIndex((el) => el.id === serviceNames[0].id),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [serviceNames[0].id, serviceNames]
  );

  // Mobile
  const nameBurger = useMemo(() => {
    return serviceNames[index].attributes.name;
  }, [index, serviceNames]);

  if (isLoadingOffers) {
    return <Loader />;
  }

  return (
    <>
      <ServiceLayout
        isLoading={isLoadingOffers}
        items={serviceNames}
        urlPathname={getRouteServices()}
        serviceId={serviceNames[0].id}
        BugerMenu={() => (
          <BurgerServices SubMenuName={nameBurger} items={serviceNames} />
        )}
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
