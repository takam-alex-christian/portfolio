import H1 from "@/components/H1";
import SectionLayout from "@/layouts/SectionLayout";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import iokeep from "@/assets/iokeep.png";
import proactive from "@/assets/proactive.png";
import portfolio_v2 from "@/assets/portfolio v2.png";

import SolidLink from "@/layouts/SolidLink";

import DarkLink from "@/components/darklink";

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
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className=" ">
          <div className="rounded-md overflow-hidden w-fit">
            {imageSrc && (
              <Image
                src={imageSrc}
                // width={200}
                alt="Projects image"
                className="w-full md:w-[200px]"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-4/5">
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
        <div className="flex flex-col mt-6 gap-4 md:gap-0">
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
        <div className="py-2 md:pl-6">
          <DarkLink href="#">View all personal projects</DarkLink>
        </div>
      </div>
    </SectionLayout>
  );
}
