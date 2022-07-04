import fakeFetch from "../../utils/fakeFetch";
import Pagination from "../common/Pagination";
import Filters from "./Filters";
import UserCard from "./UserCard";
import React, { useState, useEffect } from "react";
function Users() {
  const [data, setData] = useState([]);
  // get Todos

  const getTodos = () => {
    fetch(`http://localhost:8000/data/`)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  };

  // pagination

  const paginationData = (page) => {
    fetch(`http://localhost:8000/data/?_page=${page}`)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  };

  const sortData = ({ asc }) => {
    console.log(asc);
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <div data-testid="loading-indicator">...loading</div>
      <div data-testid="error-indicator">Error: Something went wrong</div>
      {data.map((item) => (
        <UserCard name={item.name} />
      ))}

      <Filters sortData={sortData} paginationData={paginationData} />
      <Pagination />
    </div>
  );
}

export default Users;
