import type { Metadata } from "next";

import { Header } from "@/layouts";

import "@/shared/assets/styles/style.min.css";
import "@/shared/assets/styles/index.scss";

import { QueryProviders } from "@/shared/providers/queryProviders";
import { gql } from "@/graphql/client";
import { ActiveOfferProvider } from "@/shared/providers/activeOfferProvider";
import GoogleCaptchaWrapper from "@/shared/providers/googleRecaptcha";
import { FormSendPopup } from "./_section/FormSend/ui/FormSendPopup/FormSendPopup";
import { PopupProvider } from "@/shared/providers/popupProvider";
import { HomePreloaderContextProvider } from "@/shared/providers/homePreloader";
import { BannerAnimationContextProvider } from "@/shared/providers/bannerAnimationProvider";
import { DarkProviderContextProvider } from "@/shared/providers/darkProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",

  icons: {
    icon: {
      url: "/favicon.ico",
      sizes: "32x32",
    },
  },
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
              <GoogleCaptchaWrapper>
                <PopupProvider>
                  <HomePreloaderContextProvider>
                    <BannerAnimationContextProvider>
                      <DarkProviderContextProvider>
                        <Header header={header.data.attributes} />

                        {children}

                        <FormSendPopup />
                      </DarkProviderContextProvider>
                    </BannerAnimationContextProvider>
                  </HomePreloaderContextProvider>
                </PopupProvider>
              </GoogleCaptchaWrapper>
            </ActiveOfferProvider>
          </QueryProviders>
        </div>
      </body>
    </html>
  );
}
