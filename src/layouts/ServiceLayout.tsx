import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { Loader } from "@/shared/ui/Loader/Loader";
import { Footer } from "@/layouts/Footer/ui/Footer";
import useSmoothScrollToTop from "@/shared/hooks/useSmoothScrollToTop";
import { Sidebar } from "@/components/Sidebar";
import {
  FooterFragmentFragment,
  GetFormFeedbackQuery,
} from "@/graphql/__generated__";
import {
  SidebarItemElement,
  SidebarItems,
} from "@/components/Sidebar/ui/Sidebar";
import { classNames } from "@/shared/lib";
import { useMedia } from "@/shared/hooks/useMedia";
import { FormSend } from "@/app/_section/FormSend";
import { useRouter } from "next/navigation";

export interface IndexDateState {
  id: string;
  index: number;
  nameID: undefined | string;
}

interface ServiceLayoutProps {
  serviceId?: string;
  items: readonly SidebarItems[];
  isLoading: boolean;
  children: ReactNode;
  footer?: FooterFragmentFragment | undefined;
  noReddirect?: boolean;
  containerClass?: string;
  mainClass?: string;
  BugerMenu?: () => JSX.Element;
  sidebarItemElement?: SidebarItemElement;
  setInputIds?: Dispatch<SetStateAction<string[]>>;

  urlPathname?: string;
  onChangeDop?: (id: string) => void;
  onChangeDopFooter?: VoidFunction;
  footerCls?: string;
  formFeedback?: GetFormFeedbackQuery["formFeedback"]["data"]["attributes"]["formFeedback"];
}

export type ActiveOffers = "offer" | "complex";

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  serviceId,
  items,
  isLoading,
  children,
  footer,
  noReddirect,
  containerClass,
  mainClass = "page--hassidebar",
  BugerMenu,
  sidebarItemElement = "normal",
  setInputIds,
  formFeedback,
  footerCls,
  onChangeDop,
  onChangeDopFooter,
  urlPathname = "",
}) => {
  const [indexDate, setIndexDate] = useState<IndexDateState[] | null>(null);

  const router = useRouter();

  const isDesktop = useMedia("(max-width: 1200px)");

  const ref = useRef<HTMLElement | null>(null);

  const onChange = (id: string) => {
    if (onChangeDop) {
      return onChangeDop(id);
    }

    if (noReddirect) {
      return;
    }

    router.push(`${urlPathname}/${id}`);
  };

  useSmoothScrollToTop({
    trigger: serviceId,
    time: 100,
  });

  const onClickFooter = () => {
    if (onChangeDopFooter) {
      return onChangeDopFooter();
    }
    if (!indexDate) {
      return null;
    }

    const currentDate = indexDate.filter((el) => el.id === serviceId);

    const idx = indexDate.findIndex((el) => el.id === serviceId);

    if (indexDate[idx + 1]?.nameID === "complex") {
      return router.push(`${urlPathname}/${indexDate[0].id}`);
    }

    const nextDate = currentDate[0].index + 1;

    if (nextDate >= items.length) {
      return router.push(`${urlPathname}/${indexDate[0].id}`);
    } else {
      return router.push(`${urlPathname}/${indexDate[nextDate].id}`);
    }
  };

  useEffect(() => {
    const initialIndexes = items.map((item, index) => ({
      id: item.id,
      nameID: item.attributes.nameID,
      index,
    }));

    setIndexDate(initialIndexes);
  }, [items]);

  useEffect(() => {
    document.documentElement.setAttribute(
      "style",
      '--font-primary: "Jeko-otf", Fallback'
    );
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {BugerMenu && isDesktop.matches && <BugerMenu />}

      <main
        onCopy={(event: React.ClipboardEvent<HTMLElement>) => {
          event.preventDefault();
          return false;
        }}
        ref={ref}
        className={classNames("page", {}, [mainClass])}
      >
        <div
          className={classNames(
            "page__container",
            {},
            // {
            //   "page__container--sidebar": activeComplex,
            // },
            [containerClass]
          )}
        >
          {!isDesktop.matches && (
            <Sidebar
              active={serviceId}
              onChange={onChange}
              items={items}
              itemElement={sidebarItemElement}
              setInputIds={setInputIds}
            />
          )}

          {children}
        </div>
      </main>

      {formFeedback && <FormSend className="pb-70" form={formFeedback} />}

      {footer && (
        <Footer
          className={footerCls ? footerCls : undefined}
          title={footer.title}
          img={footer.img?.data?.attributes}
          callback={onClickFooter}
        />
      )}
    </>
  );
};

export default memo(ServiceLayout);
