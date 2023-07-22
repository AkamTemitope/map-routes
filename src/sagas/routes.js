import { takeEvery } from "redux-saga/effects";

import { fetchRoute } from "../reducers/routes";
import fetchRoutePolylineSaga from "./handler/fetchRoutePolyline";

export function* watchFetchRoutePolyline() {
  yield takeEvery(fetchRoute().type, fetchRoutePolylineSaga);
}
