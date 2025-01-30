import ContactCard from "@/components/ContactCard";
import ExperienceSection from "@/sections/Experience";
import HomeSection from "@/sections/Home";
import ProjectsSection from "@/sections/Projects";

import PageFooter from "@/components/PageFooter";
import PinnedNotesSection from "@/sections/PinnedNotes";

export default function Home() {
  return (
    <div className="  flex flex-col items-center justify-center">
      <main className="max-w-screen-lg">
        <div className="flex lg:flex-row flex-col gap-20">
          <div className="py-24">
            <ContactCard />
          </div>
          <div className="flex flex-col gap-10 ">
            <div>
              <HomeSection key={"home"} />
            </div>
            <div>
              <ExperienceSection key={"experience"} />
            </div>
            <div>
              <ProjectsSection />
            </div>
            <div>
              <PinnedNotesSection />
            </div>
            <PageFooter />
          </div>
        </div>
      </main>
    </div>
  );
}
