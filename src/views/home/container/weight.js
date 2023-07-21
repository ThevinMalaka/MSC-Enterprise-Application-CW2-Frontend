import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";

import { addWeightRequest, getWeightListRequest } from "../actions";
import { userWeightList, getLoggedUserData } from "../selectors";

const WeightPage = () => {
  const dispatch = useDispatch();

  const [weight, setWeight] = useState("");
  const [date, setDate] = useState("");
  const [weightList, setWeightList] = useState([]);

  const weightListData = useSelector((state) => userWeightList(state));
  const userData = useSelector((state) => getLoggedUserData(state));

  const addWeight = useCallback(
    (info) => {
      dispatch(addWeightRequest(info));
    },
    [dispatch]
  );

  const getWeightList = useCallback(
    (info) => {
      dispatch(getWeightListRequest(info));
    },
    [dispatch]
  );

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAddCheatMeal = () => {
    if (weight !== "" && date !== "") {
      addWeight({
        weight,
        date,
        userId: userData.id,
      });
    }
  };

  useEffect(() => {
    getWeightList();
  }, []);

  useEffect(() => {
    setWeightList(weightListData);
  }, [weightListData]);

  return (
    <Container>
      <div>
        <Typography variant="h5" gutterBottom>
          Weight Tracker
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Add Weight
                </Typography>
                <TextField
                  label="Enter Weight"
                  variant="outlined"
                  value={weight}
                  style={{ marginRight: 10 }}
                  onChange={handleWeightChange}
                />
                <TextField
                  label="Date"
                  variant="outlined"
                  style={{ marginRight: 10 }}
                  value={date}
                  onChange={handleDateChange}
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    width: 150,
                    height: 40,
                    marginTop: 7,
                    marginLeft: 10,
                  }}
                  onClick={handleAddCheatMeal}
                >
                  Add
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Weight History
                </Typography>
                {weightList.length === 0 ? (
                  <Typography variant="subtitle1" gutterBottom>
                    No weight recorded
                  </Typography>
                ) : (
                  <List>
                    {weightList &&
                      weightList.map((meal, index) => (
                        <ListItem key={index}>
                          <ListItemText
                            primary={meal.meal}
                            secondary={`Type: ${meal.type}, Calories: ${meal.calories}, Date: ${meal.date}`}
                          />
                        </ListItem>
                      ))}
                  </List>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default WeightPage;
