/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ComponentImageBlocksDoubleImage } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { memo } from "react";

const DoubleImage = memo(
  (props: { content: ComponentImageBlocksDoubleImage }) => {
    const { content } = props;

    const imgOne = content.imageOne?.data?.attributes;
    const imgTwo = content.imageTwo?.data?.attributes;
    const mobOne = content.mobileImageOne?.data?.attributes;
    const mobTwo = content.mobileImageTwo?.data?.attributes;

    return (
      <div key={content.id + "two"} className="project__images">
        <div className="project__image">
          <picture>
            {mobOne && (
              <source
                srcSet={getFileUrl(mobOne.url)}
                media="(max-width: 768px)"
                // width={mobOne.width}
                // height={mobOne.height}
              />
            )}
            <img
              src={getFileUrl(imgOne?.url)}
              // width={imgOne?.width}
              // height={imgOne?.height}
              alt=""
            />
          </picture>
        </div>
        <div className="project__image">
          <picture>
            {mobTwo && (
              <source
                srcSet={getFileUrl(mobTwo.url)}
                media="(max-width: 768px)"
                // width={mobTwo.width}
                // height={mobTwo.height}
              />
            )}
            <img
              src={getFileUrl(imgTwo?.url)}
              // width={imgTwo?.width}
              // height={imgTwo?.height}
              alt=""
            />
          </picture>
        </div>
      </div>
    );
  },
);

export { DoubleImage };
