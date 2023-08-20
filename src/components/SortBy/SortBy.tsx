interface SortDropdownProps {
  sortOption: string;
  handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SortBy: React.FC<SortDropdownProps> = ({
  sortOption,
  handleSortChange,
}) => {
  return (
    <div>
      <b>Sort by </b>
      <select
        data-testid="sort-data"
        onChange={handleSortChange}
        value={sortOption}
      >
        <option>Select</option>
        <option value="price-low-high">Price (low-high)</option>
        <option value="price-high-low">Price (high-low)</option>
      </select>
    </div>
  );
};
