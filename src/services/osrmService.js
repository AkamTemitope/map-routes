import axios from "axios";

const fetchRoutePolyline = (coordinates) => {
  const osrmUrl = `http://router.project-osrm.org/route/v1/foot/${coordinates}?overview=full&geometries=geojson&continue_straight=false&steps=true&annotations=false`;
  return axios.get(osrmUrl);
};

export default fetchRoutePolyline;
