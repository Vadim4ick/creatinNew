import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  memo,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Loader } from "@/shared/ui/Loader/Loader";
import { Footer } from "@/layouts/Footer/ui/Footer";
import useSmoothScrollToTop from "@/shared/hooks/useSmoothScrollToTop";
import { Sidebar } from "@/components/Sidebar";
import { FooterFragmentFragment } from "@/graphql/__generated__";
import {
  SidebarItemElement,
  SidebarItems,
} from "@/components/Sidebar/ui/Sidebar";
import { Offers } from "@/components/Offers";
import { Complex } from "@/components/Complex";
import { STORAGE_KEYS } from "@/shared/const/storageKey";
import { useGetOffersPage } from "@/shared/services/offers";
import { classNames } from "@/shared/lib";
import { useMedia } from "@/shared/hooks/useMedia";
import { ActiveOfferProviderContext } from "@/shared/providers/activeOfferProvider";

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
  setId: (id: string) => void | React.Dispatch<React.SetStateAction<string>>;
  containerClass?: string;
  mainClass?: string;
  BugerMenu?: () => JSX.Element;
  sidebarItemElement?: SidebarItemElement;
  setInputIds?: Dispatch<SetStateAction<string[]>>;
}

export type ActiveOffers = "offer" | "complex";

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  serviceId,
  items,
  isLoading,
  children,
  footer,
  setId,
  containerClass,
  mainClass = "page--hassidebar",
  BugerMenu,
  sidebarItemElement = "normal",
  setInputIds,
}) => {
  const { data: offersPage, isLoading: isLoadingOffers } = useGetOffersPage();

  const [indexDate, setIndexDate] = useState<IndexDateState[] | null>(null);

  const isDesktop = useMedia("(max-width: 1200px)");

  const { activeOffers, setActiveOffers } = useContext(
    ActiveOfferProviderContext
  );

  const ref = useRef<HTMLElement | null>(null);

  const onChange = (id: string) => {
    setId(id);
    setActiveOffers(null);
    sessionStorage.clear();
  };

  useSmoothScrollToTop({
    trigger: serviceId,
    time: 100,
  });

  const onClickFooter = () => {
    if (!indexDate) {
      return null;
    }

    const currentDate = indexDate.filter((el) => el.id === serviceId);

    const idx = indexDate.findIndex((el) => el.id === serviceId);

    if (indexDate[idx + 1]?.nameID === "complex") {
      return setId(indexDate[0].id);
    }

    const nextDate = currentDate[0].index + 1;

    if (nextDate >= items.length) {
      setId(indexDate[0].id);
    } else {
      setId(indexDate[nextDate].id);
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
    if (sessionStorage.getItem(STORAGE_KEYS.COMPLEX) === STORAGE_KEYS.COMPLEX) {
      setActiveOffers("complex");
    }

    return () => {
      sessionStorage.clear();
    };
  }, [setActiveOffers]);

  const activeComponent = useMemo(() => {
    switch (activeOffers) {
      case "offer":
        return <Offers mainRef={ref} data={offersPage} />;
      case "complex":
        return <Complex mainRef={ref} />;

      default:
        return children;
    }
  }, [activeOffers, children, offersPage]);

  if (isLoading || isLoadingOffers) {
    return <Loader />;
  }

  return (
    <>
      {BugerMenu && isDesktop.matches && <BugerMenu />}

      <main ref={ref} className={classNames("page", {}, [mainClass])}>
        <div className={classNames("page__container", {}, [containerClass])}>
          {!isDesktop.matches && (
            <Sidebar
              active={serviceId}
              onChange={onChange}
              items={items}
              viewSpecialOffers={true}
              setActiveOffers={setActiveOffers}
              activeOffers={activeOffers}
              imageOffers={offersPage?.offersPage.data.attributes.img}
              itemElement={sidebarItemElement}
              setInputIds={setInputIds}
            />
          )}

          {activeComponent}
        </div>
      </main>
      {footer && !activeOffers && (
        <Footer
          title={footer.title}
          img={footer.img?.data?.attributes}
          callback={onClickFooter}
        />
      )}
    </>
  );
};

export default memo(ServiceLayout);
