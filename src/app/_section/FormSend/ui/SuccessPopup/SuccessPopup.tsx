import { Dispatch, SetStateAction, memo, useEffect, useRef } from "react";
import clsSend from "./SuccessPopup.module.scss";
import { classNames } from "@/shared/lib";
import { useMedia } from "@/shared/hooks/useMedia";

interface SuccessPopupProps {
  full: boolean;
  setSend: Dispatch<SetStateAction<boolean>>;
}

const SuccessPopup = memo((props: SuccessPopupProps) => {
  const { full, setSend } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  const isMobile = useMedia("(max-width: 767px)");

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setSend(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.body.classList.add("popup-show");
    document.querySelector("html")?.classList.add("lock");

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.classList.remove("popup-show");
      document.querySelector("html")?.classList.remove("lock");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id="callback"
      className={classNames("popup popup_callback popup_show")}
    >
      <div className="popup__wrapper">
        <div
          ref={ref}
          style={
            full && !isMobile.matches
              ? { maxHeight: "676px", height: "100%" }
              : undefined
          }
          className="popup__content"
        >
          <div className="popup__tabs">
            <div className={clsSend.container}>
              <div
                className={classNames(
                  "",
                  {
                    [clsSend.body]: full,
                    [clsSend.bodyNoFull]: !full,
                  },
                  []
                )}
              >
                <div
                  className={classNames(
                    clsSend.title,
                    {
                      [clsSend.content]: full,
                      [clsSend.contentNoFull]: !full,
                    },
                    []
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 32C0 23.5131 3.37142 15.3737 9.37258 9.37258C15.3737 3.37142 23.5131 0 32 0C40.4869 0 48.6263 3.37142 54.6274 9.37258C60.6286 15.3737 64 23.5131 64 32C64 40.4869 60.6286 48.6263 54.6274 54.6274C48.6263 60.6286 40.4869 64 32 64C23.5131 64 15.3737 60.6286 9.37258 54.6274C3.37142 48.6263 0 40.4869 0 32ZM30.1739 45.696L48.5973 22.6645L45.2693 20.0021L29.5595 39.6331L18.432 30.3616L15.7013 33.6384L30.1739 45.7003V45.696Z"
                      fill="#204FF5"
                    />
                  </svg>

                  <p>Заявка успешно отправлена</p>
                </div>
                <button
                  onClick={() => {
                    setSend(false);
                  }}
                >
                  Замечательно
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export { SuccessPopup };
