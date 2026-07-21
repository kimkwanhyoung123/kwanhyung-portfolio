interface SectionTitleProps {
  number?: string;
  title: string;
}

export default function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <h2 className="flex items-center gap-3 text-xl font-semibold text-foreground sm:text-2xl">
      {number ? (
        <span className="font-mono text-base text-accent sm:text-lg">
          {number}.
        </span>
      ) : null}
      {title}
      <span aria-hidden className="h-px flex-1 bg-border" />
    </h2>
  );
}
