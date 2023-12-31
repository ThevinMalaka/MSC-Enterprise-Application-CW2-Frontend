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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
      // convert date to 2023-07-13 00:00:00.000000 format
      const dateObj = new Date(date);
      addWeight({
        weight,
        date: dateObj,
        userId: userData.id,
      });
    }
  };

  useEffect(() => {
    getWeightList(userData.id);
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
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell> No weight recorded</TableCell>
                        </TableRow>
                      </TableHead>
                    </Table>
                  </TableContainer>
                ) : (
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Date</TableCell>
                          <TableCell>Weight</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {weightList &&
                          weightList.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell>{row.date?.split("T")[0]}</TableCell>
                              <TableCell>{row.weight}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  // <List>
                  //   {weightList &&
                  //     weightList.map((weight, index) => (
                  //       <ListItem key={index}>
                  //         <ListItemText
                  //           secondary={`Weight: ${weight.weight} kg - Date: ${
                  //             weight?.date?.split("T")[0]
                  //           }`}
                  //         />
                  //       </ListItem>
                  //     ))}
                  // </List>
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
