import { GetOffersPageQuery } from "@/graphql/__generated__";
import { getRouteOffers } from "@/shared/const/pages";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import Image from "next/image";
import Link from "next/link";

const OfferBlock = ({
  block,
}: {
  block: GetOffersPageQuery["offersPage"]["data"]["attributes"]["offersBlock"];
}) => {
  return block.map((el) => {
    return (
      <div key={el.id} className="promotion__row js-promotion">
        {el.offers.data.map((offer) => (
          <div key={offer.id} className={`promotion__column js-promotion-item`}>
            <div className="promotion__base">
              <div className="promotion__image">
                <Image
                  alt=""
                  width={offer.attributes.img.data.attributes.width}
                  height={offer.attributes.img.data.attributes.height}
                  src={getFileUrl(offer.attributes.img.data.attributes.url)}
                />
              </div>
              <div className="promotion__base-content">
                <div className="promotion__info">
                  {offer.attributes.description}
                </div>
              </div>

              <Link
                href={getRouteOffers(offer.id)}
                className="promotion__btn btn js-promotion-open"
              >
                <span className="btn__text">Подробнее</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  });
};

export { OfferBlock };
