"use client";

import H1 from "@/components/H1";
import SectionLayout from "@/layouts/SectionLayout";
import Link04Icon from "@/assets/link-04-stroke-rounded";
import ArrowUpRight02Icon from "@/assets/arrow-up-right";
import Link from "next/link";

import { motion, useAnimate } from "motion/react";

function WorkHistoryItem({
  title,
  description,
  from,
  to,
}: {
  title: string;
  description: string;
  from: string;
  to: string;
}) {
  const [scope, animate] = useAnimate();
  function mouseEnterHandler() {
    animate(
      scope.current,
      { top: 20, right: 12 },
      { ease: "easeInOut", duration: 0.2 }
    );
  }

  function MouseLeaveHandler() {
    animate(
      scope.current,
      { top: 32, right: 24 },
      { ease: "easeInOut", duration: 0.2 }
    );
  }
  return (
    <div>
      <Link
        className="relative block group rounded-2xl overflow-hidden"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={MouseLeaveHandler}
        href={"/"}
      >
        <div className="group-hover:bg-[#1E1D1C] p-6 ">
          <div className="w-4/5 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p>{description}</p>
            <p>
              {from} - {to}
            </p>
          </div>
          <motion.div ref={scope} className="absolute top-8 right-6">
            <ArrowUpRight02Icon />
          </motion.div>
        </div>
      </Link>
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
          title="Freelance"
          description="aldf jalksdf klajsldfl kaklsdjflk lakds asdf asdf asdf "
          from={"June 2018"}
          to={"September 2018"}
        />
        <WorkHistoryItem
          title="Emile's Fake company"
          description="aldf jalksdf klajsldfl kaklsdjflk lakds asdf asdf asdf "
          from={"June 2018"}
          to={"September 2018"}
        />
        <WorkHistoryItem
          title="Sesco LTD"
          description="aldf jalksdf klajsldfl kaklsdjflk lakds asdf asdf asdf "
          from={"June 2018"}
          to={"September 2018"}
        />
      </div>
    </SectionLayout>
  );
}
