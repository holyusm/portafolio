export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:px-8 md:grid-cols-[11rem_1fr] md:gap-10 md:py-20"
    >
      <h2 className="display text-2xl md:sticky md:top-20 md:self-start">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
