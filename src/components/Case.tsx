import { Case } from "@/graphql/__generated__";
import { getFileUrl } from "@/shared/helpers/getFileUrl";
import { CustomLink } from "@/shared/ui/Link";
import Image from "next/image";

interface CaseProps {
  case: Omit<Case, "publishedAt" | "updatedAt" | "createdAt">;
}

const Case = (props: CaseProps) => {
  const { case: project } = props;

  return (
    <div
      className="cases__column case-card fade-up"
      data-watch
      data-watch-once
      data-watch-margin="30"
    >
      <div className="case-card__item case-card__item--text">
        <div className="case-card__title">{project.title && project.title}</div>
        <div className="case-card__info">{project.info && project.info}</div>
        <div className="case-card__btns">
          <CustomLink variant="white" iconPosition="right">
            Смотреть кейс
          </CustomLink>
        </div>
      </div>

      <div className="case-card__item case-card__item--big">
        {project.imageBig && (
          <Image
            fill
            src={getFileUrl(project.imageBig.data.attributes.url)}
            alt=""
          />
        )}
      </div>
      <a className="case-card__item case-card__item--main">
        {project.imageMain && (
          <Image
            fill
            src={getFileUrl(project.imageMain.data.attributes.url)}
            alt=""
          />
        )}
      </a>
    </div>
  );
};

export { Case };
