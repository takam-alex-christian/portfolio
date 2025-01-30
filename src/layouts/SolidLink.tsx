"use client";

import Link from "next/link";
import { motion, useAnimate } from "motion/react";

import ArrowUpRight01Icon from "@/assets/arrow-up-right-01-stroke-rounded";

function SolidLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
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
        className="relative block group md:rounded-2xl overflow-hidden"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={MouseLeaveHandler}
        href={href}
      >
        <div className="group-hover:bg-linkhover pt-0 md:p-6 ">
          {children}
          {/* <div className="w-4/5 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p>{description}</p>
            <p>
              {from} - {to}
            </p>
          </div> */}
          <motion.div
            ref={scope}
            className=" invisible md:visible md:absolute md:top-8 md:right-6 "
          >
            <ArrowUpRight01Icon />
          </motion.div>
        </div>
      </Link>
    </div>
  );
}

export default SolidLink;
