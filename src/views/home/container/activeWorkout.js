import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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

import { getWorkoutPlanDetailsRequest } from "../actions";
import {
  getWorkoutPlanDetails,
  userEnrolledWorkoutPlanData,
} from "../selectors";
import { WorkoutDayCard } from "../../../components/dashboard";
import workoutImage from "../../../assets/images/background/workout-img-1.jpg";

const ActiveWorkoutView = () => {
  // get the workout id from the url
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const workoutPlanDetails = useSelector((state) =>
    getWorkoutPlanDetails(state)
  );

  const enrolledWorkoutData = useSelector((state) =>
    userEnrolledWorkoutPlanData(state)
  );

  const getWorkoutDetails = useCallback(
    (info) => {
      dispatch(getWorkoutPlanDetailsRequest(info));
    },
    [dispatch]
  );

  useEffect(() => {
    getWorkoutDetails(id);
  }, [id]);

  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  const handleCompleteWorkout = (day) => {
    setCompletedWorkouts([...completedWorkouts, day]);
  };

  const getDaysArray = () => {
    const completedDays = enrolledWorkoutData[0]?.completedDays || 0;
    const daysArray = [];
    for (let i = 1; i <= workoutPlanDetails?.duration; i++) {
      daysArray.push({
        id: i,
        name: `Day ${i}`,
        status: i <= completedDays ? "completed" : "pending",
      });
    }

    return daysArray;
  };

  return (
    <Container>
      <div>
        <Typography variant="h5" gutterBottom>
          Active Workout Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  Workout Name: {workoutPlanDetails?.name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Difficulty: {workoutPlanDetails?.difficulty}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Duration: {workoutPlanDetails?.duration}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Notes: {workoutPlanDetails?.description}
                </Typography>

                <Typography variant="h6" gutterBottom>
                  Exercises
                </Typography>
                <List>
                  {workoutPlanDetails?.workoutPlanItems &&
                    workoutPlanDetails.workoutPlanItems.map((exercise) => (
                      <ListItem key={exercise.id}>
                        <ListItemText
                          primary={exercise?.workout.name}
                          secondary={`Sets: ${exercise?.sets}, Reps: ${exercise?.reps}, MET: ${exercise?.workout.met}`}
                        />
                      </ListItem>
                    ))}
                </List>
                <img
                  src={workoutImage}
                  alt="workout"
                  width="100%"
                  style={{ marginTop: 30 }}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <WorkoutDayCard
              onItemClick={(id, name) => {
                navigate(`/selected-day/${id}`);
              }}
              style={{ cursor: "pointer" }}
              title="Pick the day and complete the workout"
              list={getDaysArray()}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default ActiveWorkoutView;
