import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import rootSaga from "./sagas";
import routesReducer from "./reducers/routes";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    routes: routesReducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
