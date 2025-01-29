"use client";

import H1 from "@/components/H1";
import SectionLayout from "@/layouts/SectionLayout";

import SolidLink from "@/layouts/SolidLink";

function WorkHistoryItem({
  href,
  title,
  description,
  from,
  to,
}: {
  href: string;
  title: string;
  description: string;
  from: string;
  to: string;
}) {
  return (
    <div>
      <SolidLink href={href}>
        <div className="w-4/5 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p>{description}</p>
          <p>
            {from} - {to}
          </p>
        </div>
      </SolidLink>
    </div>
  );
}
export default function ExperienceSection() {
  return (
    <SectionLayout>
      <div>
        <H1>2 Years of experience</H1>
      </div>
      <div className="flex flex-col mt-6">
        <WorkHistoryItem
          href="/"
          title="Freelance"
          description="aldf jalksdf klajsldfl kaklsdjflk lakds asdf asdf asdf "
          from={"June 2018"}
          to={"September 2018"}
        />
        <WorkHistoryItem
          href="/"
          title="Emile's Fake company"
          description="aldf jalksdf klajsldfl kaklsdjflk lakds asdf asdf asdf "
          from={"June 2018"}
          to={"September 2018"}
        />
        <WorkHistoryItem
          href="/"
          title="Sesco LTD"
          description="aldf jalksdf klajsldfl kaklsdjflk lakds asdf asdf asdf "
          from={"June 2018"}
          to={"September 2018"}
        />
      </div>
    </SectionLayout>
  );
}
