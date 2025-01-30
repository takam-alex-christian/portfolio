export default function InfoBox({
  number,
  text,
}: {
  number: number;
  text: string[];
}) {
  return (
    <div className="flex flex-col items-center">
      <p className="flex flex-row justify-start text-5xl md:text-7xl font-bold tracking-wider ">
        +<span>{number}</span>
      </p>
      <div className="flex flex-col text-center">
        <p className="">{text[0]}</p>
        <p className="">{text[1]}</p>
      </div>
    </div>
  );
}
