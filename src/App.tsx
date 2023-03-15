import {
  Container,
  CssBaseline,
  Grid,
  Paper,
  styled,
  ThemeProvider,
} from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopRiders } from "./api/getTopRiders";

import { darkTheme, mainTheme } from "./style/theme";

import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setRiders } from "./features/riders/ridersSlice";

function App() {
  const dispatch = useAppDispatch();

  const topRiders = useAppSelector((state) => state.riders.topRiders);
  useEffect(() => {
    const run = async () => {
      getTopRiders().then((result) => dispatch(setRiders(result)));
    };
    run();
  }, []);

  if (topRiders.length === 0) return null;
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Container>
        <ul>
          {topRiders.map((rider) => {
            return (
              <li>
                <p>
                  {rider.rider_name} - {rider.team_name}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </ThemeProvider>
  );
}

export default App;
