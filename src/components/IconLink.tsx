import Link from "next/link";
import { useAnimate, motion } from "motion/react";

export default function IconLink({
  svgIcon,
  href,
  desc,
}: {
  svgIcon: React.ReactElement;
  href: string;
  desc?: string; // description
}) {
  const [scope, animate] = useAnimate();
  function linkHoverHandler() {
    animate(
      scope.current,
      { top: 44, opacity: 1 },
      { duration: 0.2, ease: "easeIn" }
    );
  }
  function linkLeaveHandler() {
    animate(
      scope.current,
      { top: 0, opacity: 0 },
      { duration: 0.2, ease: "easeInOut" }
    );
  }

  return (
    <div className="relative flex flex-col gap-1 items-center justify-center">
      <Link
        href={href}
        onMouseEnter={linkHoverHandler}
        onMouseLeave={linkLeaveHandler}
        className="relative group bg-transparent"
      >
        <div className="relative flex items-center justify-center w-8 h-8 rounded-lg ">
          {svgIcon}
        </div>
      </Link>
      {desc && desc.length != 0 && (
        <motion.div
          className="absolute -z-10 top-0 py-1 px-2 opacity-0 text-xs font-semibold bg-surface rounded-md"
          ref={scope}
        >
          {desc}
        </motion.div>
      )}
    </div>
  );
}
