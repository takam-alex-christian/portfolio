"use client";

import Home09Icon from "@/assets/home-09-stroke-rounded";
import Briefcase01Icon from "@/assets/briefcase-01-stroke-rounded";
import CodeFolderIcon from "@/assets/code-folder-stroke-rounded";
// import ToolsIcon from "@/assets/tools-stroke-rounded";
import NewsIcon from "@/assets/news-stroke-rounded";

import IconLink from "./IconLink";
export default function NavBar() {
  return (
    <nav className="flex flex-col w-full items-center mt-7">
      <div className="bg-surface flex flex-row gap-6 rounded-xl py-2 px-4">
        <IconLink desc={"Home"} svgIcon={<Home09Icon />} href="/home" />
        <IconLink
          desc={"Experience"}
          svgIcon={<Briefcase01Icon />}
          href="/home"
        />
        <IconLink desc={"Projects"} svgIcon={<CodeFolderIcon />} href="/home" />
        <IconLink desc={"Blog"} svgIcon={<NewsIcon />} href="/home" />
        {/* <IconLink svgIcon={<Home09Icon />} href="/home" /> */}
      </div>
    </nav>
  );
}
