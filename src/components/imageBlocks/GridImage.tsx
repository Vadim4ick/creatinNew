import { ComponentImageBlocksGridImage } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { classNames } from "@/shared/lib";
import Image from "next/image";
import { memo } from "react";

const GridImage = memo((props: { content: ComponentImageBlocksGridImage }) => {
  const { content } = props;

  return (
    <div className="project__grid">
      <div
        className={classNames("project__image", {
          "project__image--big": content.selectStreech[0] === "left",
        })}
      >
        {/* <Image
          alt=""
          src={getFileUrl(content.oneImage.data.attributes.url)}
          width={content.oneImage.data.attributes.width}
          height={content.oneImage.data.attributes.height}
        /> */}

        <img src={getFileUrl(content.oneImage.data.attributes.url)} />
      </div>
      <div
        className={classNames("project__image", {
          "project__image--big": content.selectStreech[0] === "right",
        })}
      >
        {/* <Image
          alt=""
          src={getFileUrl(content.twoImage.data.attributes.url)}
          width={content.twoImage.data.attributes.width}
          height={content.twoImage.data.attributes.height}
        /> */}
        <img src={getFileUrl(content.twoImage.data.attributes.url)} />
      </div>
      <div className={classNames("project__image", {})}>
        {/* <Image
          alt=""
          src={getFileUrl(content.threeImage.data.attributes.url)}
          width={content.threeImage.data.attributes.width}
          height={content.threeImage.data.attributes.height}
        /> */}

        <img src={getFileUrl(content.threeImage.data.attributes.url)} />
      </div>
    </div>
  );
});

export { GridImage };
