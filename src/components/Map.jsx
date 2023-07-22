import L from "leaflet";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  CircleMarker,
  Popup,
  LayerGroup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { randomColor } from "../helpers";
import startIcon from "/marker-start.png";
import endIcon from "/marker-end.png";

const customIcon = (url) =>
  L.icon({
    iconUrl: url,
    iconSize: [32, 32],
  });

const Map = () => {
  const mapRef = useRef();
  const selectedRouteId = useSelector((state) => state.routes.selectedRouteId);
  const routesPolyline = useSelector((state) => state.routes.routesPolyline);

  const mapMarkers = (markers) =>
    markers.map((latLng, i) => (
      <CircleMarker
        key={latLng[0] + i}
        center={latLng}
        radius={5}
        fillColor={randomColor()}
      />
    ));
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
          <LayerGroup key={key + index}>
            <Polyline
              positions={routesPolyline[key]}
              weight={7}
              color={randomColor()}
            />
            {selectedRouteId === key ? (
              <>
                <Marker
                  position={routesPolyline[key][0]}
                  icon={customIcon(startIcon)}
                >
                  <Popup>Start Destination</Popup>
                </Marker>
                <Marker
                  position={routesPolyline[key][routesPolyline[key].length - 1]}
                  icon={customIcon(endIcon)}
                >
                  <Popup>End Destination</Popup>
                </Marker>
                {mapMarkers(routesPolyline[key])}
              </>
            ) : null}
          </LayerGroup>
        );
      })}
    </MapContainer>
  );
};

export default Map;
