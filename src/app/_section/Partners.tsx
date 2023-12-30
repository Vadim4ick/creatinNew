import { GetHomePageQuery } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { BtnArrow } from "@/shared/icons/BtnArrow";
import Image from "next/image";

interface PartnersProps {
  partners: GetHomePageQuery["homePage"]["data"]["attributes"]["Partners"];
}

const Partners = (props: PartnersProps) => {
  const { partners } = props;

  return (
    <section className="partners animate-block">
      <div className="partners__container">
        <div className="partners__top">
          <div className="partners__text">
            <h2
              className="partners__title fade-up"
              data-watch
              data-watch-once
              data-observe
              data-observe-alt
            >
              {partners.title}
            </h2>
            <div
              className="partners__subtitle fade-up"
              data-watch
              data-watch-once
            >
              {partners.description}
            </div>
          </div>
          <div
            className="partners__btn fade-up"
            data-watch
            data-da=".partners__container,1200,last"
          >
            <a className="btn btn--whte btn--hasarrow">
              <span className="btn__text">Стать партнером</span>
              <span className="btn__arrow">
                <BtnArrow />
              </span>
            </a>
          </div>
        </div>
        <div className="partners__slider swiper js-partners fade-up" data-watch>
          <div className="partners__swiper swiper-wrapper">
            {partners.icons.data.map((item) => {
              return (
                <div key={item.id} className="partners__slide swiper-slide">
                  <Image
                    width={item.attributes.width}
                    height={item.attributes.height}
                    key={item.id}
                    alt=""
                    src={getFileUrl(item.attributes.url)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Partners };
