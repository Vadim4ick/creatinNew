import { ComponentImageBlocksDoubleTextBlocks } from "@/graphql/__generated__";
import cls from "./Styles.module.scss";
import { classNames } from "@/shared/lib";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import React, { useRef } from "react";
import { SplitTypeAnimation } from "@/shared/hooks/useSplitTypeAnimation";
// import { useMedia } from "@/shared/hooks/useMedia";

const DoubleTextBlocks = ({
  content,
}: {
  content: ComponentImageBlocksDoubleTextBlocks;
}) => {
  // const isDesktop = useMedia("(max-width: 1200px)");

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const titleRef2 = useRef<HTMLHeadingElement | null>(null);

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
          <SplitTypeAnimation bg="#aaaaaa" fg="#181818" refChar={titleRef}>
            <h2 ref={titleRef} className="project__title">
              <ReactMarkdown skipHtml>{content.oldTitle}</ReactMarkdown>
            </h2>
          </SplitTypeAnimation>

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
          <SplitTypeAnimation bg="#aaaaaa" fg="#181818" refChar={titleRef2}>
            <h2 ref={titleRef2} className="project__title">
              <ReactMarkdown skipHtml>{content.newTitle}</ReactMarkdown>
            </h2>
          </SplitTypeAnimation>

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
