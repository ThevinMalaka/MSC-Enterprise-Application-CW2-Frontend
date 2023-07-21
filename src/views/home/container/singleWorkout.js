import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { useParams } from "react-router-dom";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";

import {
  workoutPlanEnrollRequest,
  getWorkoutPlanDetailsRequest,
} from "../actions";
import {
  getLoggedUserData,
  getWorkoutPlanDetails,
  getWorkoutPlanEnroll,
  userEnrolledWorkoutPlanData,
} from "../selectors";
import workoutImage from "../../../assets/images/background/workout-img-1.jpg";

const SingleWorkoutView = () => {
  // get the workout id from the url
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => getLoggedUserData(state));

  const enrollWorkoutPlan = useCallback(
    (info) => {
      dispatch(workoutPlanEnrollRequest(info));
    },
    [dispatch]
  );

  const getWorkoutDetails = useCallback(
    (info) => {
      dispatch(getWorkoutPlanDetailsRequest(info));
    },
    [dispatch]
  );

  const workoutPlanDetails = useSelector((state) =>
    getWorkoutPlanDetails(state)
  );

  const workoutPlanEnroll = useSelector((state) => getWorkoutPlanEnroll(state));
  const enrolledWorkoutPlan = useSelector((state) =>
    userEnrolledWorkoutPlanData(state)
  );

  useEffect(() => {
    getWorkoutDetails(id);
  }, [id]);

  useEffect(() => {
    if (workoutPlanEnroll) {
      navigate("/workout");
    }
  }, [workoutPlanEnroll]);

  const checkUserAlreadyEnrolled = (id) => {
    if (enrolledWorkoutPlan && enrolledWorkoutPlan?.length == 0) return true;
    const isEnrolled = enrolledWorkoutPlan?.find((item) => item.id == id);
    return isEnrolled;
  };

  return (
    <Container>
      <div>
        <Typography variant="h5" gutterBottom>
          Workout Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={6}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  Workout Name: {workoutPlanDetails?.name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Description: {workoutPlanDetails?.description}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Duration: {workoutPlanDetails?.duration}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Exercises:
                </Typography>
                <List>
                  {workoutPlanDetails?.workoutPlanItems &&
                    workoutPlanDetails?.workoutPlanItems.map(
                      (exercise, index) => (
                        <ListItem key={index}>
                          <ListItemText
                            primary={exercise?.workout.name}
                            secondary={`Sets: ${exercise.sets}, Reps: ${exercise.reps}`}
                          />
                        </ListItem>
                      )
                    )}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Card>
              <CardContent>
                <img src={workoutImage} alt="workout" width="100%" />

                {checkUserAlreadyEnrolled(id) && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12} mt={3}>
                      <LoadingButton
                        fullWidth
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          enrollWorkoutPlan({
                            workoutPlanId: id,
                            userId: userData.id,
                          });
                        }}
                      >
                        Enroll Now
                      </LoadingButton>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <LoadingButton
                        fullWidth
                        size="large"
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          navigate("/workout");
                        }}
                      >
                        Go back
                      </LoadingButton>
                    </Grid>
                  </Grid>
                )}
                {!checkUserAlreadyEnrolled(id) && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12} mt={3}>
                      <Typography variant="h6" gutterBottom>
                        You have already enrolled another workout plan.
                      </Typography>
                    </Grid>
                  </Grid>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default SingleWorkoutView;
