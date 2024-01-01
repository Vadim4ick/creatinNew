import { Case } from "@/components/Case";
import { GetHomePageQuery } from "@/graphql/__generated__";
import { CustomLink } from "@/shared/ui/Link";

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
            <CustomLink variant="chartreuse" iconPosition="right">
              Все кейсы
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cases };
