import { call, put } from "redux-saga/effects";

import fetchRoutePolyline from "../../services/osrmService";
import { fetchRouteError, fetchRouteSuccess } from "../../reducers/routes";

function* fetchRoutePolylineSaga(action) {
  try {
    const coordinates = action.payload.coordinates;
    const response = yield call(fetchRoutePolyline, coordinates);
    const geometry = response.data.routes[0].geometry;
    const polyline = geometry.coordinates;
    yield put(fetchRouteSuccess({ id: action.payload.id, polyline }));
  } catch (error) {
    yield put(fetchRouteError(error.message));
  }
}

export default fetchRoutePolylineSaga;
