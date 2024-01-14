import { ComponentImageBlocksOneImage } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import Image from "next/image";
import { memo } from "react";

const OneImage = memo((props: { content: ComponentImageBlocksOneImage }) => {
  const { content } = props;

  return (
    <div key={content.id + "one"} className="project__image">
      <Image
        alt=""
        src={getFileUrl(content.image?.data.attributes.url)}
        width={content.image?.data.attributes.width}
        height={content.image?.data.attributes.height}
      />
    </div>
  );
});

export { OneImage };
