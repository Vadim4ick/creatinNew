import { ComponentImageBlocksDoubleTextBlocks } from "@/graphql/__generated__";
import cls from "./Styles.module.scss";
import { classNames } from "@/shared/lib";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import React from "react";
// import { useMedia } from "@/shared/hooks/useMedia";

const DoubleTextBlocks = ({
  content,
}: {
  content: ComponentImageBlocksDoubleTextBlocks;
}) => {
  // const isDesktop = useMedia("(max-width: 1200px)");

  // {isDesktop.matches
  //   ? partnersContainerRef.current && (
  //       <Portal element={partnersContainerRef.current}>
  //         {partnersBtn}
  //       </Portal>
  //     )
  //   : partnersBtn}

  return (
    <div
      className={classNames("project__doubleTextBlocks", {}, [cls.container])}
    >
      <div className={cls.row}>
        <div className={cls.content}>
          <h2 className="project__title">
            <ReactMarkdown
              skipHtml
              components={{
                p: ({ children }) => {
                  return (
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
                  );
                },
              }}
            >
              {content.oldTitle}
            </ReactMarkdown>
          </h2>

          <div className={classNames("project__text", {}, [cls.text])}>
            <ReactMarkdown>{content.oldDescription}</ReactMarkdown>
          </div>
        </div>

        {content.oldLogo.data && (
          <div className={cls.image}>
            <Image
              src={content.oldLogo.data.attributes.url}
              width={content.oldLogo.data.attributes.width}
              height={content.oldLogo.data.attributes.height}
              alt="old"
            />
          </div>
        )}
      </div>

      <div className={cls.row}>
        <div className={cls.content}>
          <h2 className="project__title">
            <ReactMarkdown
              skipHtml
              components={{
                p: ({ children }) => {
                  return (
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
                  );
                },
              }}
            >
              {content.newTitle}
            </ReactMarkdown>
          </h2>

          <div className={classNames("project__text", {}, [cls.text])}>
            <ReactMarkdown>{content.newDescription}</ReactMarkdown>
          </div>
        </div>

        {content.newLogo.data && (
          <div className={cls.image}>
            <Image
              src={content.newLogo.data.attributes.url}
              width={content.newLogo.data.attributes.width}
              height={content.newLogo.data.attributes.height}
              alt="new"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export { DoubleTextBlocks };
