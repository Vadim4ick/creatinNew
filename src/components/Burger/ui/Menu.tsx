import { getRouteServices } from "@/shared/const/pages";
import { ActiveOfferProviderContext } from "@/shared/providers/activeOfferProvider";
import { useGetMobileBurgerLinks } from "@/shared/services/mobileBurgerLinks";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

interface MenuProps {
  active: boolean;
}

const Menu = (props: MenuProps) => {
  const { active } = props;

  const { data: burgerLinks } = useGetMobileBurgerLinks();

  const { setActiveOffers } = useContext(ActiveOfferProviderContext);

  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    setActiveOffers("offer");

    if (pathname !== getRouteServices()) {
      router.push(getRouteServices());
    } else {
      // @ts-ignore
      router.refresh(getRouteServices());
    }
  };

  return (
    <div
      className="mobile-menu__nav mobile-nav"
      style={{ maxHeight: active ? "555px" : "0px" }}
    >
      <div className="mobile-nav__row">
        <a className="mobile-nav__logo logo">
          <span className="logo__base">
            <img src="/img/logo-base.svg" alt="" />
          </span>
          <span className="logo__in">
            <span className="logo__in-def">
              <img src="/img/logo-in-def.svg" alt="" />
            </span>
            <span className="logo__in-hv">
              <img src="/img/logo-in-hv.svg" alt="" />
            </span>
          </span>
        </a>

        <a
          onClick={onClick}
          className="mobile-nav__baner"
          style={{
            background: "linear-gradient(180deg, #489DEB 0%, #82C3FF 100%)",
          }}
        >
          <div className="mobile-nav__name">Спецпредложения</div>
          <div className="mobile-nav__image">
            <img src="/img/header/01.png" alt="" />
          </div>
        </a>

        <ul className="mobile-nav__list">
          {burgerLinks?.mobileNavigation.data.attributes.mobileLink.map(
            (el) => {
              return (
                <li key={el.id} className="mobile-nav__item">
                  {el.href ? (
                    <Link href={el.href}>{el.name}</Link>
                  ) : (
                    <a>{el.name}</a>
                  )}
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export { Menu };
