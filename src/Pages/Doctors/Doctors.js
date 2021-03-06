import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Doctor from "./Doctor/Doctor";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  console.log(doctors.length);
  useEffect(() => {
    fetch("https://sejin-doctor-portal.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <Container>
        <h1>Doctors We Provided</h1>
        <Grid container spacing={2}>
          {doctors.map((doctor) => (
            <Doctor doctor={doctor} key={doctor._id}></Doctor>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Doctors;
