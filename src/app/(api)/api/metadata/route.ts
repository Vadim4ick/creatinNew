import { gql } from "@/graphql/client";
import { SeoPage } from "@/shared/const/pages";
import { NextResponse } from "next/server";

export type Error = {
  code?: string;
  text?: string;
};

export type ResponseData<DataType> = {
  status: string;
  error?: Error;
  data?: DataType;
};

export type Params<DataType> = {
  data?: DataType;
  code?: string;
  text?: string;
};

export const serverError = (
  params?: Params<undefined>
): ResponseData<undefined> => {
  const code = params?.code ?? "SERVER_ERROR";
  const text = params?.text;

  const error: Error = {};

  error.code = code;
  error.text = text;

  return {
    status: "error",
    error,
  };
};

type PageFunction<T> = () => Promise<T>;

export async function GET(req: Request) {
  const page = new URL(req.url).searchParams.get("page");
  const item = new URL(req.url).searchParams.get("item");

  if (!page) {
    return NextResponse.json(
      serverError({
        text: "Нет URL параметра",
      }),
      {
        status: 404,
      }
    );
  }

  const pageFunctionMap: Record<SeoPage, PageFunction<unknown>> = {
    "/": gql.GetSeoHomePage,
    "/services": gql.GetSeoServicesPage,
    "/portfolio": gql.GetSeoPortfolioPage,
    "/about": gql.GetSeoAboutPage,
  };

  if (!(page in pageFunctionMap)) {
    return NextResponse.json(
      serverError({
        text: "Недопустимая страница",
      }),
      {
        status: 404,
      }
    );
  }

  const getPage = pageFunctionMap[page as SeoPage];

  const pageQuery = await getPage();

  if (!pageQuery) {
    return NextResponse.json(
      serverError({
        text: "Не найдено",
      }),
      {
        status: 404,
      }
    );
  }

  const metadata = {
    title: Object.values(pageQuery)[0].data.attributes.seo.metaTitle,
    description:
      Object.values(pageQuery)[0].data.attributes.seo.metaDescription,
    keywords: Object.values(pageQuery)[0].data.attributes.seo.keywords,
    robots: Object.values(pageQuery)[0].data.attributes.seo.metaRobots,
    viewport: Object.values(pageQuery)[0].data.attributes.seo.metaViewport,
    structuredData:
      Object.values(pageQuery)[0].data.attributes.seo.structuredData,
    canonical: Object.values(pageQuery)[0].data.attributes.seo.canonicalURL,
  };

  return NextResponse.json({ metadata: metadata });
}
