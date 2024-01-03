import { CustomLink } from "@/shared/ui/Link";
import { CasesProtfolio } from "./_section/CasesProtfolio";

const PortfolioPage = () => {
  return (
    <>
      <main className="page page--hassidebar">
        <div className="page__container">
          <aside className="sidebar">
            <div className="sidebar__row">
              <div className="breadcrumb">
                <ul className="breadcrumb__list">
                  <li className="breadcrumb__item breadcrumb__item--back">
                    <span>
                      <a>
                        <span> </span>
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="mdi:arrow-up">
                            <path
                              id="Vector"
                              d="M16 8.67929V10.3207H6.15152L10.6654 14.8346L9.5 16L3 9.5L9.5 3L10.6654 4.1654L6.15152 8.67929H16Z"
                              fill="#656565"
                            />
                          </g>
                        </svg>
                      </a>
                    </span>
                  </li>
                  <li className="breadcrumb__item">
                    <span>
                      <a>
                        <span> Главная </span>
                      </a>
                    </span>
                  </li>
                  <li className="breadcrumb__item breadcrumb__item-link--active">
                    <span>
                      <span>Портфолио</span>
                    </span>
                  </li>
                </ul>
              </div>
              <ul className="sidebar__items">
                <li className="sidebar__item">
                  <a className="sidebar__link">Брендинг</a>
                </li>
                <li className="sidebar__item">
                  <a className="sidebar__link">Дизайн</a>
                </li>
                <li className="sidebar__item">
                  <a className="sidebar__link">Web-разработка</a>
                </li>
                <li className="sidebar__item">
                  <a className="sidebar__link">Мобильные приложения</a>
                </li>
              </ul>

              {/* @ts-ignore */}
              <a className="sidebar__baner" style={{ background: "#d1e791" }}>
                <div className="sidebar__name">Спецпредложения</div>
                <div className="sidebar__image">
                  <img src="/img/services/sidebar.png" alt="" />
                </div>
              </a>

              <CustomLink iconPosition="right">Смотреть кейс</CustomLink>
            </div>
          </aside>

          <div className="page__base">
            <CasesProtfolio />
          </div>
        </div>
      </main>
    </>
  );
};

export default PortfolioPage;
