import { GetOfferByIdQuery } from "@/graphql/__generated__";
import cls from "./OfferTopBanner.module.scss";
import { useMedia } from "@/shared/hooks/useMedia";
import ReactMarkdown from "react-markdown";
import { handleContextMenu } from "@/shared/helpers/handleContenxtMenu";
import React from "react";

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
            strong: ({ children }) => <b>{children}</b>,
            p: (props) => {
              // @ts-ignore
              const cleanedData = props.children.map((item, index) => {
                if (typeof item === "string") {
                  // Заменяем '\n' на перенос строки
                  const lines = item.split("\n");
                  return lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < lines.length - 1 && <br />}
                    </React.Fragment>
                  ));
                }
                return item;
              });

              return <h3>{cleanedData}</h3>;
            },
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
