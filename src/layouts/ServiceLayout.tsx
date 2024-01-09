import React, { ReactNode, memo, useEffect, useRef, useState } from "react";
import { Loader } from "@/shared/ui/Loader/Loader";
import { Footer } from "@/layouts/Footer/ui/Footer";
import useSmoothScrollToTop from "@/shared/hooks/useSmoothScrollToTop";
import { Sidebar } from "@/components/Sidebar";
import { FooterFragmentFragment } from "@/graphql/__generated__";
import { SidebarItems } from "@/components/Sidebar/ui/Sidebar";
import { Offers } from "@/components/Offers";

interface IndexDateState {
  id: string;
  index: number;
}

interface ServiceLayoutProps {
  serviceId: string;
  items: readonly SidebarItems[];
  isLoading: boolean;
  children: ReactNode;
  footer?: FooterFragmentFragment | undefined;
  setId: (id: any) => void | React.Dispatch<React.SetStateAction<string>>;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  serviceId,
  items,
  isLoading,
  children,
  footer,
  setId,
}) => {
  const [indexDate, setIndexDate] = useState<IndexDateState[] | null>(null);
  const [activeOffers, setActiveOffers] = useState<boolean>(false);

  const ref = useRef<HTMLElement | null>(null);

  const onChange = (id: string) => {
    setId(id);
    setActiveOffers(false);
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
      index,
    }));

    setIndexDate(initialIndexes);
  }, [items]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <main ref={ref} className="page page--hassidebar">
        <div className="page__container">
          <Sidebar
            active={serviceId}
            onChange={onChange}
            items={items}
            viewSpecialOffers={true}
            setActiveOffers={setActiveOffers}
            activeOffers={activeOffers}
          />

          {activeOffers ? <Offers mainRef={ref} /> : children}
        </div>
      </main>

      {footer && !activeOffers && (
        <Footer
          title={footer.title}
          img={footer.img.data.attributes}
          callback={onClickFooter}
        />
      )}

      {/* {activeOffers && <Footer title={"Первая акция"} />} */}
    </>
  );
};

export default memo(ServiceLayout);
