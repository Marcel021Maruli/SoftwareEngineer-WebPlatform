import { SearchFieldStyle } from "./search.styled";

const Search = ({ placeholder, onChange, onSubmit, ...attributes }) => {
  return (
    <div data-testid="Search-testid" {...attributes}>
      <div className={SearchFieldStyle}>
        <div className="Search">
          <form onSubmit={onSubmit}>
            <input
              className="Search-input"
              onChange={(e) => onChange(e?.target?.value)}
              placeholder={placeholder}
            />
            <button
              className="Search-button button-mobile--small u-search-bg"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
