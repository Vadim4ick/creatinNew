import { BannerFragmentFragment } from "@/graphql/__generated__";
import { classNames } from "@/shared/lib";
import cls from "./ContentBanner.module.scss";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import React, { useContext } from "react";
import { PopupProviderContext } from "@/shared/providers/popupProvider";
import { handleContextMenu } from "@/shared/helpers/handleContenxtMenu";
import rehypeRaw from "rehype-raw";
import { DecorBgGreen } from "@/shared/icons/DecorBgGreen";

interface ContentBannerProps {
  className?: string;
  content: BannerFragmentFragment;
}

const ContentBanner = (props: ContentBannerProps) => {
  const { className, content } = props;

  const { setOpen } = useContext(PopupProviderContext);

  return (
    <div
      onContextMenu={(e) => handleContextMenu(e)}
      className={classNames("cta__image", {}, [cls.container, className])}
    >
      <div className={cls.content}>
        <div className={cls.left}>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              p: ({ children }) => <h3>{children}</h3>,
              strong: ({ children }) => (
                <b>
                  <span>{children}</span>

                  <DecorBgGreen />
                </b>
              ),
              br: () => <br />,
            }}
          >
            {content.title}
          </ReactMarkdown>
        </div>

        <div className={cls.right}>
          <ReactMarkdown
            skipHtml
            components={{
              p: ({ children }) => <p>{children}</p>,
            }}
          >
            {content.description}
          </ReactMarkdown>

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

        <div className={cls.image}>
          <img src="/content-baner.png" />
        </div>
      </div>
    </div>
  );
};

export { ContentBanner };
