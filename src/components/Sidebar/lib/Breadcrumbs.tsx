import Link from "next/link";
import { useRouter } from "next/navigation";
import cls from "./Breadcrumbs.module.scss";
import { useRouteName } from "@/shared/hooks/useRouteName";

const Breadcrumbs = () => {
  const router = useRouter();

  const routeActive = useRouteName();

  const onClick = () => {
    router.back();
  };

  return (
    <div className="breadcrumb">
      <ul className="breadcrumb__list">
        <li className="breadcrumb__item breadcrumb__item--back">
          <span>
            <button className={cls.btn} onClick={onClick}>
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
            </button>
          </span>
        </li>
        <li className="breadcrumb__item">
          <span>
            <Link href={"/"}>
              <span>Главная</span>
            </Link>
          </span>
        </li>
        {routeActive && (
          <li className="breadcrumb__item breadcrumb__item-link--active">
            <span>
              <span>{routeActive}</span>
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export { Breadcrumbs };
