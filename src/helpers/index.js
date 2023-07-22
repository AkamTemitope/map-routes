export const getCoordinates = ({ point1, point2, point3 }) => {
  const coordinates = point1
    .concat(";", point2, ";", point3)
    .replace(/\s/g, "");

  return coordinates;
};

export const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const color = "rgb(" + r + " ," + g + "," + b + ")";

  return color;
};
