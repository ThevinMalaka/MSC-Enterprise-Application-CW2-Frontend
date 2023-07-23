import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Container, Typography } from "@mui/material";

import { updateTokenToReducer } from "../../login/actions";
import { getUserLastWeightRequest } from "../actions";
import { getLoggedUserData, userLastWeight } from "../selectors";
import { AppWidgetSummary } from "../../../components/dashboard";
import Iconify from "../../../components/iconify";

const HomeView = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => getLoggedUserData(state));
  const userLastWeightData = useSelector((state) => userLastWeight(state));
  const { weight } = userLastWeightData || { weight: 0 };

  const dispatch = useDispatch();

  const updateToken = useCallback(
    (info) => {
      dispatch(updateTokenToReducer(info));
    },
    [dispatch]
  );

  const getUserLastWeight = useCallback(
    (info) => {
      dispatch(getUserLastWeightRequest(info));
    },
    [dispatch]
  );

  useEffect(() => {
    updateToken();
    getUserLastWeight(userData?.id);
  }, []);

  return (
    <>
      <Container>
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ mb: 5 }}>
            Hi {userData?.name}, Welcome back
          </Typography>
        </Container>

        <Grid container spacing={3} style={{ marginTop: 40, marginBottom: 50 }}>
          <Grid item xs={12} sm={6} md={6}>
            <AppWidgetSummary
              title="User Current Weight"
              total={`${weight || 0} Kg`}
              icon={"ant-design:user-outlined"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <AppWidgetSummary
              title="User Current Height"
              total={`${userData?.height || 0} cm`}
              color="error"
              icon={"ant-design:fire-filled"}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomeView;
