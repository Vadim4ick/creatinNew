import { ComponentImageBlocksOneImage } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import Image from "next/image";
import { memo } from "react";

const OneImage = memo((props: { content: ComponentImageBlocksOneImage }) => {
  const { content } = props;

  const desktop = content.image?.data?.attributes;
  const mobile = content.mobileImage?.data?.attributes;

  return (
    <div key={content.id + "one"} className="project__image">
      <picture>
        {mobile && (
          <source
            srcSet={getFileUrl(mobile.url)}
            media="(max-width: 768px)"
            width={mobile.width}
            height={mobile.height}
          />
        )}

        <Image
          alt=""
          src={getFileUrl(desktop?.url)}
          width={desktop?.width}
          height={desktop?.height}
        />
      </picture>
    </div>
  );
});

export { OneImage };
