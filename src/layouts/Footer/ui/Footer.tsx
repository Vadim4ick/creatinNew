import { MediaFragmentFragment } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { FooterLink } from "@/shared/icons/FooterLink";
import Image from "next/image";
import cls from "./Footer.module.scss";
import { classNames } from "@/shared/lib";

interface FooterProps {
  img?: MediaFragmentFragment;
  title: string;
  callback?: () => void;
}

const Footer = (props: FooterProps) => {
  const { img, title, callback } = props;

  return (
    <footer className="footer footer--service">
      <span className="footer__decor"></span>
      <div className={`footer__container ${cls.footer}`}>
        <div className={classNames("footer__row", {}, [cls.row])}>
          <div className={classNames("footer__name", {}, [cls.title])}>
            {title}
          </div>

          <button onClick={callback} className="footer__link">
            <FooterLink />
          </button>
        </div>

        <div className="footer__image">
          {img?.url && (
            <Image
              width={img.width}
              height={img.height}
              src={getFileUrl(img.url)}
              alt=""
            />
          )}
        </div>
      </div>
    </footer>
  );
};

export { Footer };
