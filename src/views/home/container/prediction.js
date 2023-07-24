import React, { useEffect, useCallback } from "react";
import { Typography, Grid, Card, CardContent, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import {
  userPredictionData,
  getLoggedUserData,
  userLastWeight,
} from "../selectors";
import { getUserPredictionDataRequest } from "../actions";

const PredictionPage = () => {
  const predictionData = useSelector((state) => userPredictionData(state));
  const userData = useSelector((state) => getLoggedUserData(state));
  const userLastWeightData = useSelector((state) => userLastWeight(state));

  const dispatch = useDispatch();

  const getUserPredictionData = useCallback(
    (info) => {
      dispatch(getUserPredictionDataRequest(info));
    },
    [dispatch]
  );

  useEffect(() => {
    getUserPredictionData(userData.id);
  }, []);

  return (
    <Container>
      <div>
        <Grid container spacing={2} style={{ marginTop: 60 }}>
          <Grid item xs={12} md={12} lg={3}></Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Card>
              <CardContent>
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ marginBottom: 20 }}
                >
                  Prediction Result
                </Typography>
                {predictionData?.weight == "" && (
                  <Typography gutterBottom>
                    No Prediction Data Found!
                  </Typography>
                )}
                {predictionData && predictionData?.weight != "" && (
                  <Typography gutterBottom>
                    Predicted Date: {predictionData.date.split("T")[0]} <br />
                    Predicted Weight:{" "}
                    {Math.round(predictionData.weight * 100) / 100} kg
                    <br />
                    Current Weight: {userLastWeightData?.weight} kg
                    <br />
                    Weight Difference:{" "}
                    {Math.round(
                      (predictionData.weight - userLastWeightData?.weight) * 100
                    ) / 100}{" "}
                    kg
                  </Typography>
                )}
                {/* {predictionData &&
                  predictionData.length > 0 &&
                  predictionData.map((item) => {
                    return (
                      <Typography gutterBottom>
                        Predicted Date: {predictionData.date.split("T")[0]} <br />
                        Predicted Weight: {Math.round(predictionData.weight * 100) /
                          100}{" "}
                        kg
                        <br />
                        Current Weight: {userLastWeightData?.weight} kg
                        <br />
                        Weight Difference:{" "}
                        {Math.round(
                          (predictionData.weight - userLastWeightData?.weight) * 100
                        ) / 100}{" "}
                        kg
                      </Typography>
                    );
                  })} */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default PredictionPage;
