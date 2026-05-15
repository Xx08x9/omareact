type Props = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  return (
    <input
      type="text"
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search..."
    />
  );
}