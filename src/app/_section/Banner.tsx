import {
  Enum_Componentelementsintrocard_Class,
  GetHomePageQuery,
} from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { BtnArrow } from "@/shared/icons/BtnArrow";
import { Folder } from "@/shared/icons/introBanner/Folder";
import { Spiral } from "@/shared/icons/introBanner/Spiral";
import Image from "next/image";

interface BannerProps {
  banner: GetHomePageQuery["homePage"]["data"]["attributes"];
}

const arrImages: Record<Enum_Componentelementsintrocard_Class, any> = {
  folders: <Folder />,
  spiral: <Spiral />,
  image_group: ["/img/intro/01.png", "/img/intro/02.png", "/img/intro/03.png"],
};

const Banner = (props: BannerProps) => {
  const { banner } = props;

  const customStyles = {
    "--mask": "url(/img/intro/mask.svg)",
    "--mask-mob": "url(/img/intro/mask-mobile.svg)",
  };

  // const renderContent = () => {
  //   return (
  //     <div>
  //       {banner.test.map((item, index) => {
  //         if (
  //           item.type === "paragraph" &&
  //           item.children &&
  //           item.children.length > 0
  //         ) {
  //           const elements = item.children.map((child, childIndex) => {
  //             if (child.type === "text") {
  //               return <span key={childIndex}>{child.text}</span>;
  //             } else if (child.type === "lineBreak") {
  //               return <br key={childIndex} />;
  //             } else {
  //               return null; // Ignore other types
  //             }
  //           });
  //           return <p key={index}>{elements}</p>;
  //         } else {
  //           return null; // Ignore other types or empty paragraphs
  //         }
  //       })}
  //     </div>
  //   );
  // };

  return (
    <section className="intro" data-watch data-watch-once>
      <div className="intro__container">
        <div className="intro__inner">
          {/* @ts-ignore */}
          <div className="intro__row" style={customStyles}>
            <div className="intro__content">
              <div className="intro__title">
                <p>Стратегии, брендинг</p>
                <p>и digital-решения для компаний,</p>
                <p>
                  готовых <br />к <span>изменениям</span>
                </p>
              </div>
              <div className="intro__btns" data-da=".intro__inner,767,last">
                <a className="btn btn--hasarrow">
                  <span className="btn__text">Оставить заявку</span>
                  <span className="btn__arrow">
                    <BtnArrow />
                  </span>
                </a>
              </div>
            </div>
            <div className="intro__bg">
              <picture>
                <source
                  srcSet={getFileUrl(banner.bannerMobile.data.attributes.url)}
                  media="(max-width: 767px)"
                />
                <img
                  data-src={getFileUrl(banner.banner.data.attributes.url)}
                  alt={banner.banner.data.attributes.name}
                />
              </picture>
            </div>
          </div>
          <div className="intro__cards intro-cards swiper js-intro-cards">
            <div className="intro-cards__swiper swiper-wrapper">
              {banner.HomeBanner.IntroCard.map((card) => {
                return (
                  <div
                    key={card.id}
                    className="intro__card intro-cards__item swiper-slide"
                  >
                    <div className="intro-cards__content">
                      <div className="intro-cards__value">{card.title}</div>
                      <div className="intro-cards__info">{card.info}</div>
                    </div>
                    <div
                      className={`intro-cards__image intro-cards-${card.class}`}
                    >
                      {card.class === "image_group" ? (
                        <>
                          {arrImages[card.class].map((el: string) => (
                            <div key={el} className="intro-cards__image-item">
                              <Image src={el} width={57} height={57} alt="" />
                            </div>
                          ))}
                        </>
                      ) : (
                        arrImages[card.class]
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Banner };
