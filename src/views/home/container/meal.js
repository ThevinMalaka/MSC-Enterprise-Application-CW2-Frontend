import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

const MealPlanPage = () => {
  const mealPlan = [
    {
      id: 1,
      items: [
        {
          id: 1,
          name: "Meal 1",
          servingSize: "1 cup",
        },
        {
          id: 2,
          name: "Meal 2",
          servingSize: "1 cup",
        },
        {
          id: 3,
          name: "Meal 3",
          servingSize: "1 cup",
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          id: 1,
          name: "Meal 1",
          servingSize: "1 cup",
        },
        {
          id: 2,
          name: "Meal 2",
          servingSize: "1 cup",
        },
        {
          id: 3,
          name: "Meal 3",
          servingSize: "1 cup",
        },
      ],
    },
  ];

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <div>
            <Typography variant="h5" gutterBottom>
              Meal Plan
            </Typography>
            <Grid container spacing={2}>
              {mealPlan.map((meal, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Meal {index + 1}
                      </Typography>
                      <List>
                        {meal.items.map((item, itemIndex) => (
                          <ListItem key={itemIndex}>
                            <ListItemText
                              primary={item.name}
                              secondary={`Serving Size: ${item.servingSize}`}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <LoadingButton
            variant="contained"
            color="primary"
            loading={false}
            loadingPosition="start"
            startIcon={null}
            fullWidth
            onClick={() => {}}
          >
            Enroll in Meal Plan 1
          </LoadingButton>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <LoadingButton
            variant="contained"
            color="primary"
            loading={false}
            loadingPosition="start"
            startIcon={null}
            fullWidth
            onClick={() => {}}
          >
            Enroll in Meal Plan 2
          </LoadingButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MealPlanPage;
