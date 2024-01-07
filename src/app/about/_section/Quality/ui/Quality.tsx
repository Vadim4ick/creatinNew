"use client";

import { GetServicesNamesQuery } from "@/graphql/__generated__";
import { getRouteServices } from "@/shared/const/pages";
import { STORAGE_KEYS } from "@/shared/const/storageKey";
import { useRouter } from "next/navigation";
import cls from "./Quality.module.scss";

const Quality = ({
  serviceNames,
}: {
  serviceNames: GetServicesNamesQuery["serviceNames"]["data"];
}) => {
  const router = useRouter();

  return (
    <section className="quality">
      <div className="quality__container">
        <div className="quality__title text-decorated">
          Качественный <b>digital- </b>
          продукт создается на базе стратегии, креатива и технологий
        </div>

        <div className="quality__row">
          {serviceNames.map((service) => (
            <a
              onClick={() => {
                sessionStorage.setItem(STORAGE_KEYS.SERVICE_ID, service.id);
                router.push(getRouteServices());
              }}
              key={service.id}
              className={`quality__item ${cls.item}`}
            >
              {service.attributes.name}

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="iconoir:arrow-br">
                  <path
                    id="Vector"
                    d="M6 6L19 19M19 19V6.52M19 19H6.52"
                    stroke="#181818"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Quality };
