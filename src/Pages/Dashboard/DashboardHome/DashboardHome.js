import * as React from "react";
import Grid from "@mui/material/Grid";
import Calendar from "../../Shared/Calender/Calender";
import Appointments from "../Appointments/Appointments";

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div style={{ background: "#033E3E", height: "800px", padding: "0 10px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <Calendar date={date} setDate={setDate}></Calendar>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Appointments date={date}></Appointments>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardHome;
