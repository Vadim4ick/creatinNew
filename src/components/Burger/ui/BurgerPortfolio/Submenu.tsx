import { SidebarItems } from "@/components/Sidebar/ui/Sidebar";
import { Dispatch, SetStateAction, memo } from "react";

interface SubmenuProps {
  subMenuActive: boolean;
  subMenuContent: readonly SidebarItems[];
  name: string;
  setSortingId: Dispatch<SetStateAction<string[]>>;
  sortingId: string[];
}

const Submenu = memo((props: SubmenuProps) => {
  const { subMenuActive, subMenuContent, name, setSortingId, sortingId } =
    props;

  return (
    <div
      className="mobile-menu__services mobile-services"
      style={{ maxHeight: subMenuActive ? "500px" : "0px" }}
    >
      <div className="mobile-services__row">
        <a className="mobile-services__title">{name}</a>
        <ul className="mobile-services__list">
          {subMenuContent?.map((el, i) => {
            return (
              <div key={el.id} className="mobile-sort__item">
                <input
                  type="checkbox"
                  checked={sortingId.includes(el.id)}
                  className="input visually-hidden"
                  id={`checkbox-${i}`}
                  onChange={(e) =>
                    setSortingId((prev) =>
                      e.target.checked
                        ? [...prev, el.id]
                        : prev.filter((id) => id !== el.id)
                    )
                  }
                />
                <label htmlFor={`checkbox-${i}`} className="mobile-sort__label">
                  {el.attributes.name}
                </label>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
});

export { Submenu };
