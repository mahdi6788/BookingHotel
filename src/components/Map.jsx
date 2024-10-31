import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useHotel } from "./HotelsProvider";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useGeoLocation from "../hooks/useGeoLocation";

function Map() {
  const { isLoading, hotels } = useHotel();
  const [mapCenter, setMapCenter] = useState([36.2152, 57.6678]);
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const {
    isLoading: isLoadingPosition, /// there was state with the same name isLoading so we should change this name
    position: GLPosition, /// there was state with the same name position so we should change this name
    error,
    getPosition,
  } = useGeoLocation();

  useEffect(() => {
    if (lat && lng) setMapCenter([lat, lng]);
  }, [lat, lng]);

  useEffect(()=>{
    if(GLPosition?.lat && GLPosition?.lng)
      setMapCenter([GLPosition.lat, GLPosition.lng])
  },
  [GLPosition])

  return (
    <div className="mapContainer">
      <MapContainer
        className="map"
        center={mapCenter}
        zoom={13}
        scrollWheelZoom={true}
      >
        {/* /// take location of user */}
        <button onClick={getPosition} className="getLocation">
          {isLoadingPosition ? "Loading..." : "My Location"}
          </button>
        <TileLayer
          attribution='&copy; 
          <a href="https://www.openstreetmap.org/copyright">
          OpenStreetMap
          </a> 
          contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <ChangeCenter position={mapCenter} />
        {/* info based on the hotels */}
        {hotels.map((item) => (
          <Marker key={item.id} position={[item.latitude, item.longitude]}>
            <Popup>
              {/* <img style={{width:"200px"}} src={item.xl_picture_url} alt={item.price} /> */}
              € {item.price}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;

/// point to each location on map
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
