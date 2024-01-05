import { Inblog } from "@/shared/icons/Inblog";
import Link from "next/link";

const MainFooter = () => {
  return (
    <footer className="footer">
      <span className="footer__decor"></span>
      <div className="footer__container">
        <div className="footer__title">
          <Inblog />
        </div>
        <Link href={"/"} className="footer__link">
          <svg
            width="15"
            height="18"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 12.289L10.5328 17.4999C10.0502 17.2755 9.53668 17.113 9 17.0124L14 9.49988L14 12.289ZM1.01154 9.49988L1 9.5076L1 12.2684L4.47191 17.4999C4.95305 17.2756 5.46497 17.1132 6 17.0127L1.01154 9.49988ZM7.5 16.9722C7.83999 16.9722 8.17001 16.9823 8.5 17L8.5 1.00004H6.5L6.5 17C6.82999 16.9823 7.16 16.9722 7.5 16.9722Z"
              fill="#181818"
            />
          </svg>
        </Link>
        <div className="footer__comment">
          Практический опыт показывает, что дальнейшее развитие различных форм
          деятельности требует определения и уточнения дальнейших
        </div>
      </div>
    </footer>
  );
};

export { MainFooter };
