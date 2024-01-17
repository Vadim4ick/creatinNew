import { SidebarItems } from "@/components/Sidebar/ui/Sidebar";
import { getRouteService, getRouteServices } from "@/shared/const/pages";
import { STORAGE_KEYS } from "@/shared/const/storageKey";
import { classNames } from "@/shared/lib";
import { ActiveOfferProviderContext } from "@/shared/providers/activeOfferProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface SubmenuProps {
  subMenuActive: boolean;
  subMenuContent: readonly SidebarItems[];
  name: string;
  submenuParent: boolean;
  activeName: string;
}

const Submenu = (props: SubmenuProps) => {
  const { subMenuActive, subMenuContent, name, submenuParent, activeName } =
    props;

  const { setActiveOffers } = useContext(ActiveOfferProviderContext);

  const router = useRouter();

  const onClick = (el: SidebarItems) => {
    sessionStorage.clear();
    setActiveOffers(null);
    if (el.attributes.nameID === STORAGE_KEYS.COMPLEX) {
      sessionStorage.setItem(STORAGE_KEYS.SERVICE_ID, el.id);
      sessionStorage.setItem(STORAGE_KEYS.COMPLEX, STORAGE_KEYS.COMPLEX);
      setActiveOffers("complex");
    } else {
      sessionStorage.setItem(STORAGE_KEYS.SERVICE_ID, el.id);
    }
    router.push(getRouteServices());
  };

  return (
    <div
      className="mobile-menu__services mobile-services"
      style={{ maxHeight: subMenuActive ? "500px" : "0px" }}
    >
      <div className="mobile-services__row">
        <a className="mobile-services__title">
          {submenuParent ? "Все услуги" : name}
        </a>
        <ul className="mobile-services__list">
          {subMenuContent?.map((el) => {
            if (submenuParent) {
              return (
                <li key={el.id} className="mobile-services__item">
                  <a onClick={() => onClick(el)}>{el.attributes.name}</a>
                </li>
              );
            } else {
              return (
                <li
                  key={el.id}
                  className={classNames(
                    "mobile-services__item",
                    { "active-link": el.attributes.name === activeName },
                    []
                  )}
                >
                  <Link href={getRouteService(name, el.id)}>
                    {el.attributes.name}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export { Submenu };