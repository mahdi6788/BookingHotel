import { Outlet } from "react-router-dom"
import { useHotel } from "./HotelsProvider";
import Map from "./Map"

function AppLayout() {
  const { hotels } = useHotel();
    return(
        <div className="appLayout">
            <div className="sidebar">
                <Outlet/>    {/* this is a dynamic part */}
            </div>
            <div className="mapContainer">
                <Map markerLocation={hotels}/>
            </div>
        </div>
    )
}

export default AppLayout