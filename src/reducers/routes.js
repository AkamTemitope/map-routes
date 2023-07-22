import { createSlice } from "@reduxjs/toolkit";

import { routesData, columns } from "../constants";

const initialState = {
  selectedRouteId: null,
  columns: columns,
  routesData: routesData,
  routesPolyline: {},
  isLoading: false,
  error: null
};

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    selectRoute: (state, action) => {
      state.selectedRouteId = action.payload;
    },
    fetchRoute: (state) => {
      state.isLoading = true;
    },
    fetchRouteSuccess: (state, action) => {
      const payload = action.payload;
      state.routesPolyline = {
        ...state.routesPolyline,
        [payload.id]: payload.polyline
      };
      state.isLoading = false;
    },
    fetchRouteError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const { selectRoute, fetchRoute, fetchRouteSuccess, fetchRouteError } =
  routesSlice.actions;

export default routesSlice.reducer;
