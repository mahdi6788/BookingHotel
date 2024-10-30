import { Outlet } from "react-router-dom"

function AppLayout() {
    return(
        <div className="appLayout">
            <div className="sidebar">
                <Outlet/>    {/* this is a dynamic part */}
            </div>
            <div className="mapContainer">Map</div>
        </div>
    )
}

export default AppLayout