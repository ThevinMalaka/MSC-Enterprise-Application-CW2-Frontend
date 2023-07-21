import React, { useState, useCallback } from "react";
import { Typography, Grid, Card, CardContent, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { userPredictionData } from "../selectors";

const PredictionPage = () => {
  const predictionData = useSelector((state) => userPredictionData(state));

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
                {predictionData &&
                  predictionData.length > 0 &&
                  predictionData.map((item) => {
                    return (
                      <Typography variant="subtitle2" gutterBottom>
                        Date: {item.date} - Weight: {item.weight} kg
                      </Typography>
                    );
                  })}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default PredictionPage;
