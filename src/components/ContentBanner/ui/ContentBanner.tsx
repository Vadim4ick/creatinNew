import { BannerFragmentFragment } from "@/graphql/__generated__";
import { classNames } from "@/shared/lib";
import cls from "./ContentBanner.module.scss";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import React, { useContext } from "react";
import { PopupProviderContext } from "@/shared/providers/popupProvider";
import { handleContextMenu } from "@/shared/helpers/handleContenxtMenu";
import rehypeRaw from "rehype-raw";
import { getFileUrl } from "@/shared/helpers/getFileUrl";

interface ContentBannerProps {
  className?: string;
  content: BannerFragmentFragment;
}

const ContentBanner = (props: ContentBannerProps) => {
  const { className, content } = props;

  const { setOpen } = useContext(PopupProviderContext);

  return (
    <div
      style={{
        background:
          content.bgColorServiceBanner ??
          "linear-gradient(258.2deg, #204FF5 -44.15%, #080B12 133.3%)",
        ["--effect-color" as any]: content.colorImageEffectServiceBanner,
      }}
      onContextMenu={(e) => handleContextMenu(e)}
      className={classNames("cta__image", {}, [cls.container, className])}
    >
      <div className={cls.content}>
        <div className={cls.left}>
          <div className={cls.text}>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                p: ({ children }) => <h3>{children}</h3>,
              }}
            >
              {content.title}
            </ReactMarkdown>

            <ReactMarkdown
              skipHtml
              components={{
                p: ({ children }) => <p>{children}</p>,
              }}
            >
              {content.description}
            </ReactMarkdown>
          </div>

          <div className={cls.buttons}>
            <a className={cls.blue} onClick={() => setOpen(true)}>
              Обсудить проект
            </a>

            {content.button && (
              <Link className={cls.none} href={content.button.href}>
                {content.button.name}
              </Link>
            )}
          </div>
        </div>

        <div className={cls.right}>
          {content.imgServiceBanner.data && (
            <div className={cls.image}>
              <img
                src={getFileUrl(content.imgServiceBanner.data.attributes.url)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { ContentBanner };
