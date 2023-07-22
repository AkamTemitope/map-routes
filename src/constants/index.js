export const routesData = [
  {
    id: "route1",
    route: "Маршрут №1",
    point1: "59.84660399, 30.29496392",
    point2: "59.82934196, 30.42423701",
    point3: "59.83567701, 30.18064206"
  },
  {
    id: "route2",
    route: "Маршрут №2",
    point1: "59.82934196, 30.42423701",
    point2: "59.82761295, 30.41705607",
    point3: "59.84660399, 30.59496392"
  },
  {
    id: "route3",
    route: "Маршрут №3",
    point1: "59.83567701, 30.38064206",
    point2: "59.84660399, 30.29496392",
    point3: "59.82761295, 30.41705607"
  },
  {
    id: "route4",
    route: "Маршрут №4",
    point1: "59.046603, 30.094963",
    point2: "59.029341, 30.024237",
    point3: "59.035677, 30.080642"
  },
  {
    id: "route5",
    route: "Маршрут №5",
    point1: "59.02934, 30.92423",
    point2: "59.02761, 30.91705",
    point3: "59.04660, 30.99496"
  }
];

export const columns = [
  {
    title: "Маршрут",
    dataIndex: "route",
    width: 150,
    key: "route"
  },
  {
    title: "Точка 1 (lat, lng)",
    dataIndex: "point1",
    key: "point1"
  },
  {
    title: "Точка 2 (lat, lng)",
    dataIndex: "point2",
    key: "point2"
  },
  {
    title: "Точка 3 (lat, lng)",
    dataIndex: "point3",
    key: "point3"
  }
];
