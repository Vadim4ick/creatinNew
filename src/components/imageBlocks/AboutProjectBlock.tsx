import { ComponentImageBlocksAboutProject } from "@/graphql/__generated__";
import cls from "./Styles.module.scss";

const AboutProjectBlock = ({
  content,
}: {
  content: ComponentImageBlocksAboutProject;
}) => {
  return (
    <div className={`${cls.wrapper} ${cls.about}`}>
      <h2 className={cls.title}>О проекте</h2>

      <div className={cls.aboutContent}>
        <div className={cls.info}>
          {content?.client && (
            <div className={cls.block}>
              <span>Заказчик:</span>
              <p>{content.client}</p>
            </div>
          )}

          {content?.industry && (
            <div className={cls.block}>
              <span>Отрасль:</span>
              <p>{content.industry}</p>
            </div>
          )}

          {content?.deadline && (
            <div className={cls.block}>
              <span>Срок сдачи:</span>
              <p>{content.deadline} дней</p>
            </div>
          )}
        </div>

        <div className={cls.info}>
          <div className={`${cls.block} ${cls.tasks}`}>
            <span>Было сделано:</span>

            <ul>
              {content.tasks.split(",").map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutProjectBlock };
