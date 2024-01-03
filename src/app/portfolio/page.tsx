import { CasesProtfolio } from "./_section/CasesProtfolio";
import { Sidebar } from "@/components/Sidebar";

const test = [
  {
    id: 1,
    title: "Брендинг",
  },
  {
    id: 2,
    title: "Дизайн",
  },
  {
    id: 3,
    title: "Web-разработка",
  },
  {
    id: 4,
    title: "Мобильные приложения",
  },
];

const PortfolioPage = () => {
  return (
    <>
      <main className="page page--hassidebar">
        <div className="page__container">
          <Sidebar items={test} viewSpecialOffers={true} />

          <div className="page__base">
            <CasesProtfolio />
          </div>
        </div>
      </main>
    </>
  );
};

export default PortfolioPage;
