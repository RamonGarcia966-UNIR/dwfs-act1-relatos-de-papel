export default function SearchBar({ value, onChange }) {
  return (
    <div className="search__wrap">
      <label className="search__label" htmlFor="book-search">Buscar</label>
      <input
        id="book-search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar por título…"
      />
    </div>
  );
}