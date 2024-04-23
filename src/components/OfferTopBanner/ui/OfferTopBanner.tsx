import { GetOfferByIdQuery } from "@/graphql/__generated__";
import cls from "./OfferTopBanner.module.scss";
import { useMedia } from "@/shared/hooks/useMedia";
import ReactMarkdown from "react-markdown";
import { handleContextMenu } from "@/shared/helpers/handleContenxtMenu";

const OfferTopBanner = ({
  banner,
}: {
  banner: GetOfferByIdQuery["offer"]["data"]["attributes"]["offerBanner"]["data"]["attributes"];
}) => {
  const isDesktop = useMedia("(max-width: 900px)");

  return (
    <div className={cls.banner}>
      <div onContextMenu={(e) => handleContextMenu(e)} className={cls.image}>
        {banner.offerBannerDesktop.data &&
          banner.offerBannerMobile.data &&
          (!isDesktop.matches ? (
            <img src={banner.offerBannerDesktop.data.attributes.url} alt="" />
          ) : (
            <img src={banner.offerBannerMobile.data.attributes.url} alt="" />
          ))}
      </div>

      <div className={cls.body}>
        <ReactMarkdown
          skipHtml
          components={{
            p: ({ children }) => <h3>{children}</h3>,
            strong: ({ children }) => <b>{children}</b>,
          }}
        >
          {banner.title}
        </ReactMarkdown>

        <ReactMarkdown
          skipHtml
          components={{
            p: ({ children }) => (
              <p
                style={{
                  width: banner.widthDescriptionBannerOfferPage
                    ? banner.widthDescriptionBannerOfferPage
                    : undefined,
                }}
              >
                {" "}
                {children}
              </p>
            ),
          }}
        >
          {banner.descriptionOffers}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export { OfferTopBanner };
