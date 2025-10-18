"use client";

import { Case } from "@/components/Case";
import { SidebarItems } from "@/components/Sidebar/ui/Sidebar";
import { GetCasesByNameIdsQuery } from "@/graphql/__generated__";

import cls from "./style.module.scss";
import { Dispatch, SetStateAction, useState } from "react";

const CasesProtfolio = ({
  cases,
  caseNames,
  setInputIds,
  inputIds,
}: {
  cases: GetCasesByNameIdsQuery["cases"]["data"];
  caseNames: readonly SidebarItems[];
  inputIds: string[];
  setInputIds: Dispatch<SetStateAction<string[]>>;
}) => {
  const handleToggle = (rawId: string | number) => {
    const id = String(rawId);

    if (inputIds.includes(id)) {
      setInputIds(inputIds.filter((el) => el !== id));
    } else {
      setInputIds([...inputIds, id]);
    }
  };

  const isActive = (rawId: string | number) => inputIds.includes(String(rawId));

  return (
    <section className="cases cases--portfolio">
      <div className="cases__row">
        <div className={cls.sidebar}>
          <h3>Портфолио</h3>

          <ul>
            {caseNames.map((el) => (
              <li
                className={isActive(el.id) ? cls.active : undefined}
                key={el.id}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(el.id)}
                  aria-pressed={isActive(el.id)}
                >
                  {el.attributes.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className={`page__container ${cls.container}`}> */}
        {cases.map((el) => (
          // @ts-ignore
          <Case key={el.id} project={el} />
        ))}
        {/* </div> */}
      </div>
    </section>
  );
};

export { CasesProtfolio };
