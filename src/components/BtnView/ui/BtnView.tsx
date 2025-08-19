import cls from "./style.module.scss";
import { BtnArrowThird } from "@/shared/icons/BtnArrowThird";

const BtnView = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // плавный скролл
    });
  };

  return (
    <div className={cls.wrapper}>
      <button onClick={handleClick} className={cls.btn}>
        <span>Взглянуть еще разок</span>

        <div className={cls.arrow}>
          <BtnArrowThird />
        </div>
      </button>
    </div>
  );
};

export { BtnView };
