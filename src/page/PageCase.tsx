"use client";

import { DoubleImage } from "@/components/imageBlocks/DoubleImage";
import { GridImage } from "@/components/imageBlocks/GridImage";
import { OneImage } from "@/components/imageBlocks/OneImage";
import { TextBlock } from "@/components/imageBlocks/TextBlocks";
import {
  ComponentImageBlocksDoubleImage,
  ComponentImageBlocksGridImage,
  ComponentImageBlocksOneImage,
  ComponentImageBlocksTextBlock,
  FooterFragmentFragment,
  GetCasesIdsQuery,
} from "@/graphql/__generated__";
import { Footer } from "@/layouts/Footer/ui/Footer";
import { getRouteCase } from "@/shared/const/pages";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

type DoubleImage = ComponentImageBlocksDoubleImage;
type GridImage = ComponentImageBlocksGridImage;
type OneImage = ComponentImageBlocksOneImage;
type TextImage = ComponentImageBlocksTextBlock;

type CaseContent = {
  readonly content: (DoubleImage | GridImage | OneImage | TextImage)[];
  readonly Footer: FooterFragmentFragment;
};

const PageCase = ({
  caseContent,
  ids,
  id,
}: {
  id: string;
  caseContent: CaseContent;
  ids: GetCasesIdsQuery["cases"]["data"];
}) => {
  const router = useRouter();
  const [currentId] = useState<number>(parseInt(id));

  const onClick = useCallback(() => {
    let nextId = String(currentId + 1);

    // Проверка, есть ли id в массиве ids
    if (ids.some((item) => item.id === nextId)) {
      router.push(getRouteCase(nextId));
    } else {
      // Возвращение к первому элементу в массиве, если id не найден
      router.push(getRouteCase(ids[0].id));
    }
  }, [router]);

  return (
    <>
      <main className="page">
        <section className="project">
          <article className="project__container">
            {caseContent.content.map((el) => {
              if (el.idBlock === "oneImage") {
                return (
                  <OneImage key={el.idBlock + el.id} content={el as OneImage} />
                );
              } else if (el.idBlock === "doubleImage") {
                return (
                  <DoubleImage
                    key={el.idBlock + el.id}
                    content={el as DoubleImage}
                  />
                );
              } else if (el.idBlock === "textBlock") {
                return (
                  <TextBlock
                    key={el.idBlock + el.id}
                    content={el as TextImage}
                  />
                );
              } else if (el.idBlock === "gridImage") {
                return (
                  <GridImage
                    key={el.idBlock + el.id}
                    content={el as GridImage}
                  />
                );
              }
            })}
          </article>
        </section>
      </main>

      {caseContent.Footer && (
        <Footer
          title={caseContent.Footer.title}
          img={caseContent.Footer.img?.data?.attributes}
          callback={onClick}
        />
      )}
    </>
  );
};

export { PageCase };
