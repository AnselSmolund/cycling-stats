import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Rider {
  nationality: string;
  points: number;
  prev_rank: number;
  rank: number;
  rider_name: string;
  rider_url: string;
  team_name: string;
  team_url: string;
}

const initialState: { topRiders: Rider[] } = {
  topRiders: [],
};

const ridersSlice = createSlice({
  name: "riders",
  initialState,
  reducers: {
    setRiders(state, action: PayloadAction<Rider[]>) {
      console.log(action.payload);
      state.topRiders = action.payload;
    },
  },
});

export const { setRiders } = ridersSlice.actions;
export default ridersSlice.reducer;
