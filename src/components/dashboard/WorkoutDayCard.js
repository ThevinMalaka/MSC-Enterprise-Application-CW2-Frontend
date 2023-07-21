import PropTypes from "prop-types";
import {
  Box,
  Card,
  Paper,
  Typography,
  CardHeader,
  CardContent,
} from "@mui/material";

WorkoutDayCard.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default function WorkoutDayCard({
  title,
  subheader,
  list,
  onItemClick,
  selectedPlan,
  ...other
}) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <CardContent>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {list.map((site) => (
            <Paper
              key={site.name}
              variant="outlined"
              style={{
                backgroundColor:
                  site.status == "completed" ? "#E9FCD4" : "white",
              }}
              sx={{
                py: 2.5,
                textAlign: "center",
                cursor: site.status == "completed" ? "not-allowed" : "pointer",
                backgroundColor: site.id === selectedPlan ? "#e8e8e8" : "white",
              }}
              onClick={() =>
                site.status == "completed"
                  ? ""
                  : onItemClick(site.id, site.name)
              }
            >
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {site.name}
              </Typography>
            </Paper>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
