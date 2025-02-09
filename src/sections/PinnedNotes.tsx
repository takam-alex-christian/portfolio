import SectionLayout from "@/layouts/SectionLayout";
import H1 from "@/components/H1";
import DescriptiveP from "@/components/DescriptiveP";
import Link from "next/link";
import SolidLink from "@/layouts/SolidLink";
import DarkLink from "@/components/darklink";

//fetch public notes and display here

let beURL: string | undefined = "";
let portfolioFolderId: string | undefined = "";
let iokeepFeURL: string | undefined = "";

switch (process.env.NODE_ENV) {
  case "development": {
    beURL = process.env.IOKEEP_DEV_LOCAL_BE;
    portfolioFolderId = process.env.PORTFOLIO_FOLDERID_LOCAL;
    iokeepFeURL = process.env.IOKEEP_FE_DEV;
    break;
  }
  case "test": {
    beURL = process.env.IOKEEP_DEV_TEST_BE;
    portfolioFolderId = process.env.PORTFOLIO_FOLDERID;
    iokeepFeURL = process.env.IOKEEP_FE_TEST;

    break;
  }
  case "production":
    {
      beURL = process.env.IOKEEP_PROD_BE;
      portfolioFolderId = process.env.PORTFOLIO_FOLDERID;
      iokeepFeURL = process.env.IOKEEP_FE_PROD;
    }

    break;
  default: {
    beURL = process.env.IOKEEP_DEV_LOCAL_BE;
    portfolioFolderId = process.env.PORTFOLIO_FOLDERID_LOCAL;
    iokeepFeURL = process.env.IOKEEP_FE_DEV;
  }
}

interface NoteItemDataType {
  _id: string;
  folderId: string;
  editorState: string;
  description: Array<string>; // of size 2
  creationDate: string;
  lastModifiedDate: string;
  lastOpenedDate: string;
  isPublic: boolean;
}

function NoteLink(props: { noteData: NoteItemDataType }) {
  const noteCreationDate = new Date(props.noteData.creationDate);
  const noteLastModifiedDate = new Date(props.noteData.lastModifiedDate);

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
  });
  return (
    <SolidLink href={`${iokeepFeURL}/${props.noteData._id}`}>
      {/* href is generated from noteId and iokeep front-end */}
      <div className="flex flex-col gap-2">
        <div>
          <h3 className="text-2xl font-semibold">
            {props.noteData.description.length > 0
              ? props.noteData.description[0]
              : "Note has no title"}
          </h3>
          <DescriptiveP>
            {props.noteData.description.length > 1
              ? props.noteData.description[1]
              : "Note has no description"}
          </DescriptiveP>
        </div>

        <div className={` text-xs flex flex-col gap-1`}>
          {/* {noteCreationDate.getDate()} {noteCreationDate.getMonth()}{" "}
            {noteCreationDate.getFullYear()} */}
          <div>
            <span className="font-semibold">Created </span>
            {dateFormatter.format(noteCreationDate)}
          </div>
          <div>
            <span className="font-semibold">Last modified </span>
            {dateFormatter.format(noteLastModifiedDate)}
          </div>
        </div>
      </div>
    </SolidLink>
  );
}

async function PinnedNotesSection() {
  const portfolioNotesList: Array<NoteItemDataType> = await fetch(
    `${beURL}/notes/?folderId=${portfolioFolderId}`
  ).then((res) => res.json());

  if (process.env.NODE_ENV == "development") {
    console.log(`http://${beURL}/notes/?folderId=${portfolioFolderId}`);
    console.log(portfolioNotesList);
  }

  return (
    <SectionLayout>
      <H1>some thoughts</H1>

      {/* add pin notes feature */}
      {/* list all pinned notes */}
      {portfolioNotesList.map((eachNoteItem) => {
        return <NoteLink key={eachNoteItem._id} noteData={eachNoteItem} />;
      })}
      <div className=" py-4 flex flex-row ">
        <DarkLink href="#">From Iokeep v3 Alpha</DarkLink>
      </div>
    </SectionLayout>
  );
}
export default PinnedNotesSection;
