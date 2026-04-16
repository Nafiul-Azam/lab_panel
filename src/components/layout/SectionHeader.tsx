interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-3 flex items-end justify-between">
      <div>
        <h2 className="text-base font-semibold md:text-lg">{title}</h2>
        {subtitle ? (
          <p className="text-xs text-clinic-700 md:text-sm">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}
