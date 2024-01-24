/* eslint-disable react-hooks/rules-of-hooks */
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { classNames } from "@/shared/lib";
import { memo, useRef } from "react";
import ReactMarkdown from "react-markdown";

interface TextBlock {
  readonly id: string;
  readonly titlle: string;
  readonly description: string;
}

interface TextBlocksProps {
  blocks: readonly TextBlock[];
  animation?: boolean;
}

const TextBlocks = memo((props: TextBlocksProps) => {
  const { blocks, animation = false } = props;

  // Создаем массив рефов для каждого блока
  const refBlocks = blocks.map(() => useRef<HTMLDivElement | null>(null));

  if (animation) {
    useIntersectionObserver({
      refs: refBlocks,
      once: true,
    });
  }

  return (
    <section className="text-block" style={{ marginTop: "20px" }}>
      {blocks.map((block, index) => (
        <div
          ref={animation ? refBlocks[index] : undefined}
          className={classNames("text-block__item", {
            "fade-up": animation,
          })}
          key={block.id}
        >
          <div className="text-block__title">{block.titlle}</div>
          <div className="text-block__info">
            <ReactMarkdown skipHtml>{block.description}</ReactMarkdown>
          </div>
        </div>
      ))}
    </section>
  );
});

export { TextBlocks };
