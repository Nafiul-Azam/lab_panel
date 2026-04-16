import { cn } from "../../utils/cn";

interface FilterTabsProps {
  tabs: string[];
  active: string;
  onChange: (value: string) => void;
}

export function FilterTabs({ tabs, active, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold transition",
            active === tab
              ? "bg-clinic-600 text-white"
              : "bg-clinic-50 text-clinic-700",
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
