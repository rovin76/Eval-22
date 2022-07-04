import React, { useEffect, useState } from "react";
const Filters = ({ sortData, setLimit, setSort }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
    setLimit(count);
  }, [count]);

  const handleOnChange = (e) => {
    const { type, checked } = e.target;
    if (type === "checkbox" && checked) {
      setSort("asc");
    }
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
            onChange={(e) => setCount(e.target.value)}
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
