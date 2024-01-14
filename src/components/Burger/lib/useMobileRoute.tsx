import { GetBurgerLinksQuery } from "@/graphql/__generated__";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const useMobileRoute = ({
  mobileNavigation,
  setRouteActive,
}: {
  mobileNavigation:
    | GetBurgerLinksQuery["mobileNavigation"]["data"]["attributes"]["mobileLink"]
    | undefined;
  setRouteActive: any;
}) => {
  const pathname = usePathname();

  useEffect(() => {
    mobileNavigation?.map((el) => {
      if (el.href === pathname) {
        setRouteActive(el);
      }
    });
  }, [mobileNavigation, pathname]);
};

export { useMobileRoute };
