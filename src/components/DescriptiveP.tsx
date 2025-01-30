export default function Descript({ children }: { children: string }) {
  return (
    <p className="text-base md:text-lg font-medium max-w-[480px]">{children}</p>
  );
}
