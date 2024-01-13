import { ComponentImageBlocksGridImage } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { classNames } from "@/shared/lib";
import Image from "next/image";

const GridImage = (props: { content: ComponentImageBlocksGridImage }) => {
  const { content } = props;

  return (
    <div className="project__grid">
      <div
        className={classNames("project__image", {
          "project__image--big": content.streech === "left",
        })}
      >
        <Image
          alt=""
          src={getFileUrl(content.oneImage.data.attributes.url)}
          width={content.oneImage.data.attributes.width}
          height={content.oneImage.data.attributes.height}
        />
      </div>
      <div
        className={classNames("project__image", {
          "project__image--big": content.streech === "right",
        })}
      >
        <Image
          alt=""
          src={getFileUrl(content.twoImage.data.attributes.url)}
          width={content.twoImage.data.attributes.width}
          height={content.twoImage.data.attributes.height}
        />
      </div>
      <div className={classNames("project__image", {})}>
        <Image
          alt=""
          src={getFileUrl(content.threeImage.data.attributes.url)}
          width={content.threeImage.data.attributes.width}
          height={content.threeImage.data.attributes.height}
        />
      </div>
    </div>
  );
};

export { GridImage };
