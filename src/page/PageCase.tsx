"use client";

import { BurgerCase } from "@/components/Burger/ui/BurgerCase/BurgerCase";
import { DoubleImage } from "@/components/imageBlocks/DoubleImage";
import { DoubleTextBlocks } from "@/components/imageBlocks/DoubleTextBlocks";
import { GridImage } from "@/components/imageBlocks/GridImage";
import { OneImage } from "@/components/imageBlocks/OneImage";
import { TextBlock } from "@/components/imageBlocks/TextBlocks";
import {
  ComponentImageBlocksDoubleImage,
  ComponentImageBlocksDoubleTextBlocks,
  ComponentImageBlocksGridImage,
  ComponentImageBlocksOneImage,
  ComponentImageBlocksTextBlock,
  FooterFragmentFragment,
  GetCasesIdsQuery,
} from "@/graphql/__generated__";
import { Footer } from "@/layouts/Footer/ui/Footer";
import { getRouteCase } from "@/shared/const/pages";
import { useMedia } from "@/shared/hooks/useMedia";
import { DarkProviderContext } from "@/shared/providers/darkProvider";
import { useRouter } from "next/navigation";
import { memo, useCallback, useContext, useEffect, useState } from "react";

type DoubleImage = ComponentImageBlocksDoubleImage;
type GridImage = ComponentImageBlocksGridImage;
type OneImage = ComponentImageBlocksOneImage;
type TextImage = ComponentImageBlocksTextBlock;
type DoubleTextBlocks = ComponentImageBlocksDoubleTextBlocks;

type CaseContent = {
  readonly content: (
    | DoubleImage
    | GridImage
    | OneImage
    | TextImage
    | DoubleTextBlocks
  )[];
  readonly Footer: FooterFragmentFragment;
  readonly mobileName: string;
  readonly backround: ["black"] | ["white"];
};

const PageCase = memo(
  ({
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

    const { setDarkTheme } = useContext(DarkProviderContext);

    const isDesktop = useMedia("(max-width: 1200px)");

    useEffect(() => {
      const headerElement = document.querySelector("header");

      if (headerElement && caseContent.backround[0] === "black") {
        setDarkTheme(true);
        document.body.classList.add("bodyBlack");
      }

      return () => {
        document.body.classList.remove("bodyBlack");

        setDarkTheme(false);
      };
    }, [caseContent.backround, setDarkTheme]);

    const onClick = useCallback(() => {
      // Находим индекс текущего id в массиве
      const currentIndex = ids.findIndex(
        (item) => item.id === String(currentId)
      );

      if (currentIndex !== -1 && currentIndex < ids.length - 1) {
        // Если текущий id найден и не является последним элементом, переключаемся на следующий id
        const nextId = ids[currentIndex + 1].id;
        router.push(getRouteCase(nextId));
      } else {
        // Если текущий id последний или не найден, возвращаемся к первому элементу в массиве
        router.push(getRouteCase(ids[0].id));
      }
    }, [currentId, ids, router, getRouteCase]);

    useEffect(() => {
      document.documentElement.setAttribute(
        "style",
        '--font-primary: "Jeko-otf", Fallback'
      );
    }, []);

    return (
      <>
        {isDesktop.matches && (
          <BurgerCase SubMenuName={caseContent.mobileName} onClick={onClick} />
        )}

        <main
          onCopy={(event: React.ClipboardEvent<HTMLElement>) => {
            event.preventDefault();
            return false;
          }}
          className="page"
        >
          {!caseContent.content.length && (
            <div>Эта страница пока не заполнена</div>
          )}

          <section className="project">
            <article className="project__container">
              {caseContent.content.map((el) => {
                if (el.idBlock === "oneImage") {
                  return (
                    <OneImage
                      key={el.idBlock + el.id}
                      content={el as OneImage}
                    />
                  );
                } else if (el.idBlock === "doubleImage") {
                  return (
                    <DoubleImage
                      key={el.idBlock + el.id}
                      content={el as DoubleImage}
                    />
                  );
                } else if (el.idBlock === "gridImage") {
                  return (
                    <GridImage
                      key={el.idBlock + el.id}
                      content={el as GridImage}
                    />
                  );
                } else if (el.idBlock === "textBlock") {
                  return (
                    <TextBlock
                      key={el.idBlock + el.id}
                      content={el as TextImage}
                    />
                  );
                } else if (el.idBlock === "doubleTextBlocks") {
                  return (
                    <DoubleTextBlocks
                      key={el.idBlock + el.id}
                      content={el as DoubleTextBlocks}
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
  }
);

export { PageCase };
