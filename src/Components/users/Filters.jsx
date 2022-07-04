import React, { useEffect, useState } from "react";
const Filters = ({ sortData }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(page);
  }, [page]);

  const handleOnChange = (e) => {
    const { value, name, type, checked } = e.target;
    const updateValue = type === "checkbox" ? checked : value;
    sortData(updateValue);
  };
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div>
        <label>
          <input
            data-testid="order-filter"
            type="checkbox"
            name="asc"
            onChange={handleOnChange}
          />
          Ascending
        </label>
      </div>
      <div>
        <label>
          <select
            data-testid="per-page-filter"
            onChange={(e) => setPage(e.target.value)}
          >
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          Per page
        </label>
      </div>
    </div>
  );
};
export default Filters;
