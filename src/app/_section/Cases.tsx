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

          {/* <div
            className="cases__column case-card fade-up"
            data-watch
            data-watch-once
            data-watch-margin="30"
          >
            <div className="case-card__item case-card__item--text">
              <div className="case-card__title">айдентика</div>
              <div className="case-card__info">
                леопард «Лео» является символом энергии и жизненной силы.
              </div>
              <div className="case-card__btns">
                <a className="btn btn--whte btn--hasarrow">
                  <span className="btn__text">Смотреть кейс</span>
                  <span className="btn__arrow">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.2529 9.66889L20.4858 15.8052C19.9859 15.9878 19.5079 16.236 19.0573 16.5444L17.2806 7.69666L19.2529 9.66889ZM8.09641 16.8809L8.09371 16.8945L10.0459 18.8467L16.2001 20.0909C16.3818 19.5921 16.6289 19.1153 16.9361 18.6659L8.09641 16.8809ZM17.9681 17.5766C18.2086 17.3361 18.4491 17.1099 18.695 16.8892L7.38126 5.57545L5.96705 6.98967L17.2808 18.3034C17.5015 18.0575 17.7277 17.817 17.9681 17.5766Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <div className="case-card__item case-card__item--big">
              <Image fill src={"/img/cases/01-2.png"} alt="" />
            </div>
            <a className="case-card__item case-card__item--main">
              <Image fill src={"/img/cases/01-1.png"} alt="" />
            </a>
          </div>
          <div
            className="cases__column case-card fade-up"
            data-watch
            data-watch-once
            data-watch-margin="30"
          >
            <div className="case-card__item case-card__item--text">
              <div className="case-card__title">редизайн</div>
              <div className="case-card__info">
                Отель Marry — пятизвёздочный отель, расположенный в деловом
                центре города Краснодара.
              </div>
              <div className="case-card__btns">
                <a className="btn btn--whte btn--hasarrow">
                  <span className="btn__text">Смотреть кейс</span>
                  <span className="btn__arrow">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.2529 9.66889L20.4858 15.8052C19.9859 15.9878 19.5079 16.236 19.0573 16.5444L17.2806 7.69666L19.2529 9.66889ZM8.09641 16.8809L8.09371 16.8945L10.0459 18.8467L16.2001 20.0909C16.3818 19.5921 16.6289 19.1153 16.9361 18.6659L8.09641 16.8809ZM17.9681 17.5766C18.2086 17.3361 18.4491 17.1099 18.695 16.8892L7.38126 5.57545L5.96705 6.98967L17.2808 18.3034C17.5015 18.0575 17.7277 17.817 17.9681 17.5766Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="case-card__item case-card__item--big">
              <Image fill src={"/img/cases/02-2.png"} alt="" />
            </div>
            <a className="case-card__item case-card__item--main">
              <Image fill src="/img/cases/02-1.png" alt="" />
            </a>
          </div>
          <div
            className="cases__column case-card fade-up"
            data-watch
            data-watch-once
            data-watch-margin="30"
          >
            <div className="case-card__item case-card__item--text">
              <div className="case-card__title">айдентика</div>
              <div className="case-card__info">
                бюро «ASTA» специализируется на проектировании жилых и
                коммерческих комплексов, дизайне интерьеров и общественных зон.
              </div>
              <div className="case-card__btns">
                <a className="btn btn--whte btn--hasarrow">
                  <span className="btn__text">Смотреть кейс</span>
                  <span className="btn__arrow">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.2529 9.66889L20.4858 15.8052C19.9859 15.9878 19.5079 16.236 19.0573 16.5444L17.2806 7.69666L19.2529 9.66889ZM8.09641 16.8809L8.09371 16.8945L10.0459 18.8467L16.2001 20.0909C16.3818 19.5921 16.6289 19.1153 16.9361 18.6659L8.09641 16.8809ZM17.9681 17.5766C18.2086 17.3361 18.4491 17.1099 18.695 16.8892L7.38126 5.57545L5.96705 6.98967L17.2808 18.3034C17.5015 18.0575 17.7277 17.817 17.9681 17.5766Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="case-card__item case-card__item--big">
              <Image fill src="/img/cases/03-2.png" alt="" />
            </div>
            <a className="case-card__item case-card__item--main">
              <Image fill src="/img/cases/03-1.png" alt="" />
            </a>
          </div>
          <div
            className="cases__column case-card fade-up"
            data-watch
            data-watch-once
            data-watch-margin="30"
          >
            <div className="case-card__item case-card__item--text">
              <div className="case-card__title">айдентика</div>
              <div className="case-card__info">
                стабильно развивающаяся строительная компания на юге страны
              </div>
              <div className="case-card__btns">
                <a className="btn btn--whte btn--hasarrow">
                  <span className="btn__text">Смотреть кейс</span>
                  <span className="btn__arrow">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.2529 9.66889L20.4858 15.8052C19.9859 15.9878 19.5079 16.236 19.0573 16.5444L17.2806 7.69666L19.2529 9.66889ZM8.09641 16.8809L8.09371 16.8945L10.0459 18.8467L16.2001 20.0909C16.3818 19.5921 16.6289 19.1153 16.9361 18.6659L8.09641 16.8809ZM17.9681 17.5766C18.2086 17.3361 18.4491 17.1099 18.695 16.8892L7.38126 5.57545L5.96705 6.98967L17.2808 18.3034C17.5015 18.0575 17.7277 17.817 17.9681 17.5766Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="case-card__item case-card__item--big">
              <Image fill src="/img/cases/04-2.png" alt="" />
            </div>
            <a className="case-card__item case-card__item--main">
              <Image fill src="/img/cases/04-1.png" alt="" />
            </a>
          </div>
          <div
            className="cases__column case-card fade-up"
            data-watch
            data-watch-once
            data-watch-margin="30"
          >
            <div className="case-card__item case-card__item--text">
              <div className="case-card__title">айдентика</div>
              <div className="case-card__info">
                коттеджный комплекс, символизирующий изысканность
                аристократического образа жизни.
              </div>
              <div className="case-card__btns">
                <a className="btn btn--whte btn--hasarrow">
                  <span className="btn__text">Смотреть кейс</span>
                  <span className="btn__arrow">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.2529 9.66889L20.4858 15.8052C19.9859 15.9878 19.5079 16.236 19.0573 16.5444L17.2806 7.69666L19.2529 9.66889ZM8.09641 16.8809L8.09371 16.8945L10.0459 18.8467L16.2001 20.0909C16.3818 19.5921 16.6289 19.1153 16.9361 18.6659L8.09641 16.8809ZM17.9681 17.5766C18.2086 17.3361 18.4491 17.1099 18.695 16.8892L7.38126 5.57545L5.96705 6.98967L17.2808 18.3034C17.5015 18.0575 17.7277 17.817 17.9681 17.5766Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="case-card__item case-card__item--big">
              <Image fill src="/img/cases/05-2.png" alt="" />
            </div>
            <a className="case-card__item case-card__item--main">
              <Image fill src="/img/cases/05-1.png" alt="" />
            </a>
          </div> */}
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
