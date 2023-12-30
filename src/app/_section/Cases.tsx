import { Case } from "@/components/Case";
import { GetHomePageQuery } from "@/graphql/__generated__";
import { BtnArrow } from "@/shared/icons/BtnArrow";

interface CasesProps {
  cases: GetHomePageQuery["homePage"]["data"]["attributes"]["cases"];
}

const Cases = (props: CasesProps) => {
  const { cases } = props;

  return (
    <section className="cases">
      <div className="cases__container">
        <h2 className="cases__title _title" data-observe>
          наши кейсы
        </h2>

        <div className="cases__row">
          {cases.data.map((el) => (
            // @ts-ignore
            <Case key={el.id} case={el.attributes} />
          ))}

          <div className="cases__more">
            <a className="btn btn--alt btn--hasarrow">
              <span className="btn__text">Все кейсы</span>

              <span className="btn__arrow">
                <BtnArrow />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cases };
