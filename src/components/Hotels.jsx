import { Link } from "react-router-dom";
import Loading from "./Loading"
import { useHotel } from "./HotelsProvider";

function Hotels() {
 const { hotels, isLoading } = useHotel()

  return (
    <div className="searchList">
      <h2>Search Results ({hotels.length})</h2>
      {isLoading && <Loading isLoading={isLoading} />}
      
      {hotels.map((item) => {
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
