import SectionLayout from "@/layouts/SectionLayout";
import H1 from "@/components/H1";
import DescriptiveP from "@/components/DescriptiveP";
import Link from "next/link";

//fetch public notes and display here

let beURL: string | undefined = "";

switch (process.env.NODE_ENV) {
  case "development":
    beURL = process.env.IOKEEP_DEV_LOCAL_BE;
    break;
  case "test":
    beURL = process.env.IOKEEP_DEV_TEST_BE;
    break;
  case "production":
    beURL = process.env.IOKEEP_PROD_BE;
    break;
  default:
    beURL = process.env.IOKEEP_DEV_LOCAL_BE;
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
  return (
    <Link href={""}>
      {/* href is generated from noteId and iokeep front-end */}
      <div>
        <h1>
          {props.noteData.description.length > 0
            ? props.noteData.description[0]
            : "Note has no title"}
        </h1>
        <DescriptiveP>
          {props.noteData.description.length > 1
            ? props.noteData.description[1]
            : "Note has no description"}
        </DescriptiveP>
      </div>
    </Link>
  );
}

async function PinnedNotesSection() {
  const portfolioNotesList: Array<NoteItemDataType> = await fetch(
    `http://${beURL}/notes/?folderId=${process.env.PORTFOLIO_FOLDERID_LOCAL}`
  ).then((res) => res.json());

  console.log(
    `http://${beURL}/notes?folderId=${process.env.PORTFOLIO_FOLDERID_LOCAL}`
  );
  console.log(portfolioNotesList);

  return (
    <SectionLayout>
      <H1>some thoughts</H1>
      {/* add pin notes feature */}
      {/* list all pinned notes */}
      <DescriptiveP> Coming soon !</DescriptiveP>
      {portfolioNotesList.map((eachNoteItem) => {
        return <NoteLink key={eachNoteItem._id} noteData={eachNoteItem} />;
      })}
    </SectionLayout>
  );
}
export default PinnedNotesSection;
