import { ButtonDetails } from "@/shared/ui/ButtonDetails";
import cls from "./style.module.scss";
import { BtnArrowThird } from "@/shared/icons/BtnArrowThird";
import { useContext } from "react";
import { PopupProviderContext } from "@/shared/providers/popupProvider";
import { AnimatedCounter } from "./AnimatedCounter";

const AboutStatisticBaner = () => {
  const { onClickPopup } = useContext(PopupProviderContext);

  const clickPopup = () => {
    onClickPopup();
  };

  return (
    <section className={cls.statistic}>
      <div className={`statistic__container`}>
        <div className={cls.content}>
          <div className={cls.heading}>
            <div className={cls.title}>
              <h2>О компании</h2>
            </div>

            <p>
              Помогаем бизнесу стать более узнаваемым и выстроить прочные связи
              с аудиторией, предлагая решения, адаптированные под индивидуальные
              цели и задачи клиента.
            </p>
          </div>

          <div className={cls.statisticBlocks}>
            <div className={cls.statisticBlock}>
              <div className={cls.statisticItem}>
                <span>
                  <AnimatedCounter to={200} />+
                </span>
                <p>Реализованных проектов</p>
              </div>

              <div className={`${cls.image} ${cls.img1}`}>
                <img src="/img/statisticBanner/1.png" alt="" />
              </div>
            </div>

            <div className={cls.statisticBlock}>
              <div className={cls.statisticItem}>
                <span>
                  <AnimatedCounter to={80} />+
                </span>
                <p>Проведённых исследований</p>
              </div>

              <div className={`${cls.image} ${cls.img2}`}>
                <img src="/img/statisticBanner/2.png" alt="" />
              </div>
            </div>

            <div className={cls.statisticBlock}>
              <div className={cls.statisticItem}>
                <span>
                  <AnimatedCounter to={60} />+
                </span>
                <p>Зарегистрированных товарных знаков</p>
              </div>

              <div className={cls.image}>
                <img src="/img/statisticBanner/3.png" alt="" />
              </div>
            </div>

            <div className={cls.statisticBlock}>
              <div className={cls.statisticItem}>
                <span>
                  <AnimatedCounter to={30} />+
                </span>
                <p>Высококласных специлистов</p>
              </div>

              <div className={cls.image}>
                <img src="/img/statisticBanner/4.png" alt="" />
              </div>
            </div>
          </div>

          <div className={cls.footer}>
            <p>
              Простыми словами: создаём правильное настроение, внедряем
              продуктивные решения и получаем качественный результат.
            </p>

            <ButtonDetails
              variant="dark"
              text="Узнать больше"
              Icon={() => <BtnArrowThird />}
              onClick={clickPopup}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutStatisticBaner };
