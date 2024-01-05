import { MediaFragmentFragment } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { FooterLink } from "@/shared/icons/FooterLink";
import Image from "next/image";
import cls from "./Footer.module.scss";

interface FooterProps {
  img?: MediaFragmentFragment;
  title: string;
}

const Footer = (props: FooterProps) => {
  const { img, title } = props;

  return (
    <footer className="footer footer--service">
      <span className="footer__decor"></span>
      <div className={`footer__container ${cls.footer}`}>
        <div className="footer__row">
          <div className="footer__name">{title}</div>

          <a className="footer__link">
            <FooterLink />
          </a>
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
