const Filters = ({ sortData }) => {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div>
        <label>
          <input
            data-testid="order-filter"
            type="checkbox"
            onChange={(e) => sortData(e.target.value)}
          />
          Ascending
        </label>
      </div>
      <div>
        <label>
          <select data-testid="per-page-filter"></select>
          Per page
        </label>
      </div>
    </div>
  );
};
export default Filters;
