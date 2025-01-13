import Image from "next/image";

import myface from "@/assets/myface.jpeg";

export default function ContactCard() {
  return (
    <div className="flex flex-col gap-2 w-72 items-center text-center">
      <div>
        <Image
          className="rounded-xl"
          src={myface}
          alt="Image of the face of the author of the website"
          width={300}
          height={300}
        />
      </div>
      <p>Takam Alex C.</p>
      <p>
        A Software Engineer who has developed countless innovative solutions.
      </p>
    </div>
  );
}
