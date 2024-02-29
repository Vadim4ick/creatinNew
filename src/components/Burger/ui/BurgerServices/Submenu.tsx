import { SidebarItems } from "@/components/Sidebar/ui/Sidebar";
import { GetComplexSidebarTitleQuery } from "@/graphql/__generated__";
import {
  getRouteComplexPage,
  getRouteService,
  getRouteServices,
} from "@/shared/const/pages";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SubmenuProps {
  subMenuActive: boolean;
  subMenuContent: readonly SidebarItems[];
  name: string;
  submenuParent: boolean;
  complexTitle?: GetComplexSidebarTitleQuery["complexAccompany"];
}

const Submenu = (props: SubmenuProps) => {
  const { subMenuActive, subMenuContent, name, submenuParent, complexTitle } =
    props;

  const router = useRouter();

  const onClick = (id: string) => {
    router.push(`${getRouteServices()}/${id}`);
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
                  <a onClick={() => onClick(el.id)}>{el.attributes.name}</a>
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

          {submenuParent &&
            complexTitle?.data &&
            complexTitle.data.attributes.title && (
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
