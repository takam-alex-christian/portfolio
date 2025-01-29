"use client";
import { motion } from "motion/react";

import DescriptiveP from "@/components/DescriptiveP";
import InfoBox from "@/components/infoBox";
import SectionLayout from "@/layouts/SectionLayout";

import H1 from "@/components/H1";
import Link from "next/link";
import Download04Icon from "@/assets/download-04-stroke-rounded";
import VerticalScrollPointIcon from "@/assets/VerticalScrollPointIcon";
export default function HomeSection() {
  return (
    <SectionLayout>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <H1>SOFTWARE ENGINEER</H1>
          <DescriptiveP>
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
            Passionate about creating intuitive and engaging user experiences.
          </DescriptiveP>
        </div>
        <div className="flex flex-row gap-10 justify-start">
          <InfoBox number={2} text={["Years of", "experience"]} />
          <InfoBox number={11} text={["Projects", "Delivered"]} />
          <InfoBox number={10} text={["Clients", "served"]} />
        </div>
        <div className="flex flex-col gap-6 w-max items-start">
          <button className=" cap-b w-max">Let&apos;'s get in touch</button>
          <Link
            href="#"
            className=" cap-l flex flex-row gap-2 font-semibold w-max border-2 border-black p-4 rounded-2xl"
          >
            <Download04Icon />
            Download a copy of my cv
          </Link>
        </div>

        <div className="relative flex flex-row gap-2">
          <motion.div
            className="w-min"
            initial={{ scale: 1 }}
            animate={{ y: [0, -5, 5, 0], scale: [1, 1.1, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              easings: ["easeInOut", "backOut"],
            }}
          >
            <VerticalScrollPointIcon />
          </motion.div>
          <p>It&apos;'s not all, Keep Scrolling</p>
        </div>
      </div>
    </SectionLayout>
  );
}
