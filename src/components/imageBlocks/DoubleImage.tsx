import { ComponentImageBlocksDoubleImage } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { memo } from "react";

const DoubleImage = memo(
  (props: { content: ComponentImageBlocksDoubleImage }) => {
    const { content } = props;

    return (
      <div key={content.id + "two"} className="project__images">
        <div className="project__image">
          {/* <Image
          alt=""
          src={getFileUrl(content.imageOne?.data.attributes.url)}
          width={content.imageOne?.data.attributes.width}
          height={content.imageOne?.data.attributes.height}
        /> */}
          <img src={getFileUrl(content.imageOne?.data.attributes.url)} />
        </div>
        <div className="project__image">
          {/* <Image
          alt=""
          src={getFileUrl(content.imageTwo?.data.attributes.url)}
          width={content.imageTwo?.data.attributes.width}
          height={content.imageTwo?.data.attributes.height}
        /> */}
          <img src={getFileUrl(content.imageTwo?.data.attributes.url)} />
        </div>
      </div>
    );
  }
);

export { DoubleImage };
