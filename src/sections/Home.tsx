import { motion } from "motion/react";

import DescriptiveP from "@/components/DescriptiveP";
import InfoBox from "@/components/infoBox";
import SectionLayout from "@/layouts/SectionLayout";

import H1 from "@/components/H1";
export default function HomeSection() {
  return (
    <section>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <H1>SOFTWARE ENGINEER</H1>
          <DescriptiveP>
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </DescriptiveP>
        </div>
        <div className="flex flex-row gap-10 justify-start">
          <InfoBox number={2} text={["Years of", "experience"]} />
          <InfoBox number={11} text={["Projects", "shipped"]} />
          <InfoBox number={10} text={["Clients", "serviced"]} />
        </div>
      </div>
    </section>
  );
}
