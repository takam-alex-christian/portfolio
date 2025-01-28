import Link from "next/link";
import H1 from "@/components/H1";
import SectionLayout from "@/layouts/SectionLayout";

import DesctriptiveP from "@/components/DescriptiveP";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useAnimate, motion } from "motion/react";

import iokeep from "@/assets/iokeep.png";
import proactive from "@/assets/proactive.png";
import portfolio_v2 from "@/assets/portfolio v2.png";
import ArrowUpRight02Icon from "@/assets/arrow-up-right";
import SolidLink from "@/layouts/SolidLink";

function ProjectItem({
  imageSrc,
  title,
  description,
  href,
}: {
  imageSrc?: string | StaticImport;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <SolidLink href={href}>
      <div className="flex flex-row gap-6">
        <div className=" ">
          <div className="rounded-md overflow-hidden">
            {imageSrc && (
              <Image src={imageSrc} width={200} alt="Projects image" />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-4/5">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </SolidLink>
  );
}

export default function ProjectsSection() {
  return (
    <SectionLayout>
      <div>
        <H1>Personal Projects</H1>
        <div className="flex flex-col mt-6">
          <ProjectItem
            key={"iokeep"}
            imageSrc={iokeep}
            title={"IOKEEP"}
            description="Iokeep is a digital rich-text note taking web application which allows users to create and manage notes accross devices"
            href="/"
          />
          <ProjectItem
            key={"Portfolio_v2"}
            imageSrc={portfolio_v2}
            title={"Portfolio v2"}
            description="My previous portfolio where i showcased my projects and experience."
            href="/"
          />
          <ProjectItem
            key={"proactive"}
            imageSrc={proactive}
            title={"Proactive"}
            description="Proactive is a web app which helps user to create and manage tasks"
            href={"/"}
          />
        </div>
      </div>
    </SectionLayout>
  );
}
