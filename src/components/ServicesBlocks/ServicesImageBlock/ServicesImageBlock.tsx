/* eslint-disable @next/next/no-img-element */
import { ComponentServicesContentSingleImageBlock } from "@/graphql/__generated__";
import cls from "./style.module.scss";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { classNames } from "@/shared/lib";
import { memo } from "react";

const ServicesImageBlock = memo(
  ({ block }: { block: ComponentServicesContentSingleImageBlock }) => {
    const images = block.image?.data ?? [];
    const count = images.length;

    return (
      <div className={cls.content}>
        {(block?.title || block?.description) && (
          <div className={cls.block}>
            {block?.title && <h4>{block?.title}</h4>}

            {block?.description && (
              <div className={cls.desc}>
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    br: () => <br />,
                    ul: ({ children }) => (
                      <ul className={cls.ul}>{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <li className={cls.ol}>{children}</li>
                    ),
                  }}
                >
                  {block.description}
                </ReactMarkdown>
              </div>
            )}
          </div>
        )}

        {count > 0 && (
          <div
            className={classNames(
              cls.images,
              {
                [cls.isOdd]: count % 2 !== 0,
              },
              [],
            )}
          >
            {images.map((image, i) => (
              <img
                key={image.id || i}
                src={getFileUrl(image.attributes.url)}
                alt={image.attributes.alternativeText || ""}
                className={classNames(
                  "",
                  {
                    [cls.fullWidth]:
                      count % 2 !== 0 && i === count - 1 && count > 1,
                  },
                  [],
                )}
              />
            ))}
          </div>
        )}
      </div>
    );
  },
);

export { ServicesImageBlock };
