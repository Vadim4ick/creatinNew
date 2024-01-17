import { PopupProviderContext } from "@/shared/providers/popupProvider";
import { MutableRefObject, useContext } from "react";

const SendTaskBtn = ({
  sendTaskBtnRef,
}: {
  sendTaskBtnRef: MutableRefObject<HTMLAnchorElement | null>;
}) => {
  const { onClickPopup } = useContext(PopupProviderContext);

  const clickPopup = () => {
    onClickPopup();
  };

  return (
    <a
      ref={sendTaskBtnRef}
      onClick={clickPopup}
      title="Вернуться на предыдущую страницу"
      className="mobile-menu__sublink mobile-menu__sublink--small btn btn--alt"
    >
      Оставить заявку
    </a>
  );
};

export { SendTaskBtn };
