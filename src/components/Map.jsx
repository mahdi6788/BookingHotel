import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useHotel } from "./HotelsProvider";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Map() {
  const { isLoading, hotels } = useHotel();
  const [mapCenter, setMapCenter] = useState([50, 5]);
  const [searchParams, setSearchParams] = useSearchParams()
  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")

  useEffect(()=>{
  if (lat && lng) setMapCenter([lat, lng])
  }, [lat,lng])

  return (
    <div className="mapContainer">
      <MapContainer
        className="map"
        center={mapCenter}
        zoom={13}
        scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; 
          <a href="https://www.openstreetmap.org/copyright">
          OpenStreetMap
          </a> 
          contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <ChangeCenter position={mapCenter}/>
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
function ChangeCenter({position}){
  const map = useMap();
  map.setView(position);
  return null;
}