import ContactCard from "@/components/ContactCard";
import ExperienceSection from "@/sections/Experience";
import HomeSection from "@/sections/Home";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="py-24">
      <main className="flex flex-col items-center">
        <div className="flex lg:flex-row flex-col gap-8">
          <div>
            <ContactCard />
          </div>
          <div className="flex flex-col gap-10 max-w-screen-lg">
            <div>
              <HomeSection />
            </div>
            <div>
              <ExperienceSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
