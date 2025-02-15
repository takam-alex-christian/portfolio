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
        <div className="w-full md:w-4/5 flex flex-col gap-0 md:gap-4">
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
        <H1>3+ Years of experience</H1>
      </div>
      <div className="flex flex-col mt-6">
        <WorkHistoryItem
          href="/"
          title="Full-Stack Developer &#x2022; Caelis Tech Studio SARL"
          description="Developed components, part & entire front-end apps
based on designs from our internal design team. Developed, deployed and maintained microservices
for clients' projects."
          from={"January 2020"}
          to={"December 2022"}
        />
        <WorkHistoryItem
          href="/"
          title="Freelancer &#x2022; Ipetrade SARL"
          description="Designed, developed and maintained Ipetrade's
Inventory management APP to optimise the process of registering orders and shipping between Ipetrade locations in Cameroon.
Collaborated with the foreign developer team that was developing Ipetrade E-commerce platform in China to acquire, test and consume Orange Money and MTN Mobile Money APIs using JavaScript, Nodejs, Express and Postman."
          from={"June 2018"}
          to={"May 2019"}
        />
        <WorkHistoryItem
          href="/"
          title="Web Developer &#x2022; Sesco LTD"
          description="Designed and Developed the Customer Dashboard on
Sesco's E-commerce platform using HTML, CSS,
JavaScript and PHP. Built internal software solutions according to
stakeholder requirements ranging from excel macros to python scripts."
          from={"June 2017"}
          to={"September 2017"}
        />
      </div>
    </SectionLayout>
  );
}
