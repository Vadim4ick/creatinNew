import { SidebarItems } from "@/components/Sidebar/ui/Sidebar";
import { getRouteService, getRouteServices } from "@/shared/const/pages";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SubmenuProps {
  subMenuActive: boolean;
  subMenuContent: readonly SidebarItems[];
  name: string;
  submenuParent: boolean;
}

const Submenu = (props: SubmenuProps) => {
  const { subMenuActive, subMenuContent, name, submenuParent } = props;

  const router = useRouter();

  const onClick = () => {
    // @ts-ignore
    router.refresh(getRouteServices());
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
                  <a onClick={onClick}>{el.attributes.name}</a>
                </li>
              );
            } else {
              return (
                <li key={el.id} className="mobile-services__item">
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
