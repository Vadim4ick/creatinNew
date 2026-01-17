/* eslint-disable @next/next/no-img-element */
import { ComponentImageBlocksGridImage } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { classNames } from "@/shared/lib";
import { memo } from "react";

const GridImage = memo((props: { content: ComponentImageBlocksGridImage }) => {
  const { content } = props;

  const one = content.oneImage?.data?.attributes;
  const two = content.twoImage?.data?.attributes;
  const three = content.threeImage?.data?.attributes;

  const mobOne = content.mobileImageOne?.data?.attributes;
  const mobTwo = content.mobileImageTwo?.data?.attributes;
  const mobThree = content.mobileImageThree?.data?.attributes;

  return (
    <div className="project__grid">
      <div
        className={classNames("project__image", {
          "project__image--big": content.selectStreech?.[0] === "left",
        })}
      >
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
            src={getFileUrl(one?.url)}
            // width={one?.width}
            // height={one?.height}
            alt=""
          />
        </picture>
      </div>

      <div
        className={classNames("project__image", {
          "project__image--big": content.selectStreech?.[0] === "right",
        })}
      >
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
            src={getFileUrl(two?.url)}
            // width={two?.width}
            // height={two?.height}
            alt=""
          />
        </picture>
      </div>

      <div className="project__image">
        <picture>
          {mobThree && (
            <source
              srcSet={getFileUrl(mobThree.url)}
              media="(max-width: 768px)"
              // width={mobThree.width}
              // height={mobThree.height}
            />
          )}
          <img
            src={getFileUrl(three?.url)}
            // width={three?.width}
            // height={three?.height}
            alt=""
          />
        </picture>
      </div>
    </div>
  );
});

export { GridImage };
