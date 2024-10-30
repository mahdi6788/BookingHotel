import { useHotel } from "./HotelsProvider"

function Map() {
    const (isLoading, hotels) = useHotel()
    return(
        <div className="mapContainer">Map</div>
    )
}

export default Map