import Link from "next/link";

const Header = () => {
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
                <li className="menu__item">
                  <a className="menu__link">услуги</a>
                </li>
                <li className="menu__item">
                  <a className="menu__link">портфолио</a>
                </li>
                <li className="menu__item">
                  <a className="menu__link">студия</a>
                </li>
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
