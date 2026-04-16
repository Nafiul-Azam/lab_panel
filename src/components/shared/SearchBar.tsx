import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ placeholder, value, onChange }: SearchBarProps) {
  return (
    <label className="group relative flex items-center gap-2 overflow-hidden rounded-xl border border-clinic-200 bg-white px-3 py-2 transition-all duration-200 focus-within:border-clinic-300 focus-within:shadow-[0_0_0_2px_rgba(77,194,179,0.18),0_10px_30px_-18px_rgba(46,168,154,0.75)]">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 -translate-x-20 bg-gradient-to-r from-transparent via-white/85 to-transparent opacity-0 transition-all duration-700 group-focus-within:translate-x-[1500%] group-focus-within:opacity-100"
      />
      <Search size={16} className="text-clinic-500" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-base outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 md:text-sm"
      />
    </label>
  );
}
