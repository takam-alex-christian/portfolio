"use client";

import ArrowUpRight03Icon from "@/assets/arrow-up-right-03-stroke-rounded";
import Link from "next/link";
import { motion, useAnimate } from "motion/react";

export default function DarkLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [linkScope, linkAnimate] = useAnimate();

  function mouseEnterAnimation() {
    linkAnimate(linkScope.current, { x: 16, opacity: 1 }, { duration: 0.2 });
  }
  function mouseLeaveAnimation() {
    linkAnimate(linkScope.current, { x: 0, opacity: 0.7 }, { duration: 0.5 });
  }
  return (
    <div className="flex flex-row gap-2 items-center ">
      <Link
        onMouseEnter={mouseEnterAnimation}
        onMouseLeave={mouseLeaveAnimation}
        className="text-lg font-semibold hover:underline decoration-indigo-700"
        href={href}
      >
        {children}
      </Link>
      <motion.div ref={linkScope} initial={{ opacity: 0.7 }}>
        <ArrowUpRight03Icon width={20} height={20} />
      </motion.div>
    </div>
  );
}
