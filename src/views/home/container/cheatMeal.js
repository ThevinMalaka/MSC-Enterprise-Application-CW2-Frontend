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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { addCheatMealRequest, getCheatMealListRequest } from "../actions";
import { cheatMealList, getLoggedUserData } from "../selectors";

const CheatMealPage = () => {
  const dispatch = useDispatch();
  const [cheatMeal, setCheatMeal] = useState("");
  const [mealType, setMealType] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");
  const [cheatMeals, setCheatMeals] = useState([]);

  const cheatMealListData = useSelector((state) => cheatMealList(state));

  const userData = useSelector((state) => getLoggedUserData(state));

  const addCheatMeal = useCallback(
    (info) => {
      dispatch(addCheatMealRequest(info));
    },
    [dispatch]
  );

  const getCheatMealList = useCallback(
    (info) => {
      dispatch(getCheatMealListRequest(info));
    },
    [dispatch]
  );

  const handleCheatMealChange = (event) => {
    setCheatMeal(event.target.value);
  };

  const handleMealTypeChange = (event) => {
    setMealType(event.target.value);
  };

  const handleCaloriesChange = (event) => {
    setCalories(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAddCheatMeal = () => {
    if (
      cheatMeal.trim() !== "" &&
      mealType !== "" &&
      calories !== "" &&
      date !== ""
    ) {
      // convert date to 2023-07-13 00:00:00.000000 format
      const dateObj = new Date(date);
      addCheatMeal({
        name: cheatMeal,
        type: mealType,
        calories,
        date: dateObj,
        userId: userData.id,
        description: "",
      });
      setCheatMeal("");
      setMealType("");
      setCalories("");
      setDate("");
    }
  };

  useEffect(() => {
    if (cheatMealListData) {
      setCheatMeals(cheatMealListData);
    }
  }, [cheatMealListData]);

  useEffect(() => {
    getCheatMealList(userData.id);
  }, [getCheatMealList, userData.id]);

  return (
    <Container>
      <div>
        <Typography variant="h5" gutterBottom>
          Cheat Meal Tracker
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Add Cheat Meal
                </Typography>
                <TextField
                  label="Enter cheat meal"
                  variant="outlined"
                  value={cheatMeal}
                  style={{ marginRight: 10 }}
                  onChange={handleCheatMealChange}
                />
                <FormControl variant="outlined" style={{ minWidth: 200 }}>
                  <InputLabel id="meal-type-label">Meal Type</InputLabel>
                  <Select
                    labelId="meal-type-label"
                    id="meal-type"
                    value={mealType}
                    style={{ marginRight: 10 }}
                    onChange={handleMealTypeChange}
                    label="Meal Type"
                  >
                    <MenuItem value="Breakfast">Breakfast</MenuItem>
                    <MenuItem value="Lunch">Lunch</MenuItem>
                    <MenuItem value="Dinner">Dinner</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Calories"
                  variant="outlined"
                  value={calories}
                  style={{ marginRight: 10 }}
                  onChange={handleCaloriesChange}
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
                  Cheat Meal History
                </Typography>
                {cheatMeals.length === 0 ? (
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell> No cheat meals recorded</TableCell>
                        </TableRow>
                      </TableHead>
                    </Table>
                  </TableContainer>
                ) : (
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Type</TableCell>
                          <TableCell>Calories</TableCell>
                          <TableCell>Date</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cheatMeals &&
                          cheatMeals.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell>{row.type}</TableCell>
                              <TableCell>{row.calories}</TableCell>
                              <TableCell>{row.date?.split("T")[0]}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default CheatMealPage;
