import fakeFetch from "../../utils/fakeFetch";
import Pagination from "../common/Pagination";
import Filters from "./Filters";
import UserCard from "./UserCard";
import React, { useState, useEffect } from "react";
function Users({ data }) {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(10);

  return (
    <div>
      <div data-testid="loading-indicator">...loading</div>
      <div data-testid="error-indicator">Error: Something went wrong</div>
      {data.map((item) => (
        <UserCard name={item.name} />
      ))}

      {/* <Filters sortData={sortData} setLimit={setLimit} setSort={setSort}/>
       */}
      <Pagination data={data} total={total} />
    </div>
  );
}

export default Users;
