import { Search, X } from "lucide-react";

interface SearchBarProps {
  query: string;
  onChange: (value: string) => void;
}

export function SearchBar({ query, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
      <label htmlFor="blog-search" className="sr-only">
        Search blog posts
      </label>
      <input
        id="blog-search"
        type="search"
        value={query}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by title or content"
        className="h-11 w-full rounded-lg border bg-background pl-9 pr-10 text-sm outline-none transition-colors focus-visible:border-primary"
      />
      {query && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-0.5 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
