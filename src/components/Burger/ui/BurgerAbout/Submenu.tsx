import { SidebarItems } from "@/components/Sidebar/ui/Sidebar";
import { getRouteServices } from "@/shared/const/pages";
import { useRouter } from "next/navigation";

interface SubmenuProps {
  subMenuActive: boolean;
  subMenuContent: readonly SidebarItems[];
}

const Submenu = (props: SubmenuProps) => {
  const { subMenuActive, subMenuContent } = props;
  const router = useRouter();

  const onClick = () => {
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
            return (
              <li key={el.id} className="mobile-services__item">
                <a onClick={onClick}>{el.attributes.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export { Submenu };
