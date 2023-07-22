import { useSelector } from "react-redux";

import "./App.scss";
import Map from "./components/Map";
import Error from "./components/Error";
import Loading from "./components/Loading";
import RoutesTable from "./components/Table";

const App = () => {
  const isLoading = useSelector((state) => state.routes.isLoading);
  const error = useSelector((state) => state.routes.error);

  return (
    <div className="app">
      <div className="left-panel">
        <RoutesTable />
      </div>
      <div className="right-panel">
        <Map />
        {isLoading && <Loading />}
        {error && <Error />}
      </div>
    </div>
  );
};

export default App;
