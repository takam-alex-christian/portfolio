export default function H1({ children }: { children: string }) {
  const words = children.split(" ");
  return (
    <h1 className="text-8xl font-extrabold tracking-normal uppercase">
      {words.map((eachWord, index) => {
        return index != words.length - 1 ? (
          <span key={index}> {eachWord}</span>
        ) : (
          " "
        );
      })}
      <span className="text-[#3C393A]">{words[words.length - 1]}</span>
    </h1>
  );
}
