import Image from "next/image";
import Link from "next/link";

import DescriptiveP from "@/components/DescriptiveP";

import myface from "@/assets/myface.jpeg";

import GithubIcon from "@/assets/github-stroke-rounded";
import InstagramIcon from "@/assets/instagram-stroke-rounded";
import LinkedinIcon from "@/assets/linkedin-02-stroke-rounded";
import NewTwitterIcon from "@/assets/new-twitter-stroke-rounded";

function IconLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return <Link href={href}>{children}</Link>;
}

export default function ContactCard() {
  return (
    <div className="flex flex-col gap-32 lg:w-[344px] w-full items-center text-center dark:bg-white dark:text-black py-6 px-8 rounded-2xl">
      <div>
        <div>
          <Image
            className="rounded-xl"
            src={myface}
            alt="Image of the face of the author of the website"
            width={300}
            height={300}
          />
        </div>
        <p className="dark:text-black font-bold text-3xl py-6">Takam Alex C.</p>
      </div>

      <div className="flex flex-col gap-8">
        <DescriptiveP>
          A Software Engineer who has developed countless innovative solutions.
        </DescriptiveP>
        <div className="flex flex-row w-full items-center justify-center gap-4">
          <IconLink href={"#"}>
            <GithubIcon />
          </IconLink>
          <IconLink href={"#"}>
            <InstagramIcon />
          </IconLink>
          <IconLink href={"#"}>
            <LinkedinIcon />
          </IconLink>
          <IconLink href={"#"}>
            <NewTwitterIcon />
          </IconLink>
        </div>
      </div>
    </div>
  );
}
