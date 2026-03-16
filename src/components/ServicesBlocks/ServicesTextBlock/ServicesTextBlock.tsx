import { ComponentServicesContentTextVariant } from "@/graphql/__generated__";
import cls from "./style.module.scss";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";

const ServicesTextBlock = ({
  block,
}: {
  block: ComponentServicesContentTextVariant;
}) => {
  return (
    <div className={cls.block}>
      <h4>{block.title}</h4>

      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          br: () => <br />,
          ul: ({ children }) => <ul className={cls.ul}>{children}</ul>,
          ol: ({ children }) => <li className={cls.ol}>{children}</li>,
        }}
      >
        {block.description}
      </ReactMarkdown>
    </div>
  );
};

export { ServicesTextBlock };
