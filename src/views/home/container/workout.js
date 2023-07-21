import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, Grid, Container } from "@mui/material";

import {
  getWorkoutPlanListRequest,
  getUserEnrolledWorkoutPlanRequest,
} from "../actions";
import {
  getWorkoutPlanList,
  getLoggedUserData,
  userEnrolledWorkoutPlanData,
} from "../selectors";
import { SelectWorkoutPlanCard } from "../../../components/dashboard";
import { updateTokenToReducer } from "../../login/actions";

const WorkoutView = () => {
  const navigate = useNavigate();
  const workoutPlans = useSelector((state) => getWorkoutPlanList(state));
  const userData = useSelector((state) => getLoggedUserData(state));
  const enrolledWorkoutPlan = useSelector((state) =>
    userEnrolledWorkoutPlanData(state)
  );

  const [selectedPlan, setSelectedPlan] = useState(3);

  const dispatch = useDispatch();

  const updateToken = useCallback(
    (info) => {
      dispatch(updateTokenToReducer(info));
    },
    [dispatch]
  );

  useEffect(() => {
    updateToken();
  }, []);

  const getWrokoutPlanList = useCallback(
    (info) => {
      dispatch(getWorkoutPlanListRequest(info));
    },
    [dispatch]
  );

  const getUserEnrolledWorkoutPlan = useCallback(
    (info) => {
      dispatch(getUserEnrolledWorkoutPlanRequest(info));
    },
    [dispatch]
  );

  useEffect(() => {
    getWrokoutPlanList();
    getUserEnrolledWorkoutPlan(userData?.id);
  }, []);

  const checkUserAlreadyEnrolled = (id) => {
    const isEnrolled = enrolledWorkoutPlan?.find(
      (item) => item.workoutPlanId == id
    );
    return isEnrolled;
  };

  return (
    <Container>
      <div>
        <Typography variant="h5" gutterBottom>
          Workout Page
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <SelectWorkoutPlanCard
              selectedPlan={selectedPlan}
              onItemClick={(id, name) => {
                if (checkUserAlreadyEnrolled(id)) {
                  navigate(`/active-workout/${id}`);
                } else {
                  navigate(`/workout/${id}`);
                }
              }}
              style={{ cursor: "pointer" }}
              title="Workout Plans"
              list={workoutPlans}
              checkUserAlreadyEnrolled={checkUserAlreadyEnrolled}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default WorkoutView;
