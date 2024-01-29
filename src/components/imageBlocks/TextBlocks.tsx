import { ComponentImageBlocksTextBlock } from "@/graphql/__generated__";
import ReactMarkdown from "react-markdown";
import cls from "./Styles.module.scss";
import { classNames } from "@/shared/lib";
import React, { memo, useRef } from "react";
import { SplitTypeAnimation } from "@/shared/hooks/useSplitTypeAnimation";

const TextBlock = memo((props: { content: ComponentImageBlocksTextBlock }) => {
  const { content } = props;

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const infoBlockRef = useRef<HTMLHeadingElement | null>(null);

  if (content.selectType[0] === "titleBlock") {
    return (
      <div className="project__head project__head--big">
        <h1 className={classNames("project__title", {}, [cls.title])}>
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
            {content.title}
          </ReactMarkdown>
        </h1>
        <div
          className="project__text"
          style={{
            // @ts-ignore
            "--width": content.desctopMaxWidth
              ? `${content.desctopMaxWidth}px`
              : undefined,
          }}
        >
          <ReactMarkdown skipHtml>{content.description}</ReactMarkdown>
        </div>
      </div>
    );
  }

  if (content.selectType[0] === "infoBlock") {
    return (
      <div className="project__head">
        <SplitTypeAnimation bg="#aaaaaa" fg="#181818" refChar={infoBlockRef}>
          <h2
            ref={infoBlockRef}
            className={classNames("project__title", {}, [cls.infoBlockTitle])}
          >
            <ReactMarkdown
              skipHtml
              components={{
                p: ({ children }) => {
                  return (
                    <>
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
                    </>
                  );
                },
              }}
            >
              {content.title}
            </ReactMarkdown>
          </h2>
        </SplitTypeAnimation>
        <div
          className="project__text"
          style={{
            // @ts-ignore
            "--width": content.desctopMaxWidth
              ? `${content.desctopMaxWidth}px`
              : undefined,
          }}
        >
          <ReactMarkdown>{content.description}</ReactMarkdown>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames("project__info", {}, [cls.textInfo])}>
      <SplitTypeAnimation bg="#aaaaaa" fg="#181818" refChar={titleRef}>
        <h2 ref={titleRef} className="project__title">
          <ReactMarkdown
            skipHtml
            components={{
              p: ({ children }) => {
                return (
                  <>
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
                  </>
                );
              },
            }}
          >
            {content.title}
          </ReactMarkdown>
        </h2>
      </SplitTypeAnimation>

      <div
        className="project__text"
        style={{
          // @ts-ignore
          "--width": content.desctopMaxWidth
            ? `${content.desctopMaxWidth}px`
            : undefined,
        }}
      >
        <ReactMarkdown>{content.description}</ReactMarkdown>
      </div>
    </div>
  );
});

export { TextBlock };
