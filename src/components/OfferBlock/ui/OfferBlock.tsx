import { GetOffersPageQuery } from "@/graphql/__generated__";
import { getRouteOffers } from "@/shared/const/pages";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import Image from "next/image";
import Link from "next/link";
import cls from "./OfferBlock.module.scss";

const OfferBlock = ({
  block,
}: {
  block: GetOffersPageQuery["offersPage"]["data"]["attributes"]["offersBlock"];
}) => {
  return block.map((el) => {
    return (
      <div key={el.id} className={cls.container}>
        {el.offers.data.map((offer) => (
          <div key={offer.id} className={cls.content}>
            <div className={cls.body}>
              <div>
                <div className={cls.image}>
                  <Image
                    alt=""
                    width={offer.attributes.img.data.attributes.width}
                    height={offer.attributes.img.data.attributes.height}
                    src={getFileUrl(offer.attributes.img.data.attributes.url)}
                  />
                </div>
                <div className={cls.text}>
                  <div className={cls.title}>{offer.attributes.name}</div>
                  <div className={cls.description}>
                    {offer.attributes.description}
                  </div>
                </div>
              </div>

              <Link href={getRouteOffers(offer.id)} className={cls.btn}>
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  });
};

export { OfferBlock };
