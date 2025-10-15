"use client";

import { SliderFragmentFragment } from "@/graphql/__generated__";
import { memo } from "react";
import { OtherProjects } from "@/components/imageBlocks/OtherProjects";
import cls from "./RelevantProject.module.scss";

interface RelevantProjectsProps {
  cases: SliderFragmentFragment["cases"]["data"];
  animation?: boolean;
}

const RelevantProjects = memo((props: RelevantProjectsProps) => {
  const { cases } = props;

  return (
    <OtherProjects
      className={cls.slider}
      title={"Релевантные проекты"}
      margin={12}
      caseContent={{
        data: cases,
      }}
    />
  );
});

export { RelevantProjects };
