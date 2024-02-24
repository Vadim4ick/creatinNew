import { SidebarItems } from "@/components/Sidebar/ui/Sidebar";
import { GetComplexSidebarTitleQuery } from "@/graphql/__generated__";
import { getRouteComplexPage, getRouteServices } from "@/shared/const/pages";
import { usePathname, useRouter } from "next/navigation";

interface SubmenuProps {
  subMenuActive: boolean;
  subMenuContent: readonly SidebarItems[];
  complexTitle?: GetComplexSidebarTitleQuery["complexAccompany"];
}

const Submenu = (props: SubmenuProps) => {
  const { subMenuActive, subMenuContent, complexTitle } = props;
  const router = useRouter();
  const pathname = usePathname();

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

          {complexTitle?.data &&
            complexTitle.data.attributes.title &&
            pathname !== getRouteComplexPage() && (
              <li
                className={"mobile-services__item"}
                onClick={() => router.push(getRouteComplexPage())}
              >
                <a>{complexTitle.data.attributes.title}</a>
              </li>
            )}
        </ul>
      </div>
    </div>
  );
};

export { Submenu };
