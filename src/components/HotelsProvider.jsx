import { useContext } from "react";
import { createContext } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const HotelContext = createContext();

function HotelsProvider({ children }) {
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
  const { data: hotels, isLoading } = useFetch(URL, query);

  return (
    <HotelContext.Provider value={{ hotels, isLoading }}>
      {children}
    </HotelContext.Provider>
  );
}

export default HotelsProvider;

export function useHotel() {
  return useContext(HotelContext);
}
