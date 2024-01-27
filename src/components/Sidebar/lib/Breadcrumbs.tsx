import Link from "next/link";
import { useRouter } from "next/navigation";
import cls from "./Breadcrumbs.module.scss";
import { useRouteName } from "@/shared/hooks/useRouteName";
import { classNames } from "@/shared/lib";
import { memo } from "react";

const Breadcrumbs = memo(() => {
  const router = useRouter();

  const routeActive = useRouteName();

  const onClick = () => {
    router.back();
  };

  return (
    <div className="breadcrumb">
      <ul className={`breadcrumb__list ${cls.breadcrumb__list}`}>
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

        {routeActive &&
          routeActive.map((route, i) => (
            <li
              key={route.path + i}
              className={classNames(`breadcrumb__item`, {
                "breadcrumb__item-link--active": i === routeActive.length - 1,
                [cls.breadcrumb__item]: i === routeActive.length - 1,
              })}
            >
              <span>
                <span>
                  {/* {i === routeActive.length - 1 ? (
                    route.name
                  ) : (
                    <Link href={route.path}>{route.name}</Link>
                  )} */}

                  <Link href={route.path}>{route.name}</Link>
                </span>
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
});

export { Breadcrumbs };
