import { GetServicesNamesQuery } from "@/graphql/__generated__";
import { getRouteServices } from "@/shared/const/pages";
import Link from "next/link";

const Quality = ({
  serviceNames,
}: {
  serviceNames: GetServicesNamesQuery["serviceNames"]["data"];
}) => {
  return (
    <section className="quality">
      <div className="quality__container">
        <div className="quality__title text-decorated">
          Качественный <b>digital- </b>
          продукт создается на базе стратегии, креатива и технологий
        </div>
        <div className="quality__row">
          {serviceNames.map((service) => (
            <Link
              href={`${getRouteServices()}`}
              key={service.id}
              className="quality__item"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Quality };
