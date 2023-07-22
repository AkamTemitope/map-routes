import { all } from "redux-saga/effects";

import { watchFetchRoutePolyline } from "./routes";

export default function* rootSaga() {
  yield all([watchFetchRoutePolyline()]);
}
