import { GetAskedQuestionsQuery } from "@/graphql/__generated__";
import cls from "./style.module.scss";
import { Spoller } from "@/shared/ui/Spoller";
import { PluceIcon } from "@/shared/icons/PluceIcon";
import { ButtonDetails } from "@/shared/ui/ButtonDetails";
import { Send } from "@/shared/icons/Send";
import { useMedia } from "@/shared/hooks/useMedia";

const AskedQuestions = ({
  askedQuestions,
}: {
  askedQuestions: GetAskedQuestionsQuery["askedQuestions"]["data"];
}) => {
  const isTablet = useMedia("(max-width: 991px)");

  return (
    <section className={cls.askedQuestions}>
      <div className="asked-questions__container">
        <div className={cls.body}>
          <div className={cls.left}>
            <h2>Вы спрашивали - Мы отвечаем</h2>

            {!isTablet.matches && <ButtonDetails Icon={() => <Send />} />}
          </div>

          <div className={cls.right}>
            {askedQuestions.map((q, i) => (
              <div key={i} className={cls.question}>
                <Spoller
                  className={cls.spoller}
                  btn={
                    <div className={cls.trigger}>
                      {q.attributes.question}

                      <div className={cls.icon}>
                        <PluceIcon />
                      </div>
                    </div>
                  }
                >
                  <div className={cls.answer}>{q.attributes.anser}</div>
                </Spoller>
              </div>
            ))}
          </div>

          {isTablet.matches && <ButtonDetails Icon={() => <Send />} />}
        </div>
      </div>
    </section>
  );
};

export { AskedQuestions };
