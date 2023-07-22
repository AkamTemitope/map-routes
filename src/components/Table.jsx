import { Table } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCoordinates } from "../helpers";
import { fetchRoute, selectRoute } from "../reducers/routes";

const RoutesTable = () => {
  const dispatch = useDispatch();
  const selectedRouteId = useSelector((state) => state.routes.selectedRouteId);
  const columns = useSelector((state) => state.routes.columns);
  const routesData = useSelector((state) => state.routes.routesData);

  useEffect(() => {
    routesData.map((route) => {
      const coordinates = getCoordinates(route);
      dispatch(fetchRoute({ id: route.id, coordinates }));
    });
  }, [dispatch, routesData]);

  return (
    <Table
      dataSource={routesData}
      columns={columns}
      rowKey="route"
      scroll={{ x: 600 }}
      onRow={(record) => ({
        onClick: () => dispatch(selectRoute(record.id))
      })}
      rowClassName={(record) =>
        record.id === selectedRouteId ? "selected" : ""
      }
    />
  );
};

export default RoutesTable;
