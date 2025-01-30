export default function H1({ children }: { children: string }) {
  const words = children.split(" ");
  return (
    <h1 className="md:text-7xl lg:text-8xl text-5xl font-extrabold w-full tracking-normal uppercase">
      <div>
        {words.map((eachWord, index) => {
          return index != words.length - 1 ? (
            <span key={index}> {eachWord}</span>
          ) : (
            " "
          );
        })}
      </div>
      <div>
        <span className="text-[#3C393A]">{words[words.length - 1]}</span>
      </div>
    </h1>
  );
}
