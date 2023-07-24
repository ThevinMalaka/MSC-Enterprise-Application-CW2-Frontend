import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";

import { userReportData, getLoggedUserData } from "../selectors";
import { getReportDataRequest } from "../actions";

const ReportPage = () => {
  const dispatch = useDispatch();
  const [reportData, setReportData] = useState([]);
  const cheatMealListData = useSelector((state) => userReportData(state));
  const userData = useSelector((state) => getLoggedUserData(state));

  const getReportData = useCallback(
    (info) => {
      dispatch(getReportDataRequest(info));
    },
    [dispatch]
  );

  useEffect(() => {
    getReportData(userData.id);
  }, []);

  useEffect(() => {
    if (cheatMealListData) {
      console.log(cheatMealListData);
      setReportData(cheatMealListData);
    }
  }, [cheatMealListData]);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Plan Name</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>Completed Days</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reportData && reportData.length == 0 && (
              <TableRow
                key={"No Data"}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  No Data
                </TableCell>
                <TableCell>No Data</TableCell>
                <TableCell>No Data</TableCell>
              </TableRow>
            )}
            {reportData &&
              reportData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.workoutPlanName}
                  </TableCell>
                  <TableCell>{row.startDate.split("T")[0]}</TableCell>
                  <TableCell>{row.completedDays}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ReportPage;
