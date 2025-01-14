export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="pt-28">{children}</section>;
}
