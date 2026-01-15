import { ComponentImageBlocksTextBlock } from "@/graphql/__generated__";
import ReactMarkdown from "react-markdown";
import cls from "./Styles.module.scss";
import React, { memo } from "react";

const TextBlock = memo(
  (props: { content: ComponentImageBlocksTextBlock; darkTheme: boolean }) => {
    const { content, darkTheme } = props;

    return (
      <div className={`${cls.head} ${darkTheme ? cls.dark : ""}`}>
        <h2 className={cls.title}>{content.title}</h2>

        <div className={cls.text}>
          <ReactMarkdown>{content.description}</ReactMarkdown>
        </div>
      </div>
    );
  }
);

export { TextBlock };
