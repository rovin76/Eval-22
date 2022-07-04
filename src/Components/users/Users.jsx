import fakeFetch from "../../utils/fakeFetch";
import Pagination from "../common/Pagination";
import Filters from "./Filters";
import UserCard from "./UserCard";
import React, { useState, useEffect } from "react";
function Users() {
  const [data, setData] = useState([]);
  // get Todos

  const getTodos = (fakeFetch) => {
    fetch(`http://localhost:8000/data/`)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  };

  const sortData = ({ type, checked }) => {
    console.log(type, checked);
    if (value === checked) {
      return fetch(`http://localhost:8000/data/?_sort=name&_order=asc`)
        .then((res) => res.json())
        .then((d) => {
          console.log(d);
          setData(d);
        });
    } else {
      return fetch(`http://localhost:8000/data/`)
        .then((res) => res.json())
        .then((d) => {
          console.log(d);
          setData(d);
        });
    }
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

      <Filters sortData={sortData} />
      <Pagination />
    </div>
  );
}

export default Users;
