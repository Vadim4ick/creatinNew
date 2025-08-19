import { ComponentImageBlocksTextBlock } from "@/graphql/__generated__";
import ReactMarkdown from "react-markdown";
import cls from "./Styles.module.scss";
import { classNames } from "@/shared/lib";
import React, { memo } from "react";

function fixhyphens(text: string) {
  return text.replace(/(\S+)-(\S+)/g, "$1&#8288;-&#8288;$2");
}

const TextBlock = memo((props: { content: ComponentImageBlocksTextBlock }) => {
  const { content } = props;

  if (content.selectType[0] === "titleBlock") {
    return (
      <div className={cls.head}>
        <h1 className={cls.title}>
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
            {fixhyphens(content.title)}
          </ReactMarkdown>
        </h1>
        <div className={cls.text}>
          <ReactMarkdown skipHtml>{content.description}</ReactMarkdown>
        </div>
      </div>
    );
  }

  if (content.selectType[0] === "infoBlock") {
    return (
      <div className={cls.head}>
        <h2 className={cls.title}>{content.title}</h2>

        <div className={cls.text}>
          <ReactMarkdown>{content.description}</ReactMarkdown>
        </div>
      </div>
    );
  }

  return (
    <div className={cls.head}>
      <h2 className={cls.title}>{content.title}</h2>

      <div className={cls.text}>
        <ReactMarkdown>{content.description}</ReactMarkdown>
      </div>
    </div>
  );
});

export { TextBlock };
