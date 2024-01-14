import { SidebarItems } from "@/components/Sidebar/ui/Sidebar";
import { getRouteServices } from "@/shared/const/pages";
import { STORAGE_KEYS } from "@/shared/const/storageKey";
import { usePathname, useRouter } from "next/navigation";

interface SubmenuProps {
  subMenuActive: boolean;
  subMenuContent: readonly SidebarItems[];
}

const Submenu = (props: SubmenuProps) => {
  const { subMenuActive, subMenuContent } = props;
  const router = useRouter();
  const pathname = usePathname();

  const onClick = (el: SidebarItems) => {
    if (el.attributes.nameID === STORAGE_KEYS.COMPLEX) {
      sessionStorage.setItem(STORAGE_KEYS.SERVICE_ID, el.id);
      sessionStorage.setItem(STORAGE_KEYS.COMPLEX, STORAGE_KEYS.COMPLEX);
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
        <a className="mobile-services__title">Все услуги</a>
        <ul className="mobile-services__list">
          {subMenuContent.map((el) => {
            if (pathname === "/") {
              return (
                <li key={el.id} className="mobile-services__item">
                  <a onClick={() => onClick(el)}>{el.attributes.name}</a>
                </li>
              );
            } else {
              return (
                <li key={el.id} className="mobile-services__item">
                  <a>{el.attributes.name}</a>
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
