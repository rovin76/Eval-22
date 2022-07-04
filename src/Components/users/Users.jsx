import fakeFetch from "../../utils/fakeFetch";
import Pagination from "../common/Pagination";
import Filters from "./Filters";
import UserCard from "./UserCard";

function Users() {
  const [data, setData] = useState([]);
  // get Todos

  const getTodos = () => {
    fetch("fakeFetch")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);
  console.log(data);
  return (
    <div>
      <div data-testid="loading-indicator">...loading</div>
      <div data-testid="error-indicator">Error: Something went wrong</div>
      <UserCard />
      <Filters />
      <Pagination />
    </div>
  );
}

export default Users;
