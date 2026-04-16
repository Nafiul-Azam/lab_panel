import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ placeholder, value, onChange }: SearchBarProps) {
  return (
    <label className="flex items-center gap-2 rounded-xl border border-clinic-200 bg-white px-3 py-2">
      <Search size={16} className="text-clinic-500" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-base outline-none md:text-sm"
      />
    </label>
  );
}
