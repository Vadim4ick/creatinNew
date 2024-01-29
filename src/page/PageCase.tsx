"use client";

import { BurgerCase } from "@/components/Burger/ui/BurgerCase/BurgerCase";
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
import { useMedia } from "@/shared/hooks/useMedia";
import { DarkProviderContext } from "@/shared/providers/darkProvider";
import { useRouter } from "next/navigation";
import { memo, useCallback, useContext, useEffect, useState } from "react";

type DoubleImage = ComponentImageBlocksDoubleImage;
type GridImage = ComponentImageBlocksGridImage;
type OneImage = ComponentImageBlocksOneImage;
type TextImage = ComponentImageBlocksTextBlock;

type CaseContent = {
  readonly content: (DoubleImage | GridImage | OneImage | TextImage)[];
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

    // const { header: headerContext } = useContext(DarkProviderContext);
    const { setDarkTheme } = useContext(DarkProviderContext);

    const isDesktop = useMedia("(max-width: 1200px)");

    useEffect(() => {
      if (caseContent.backround[0] === "black") {
        setDarkTheme(true);
        document.body.classList.add("bodyBlack");
        document.querySelector("header")!.classList.add("headerBlack");
      }

      return () => {
        document.body.classList.remove("bodyBlack");
        document.querySelector("header")!.classList.remove("headerBlack");
        setDarkTheme(false);
      };
    }, []);

    const onClick = useCallback(() => {
      let nextId = String(currentId + 1);

      // Предварительная сортировка массива ids по возрастанию
      // @ts-ignore
      // const newIds = ids.toSorted(
      //   (a: { id: string }, b: { id: string }) =>
      //     parseInt(a.id) - parseInt(b.id)
      // );

      // Проверка, есть ли id в отсортированном массиве ids
      if (ids.some((item) => item.id === nextId)) {
        router.push(getRouteCase(nextId));
      } else {
        // Возвращение к первому элементу в массиве, если id не найден
        router.push(getRouteCase(ids[0].id));
      }
    }, [currentId, ids, router]);

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

        <main className="page">
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
