import ContactCard from "@/components/ContactCard";
import ExperienceSection from "@/sections/Experience";
import HomeSection from "@/sections/Home";
import ProjectsSection from "@/sections/Projects";

import PageFooter from "@/components/PageFooter";
import PinnedNotesSection from "@/sections/PinnedNotes";

export default function Home() {
  return (
    <div className="flex lg:justify-center">
      <main className="max-w-screen-lg w-full px-6 lg:px-0">
        <div className="flex lg:flex-row flex-col lg:gap-20 ">
          <div className="lg:py-24 py-6">
            <ContactCard />
          </div>
          <div className="flex flex-col gap-10 w-full">
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
