import L from "leaflet";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { randomColor } from "../helpers";

const Map = () => {
  const mapRef = useRef();
  const selectedRouteId = useSelector((state) => state.routes.selectedRouteId);
  const routesPolyline = useSelector((state) => state.routes.routesPolyline);

  useEffect(() => {
    if (selectedRouteId && routesPolyline[selectedRouteId]) {
      const bounds = L.latLngBounds(routesPolyline[selectedRouteId]);
      mapRef.current.fitBounds(bounds);
    }
  }, [selectedRouteId, routesPolyline]);

  return (
    <MapContainer
      ref={mapRef}
      center={[55.75614484844802, 37.62790398645083]}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Object.keys(routesPolyline).map((key, index) => {
        return (
          <Polyline
            key={key + index}
            positions={routesPolyline[key]}
            weight={7}
            color={randomColor()}
          />
        );
      })}
    </MapContainer>
  );
};

export default Map;
