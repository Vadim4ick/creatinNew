import type { Metadata } from "next";

import { Header } from "@/layouts";

import "@/shared/assets/styles/style.min.css";

import { QueryProviders } from "@/shared/providers/queryProviders";
import { gql } from "@/graphql/client";
import { ActiveOfferProvider } from "@/shared/providers/activeOfferProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { header } = await gql.GetHeader();

  return (
    <html lang="ru">
      <body>
        <div className="wrapper">
          <QueryProviders>
            <ActiveOfferProvider>
              <Header header={header.data.attributes} />

              {children}
            </ActiveOfferProvider>
          </QueryProviders>
        </div>
      </body>
    </html>
  );
}
