export function SectionContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`container mx-auto px-4 lg:px-10 ${className}`}>
      {children}
    </section>
  );
}