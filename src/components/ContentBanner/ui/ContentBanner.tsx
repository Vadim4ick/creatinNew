/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { BannerFragmentFragment } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { classNames } from "@/shared/lib";
import cls from "./ContentBanner.module.scss";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import React, { useContext } from "react";
import { useMedia } from "@/shared/hooks/useMedia";
import { PopupProviderContext } from "@/shared/providers/popupProvider";
import { handleContextMenu } from "@/shared/helpers/handleContenxtMenu";

interface ContentBannerProps {
  className?: string;
  content: BannerFragmentFragment;
}

const ContentBanner = (props: ContentBannerProps) => {
  const { className, content } = props;

  const isDesktop = useMedia("(max-width: 900px)");

  const { setOpen } = useContext(PopupProviderContext);

  return (
    <div
      onContextMenu={(e) => handleContextMenu(e)}
      className={classNames("cta__image", {}, [cls.container])}
    >
      {!isDesktop.matches ? (
        <img
          src={getFileUrl(content.imgDesktop.data.attributes.url)}
          alt=""
          // height={content.imgDesktop.data.attributes.height}
          // width={content.imgDesktop.data.attributes.width}
        />
      ) : (
        <img
          src={getFileUrl(content.imgMobile.data.attributes.url)}
          // alt=""
          // height={content.imgMobile.data.attributes.height}
          // width={content.imgMobile.data.attributes.width}
        />
      )}

      <div className={cls.content}>
        <ReactMarkdown
          skipHtml
          components={{
            p: ({ children }) => (
              <h3
                style={{
                  maxWidth: !isDesktop.matches ? content.widthTitle : undefined,
                }}
              >
                {children}
              </h3>
            ),
            strong: ({ children }) => <b>{children}</b>,
          }}
        >
          {content.title}
        </ReactMarkdown>

        <ReactMarkdown
          skipHtml
          components={{
            p: ({ children }) => (
              <p
                style={{
                  maxWidth: !isDesktop.matches
                    ? content.widthDescription
                    : undefined,
                }}
              >
                {children}
              </p>
            ),
          }}
        >
          {content.description}
        </ReactMarkdown>

        {isDesktop.matches && (
          <div className={cls.buttons}>
            <a className={cls.blue} onClick={() => setOpen(true)}>
              Получить сейчас
            </a>

            {content.button && (
              <Link className={cls.none} href={content.button.href}>
                {content.button.name}
              </Link>
            )}
          </div>
        )}
      </div>

      {!isDesktop.matches && (
        <div className={cls.buttons}>
          <a className={cls.blue} onClick={() => setOpen(true)}>
            Получить сейчас
          </a>

          {content.button && (
            <Link className={cls.none} href={content.button.href}>
              {content.button.name}
            </Link>
          )}
        </div>
      )}

      <ReactMarkdown
        skipHtml
        components={{
          p: ({ children }) => (
            <span>
              {children
                ?.toString()
                .split(",\n")
                .map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {/* @ts-ignore */}
                    {index < children.length - 1 && <br />}
                  </React.Fragment>
                ))}
            </span>
          ),
        }}
      >
        {content.label}
      </ReactMarkdown>
    </div>
  );
};

export { ContentBanner };
