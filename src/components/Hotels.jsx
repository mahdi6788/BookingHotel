import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading"

function Hotels() {
  /// get states created before
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("options"))?.room;
  /// get inforamtion from database using created useFetch hook
  /// url of server (database)
  const URL = "http://localhost:5000/hotels";
  /// filter from database
  const query = `name_like=${destination || ""}&accommodates_gte=${
    room || 1
  }&host_location_like=${destination || ""}`;
  /// note: if we want to search in all query string, we should use q instead of name or accommodation:
  /// name_like=${destination || ""} ===> q=${destination || ""}
  const { data, isLoading } = useFetch(URL, query);

  return (
    <div className="searchList">
      <h2>Search Results ({data.length})</h2>
      {isLoading && <Loading isLoading={isLoading} />}
      
      {data.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitute}`}
          >
            <div className="searchItem">
              <img src={item.xl_picture_url} alt={item.name} />
              <div className="searchitemDesc">
                <p className="location">{item.smart_location}</p>
                <p className="name">{item.name}</p>
                <p className="price">
                  € {item.price}
                  <span> per night</span>
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Hotels;
