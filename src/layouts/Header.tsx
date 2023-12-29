import { GetHeaderQuery } from "@/graphql/client";
import Link from "next/link";

interface HeaderProps {
  header: GetHeaderQuery["header"]["data"]["attributes"];
}

const Header = (props: HeaderProps) => {
  const { header } = props;

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["header"],
  //   queryFn: () => gql.GetHeader(),
  //   refetchOnWindowFocus: false,
  // });

  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link href={"/"} className="header__logo logo">
            <span className="logo__base">
              <img data-src="/img/logo-base.svg" alt="" />
            </span>
            <span className="logo__in">
              <span className="logo__in-def">
                <img data-src="/img/logo-in-def.svg" alt="" />
              </span>
              <span className="logo__in-hv">
                <img data-src="/img/logo-in-hv.svg" alt="" />
              </span>
            </span>
          </Link>
          <div className="header__menu menu">
            <nav className="menu__body">
              <ul className="menu__list">
                {header.links.map((link) => {
                  return (
                    <li key={link.id} className="menu__item">
                      <Link className="menu__link" href={link.href}>
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="mobile-menu-overlay"></div>
    </>
  );
};

export { Header };
