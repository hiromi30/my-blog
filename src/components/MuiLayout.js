import React from "react";
import {Typography, Paper } from "@mui/material";
import thbeach from "./Img/thbeach.jpg";
import TypeWriterEffect from "react-typewriter-effect";
import '../components/font.css'

//------------------------------------------------

const Muilayout = () => {
  return (
    <>
      <Paper
        sx={{
          backgroundImage: `url(${thbeach})`,
          backgroundRepeat: "no-repeat",
          height: "500px",
          width: "auto",
          padding: "0",
          mb: 3,
        }}
      >
        <Typography variant="h1">Hello I am</Typography>
        <Typography variant="h2">
          <span>
            <TypeWriterEffect
            textstyle={{
              fontFamily: 'Roboto',
            }}

              startDelay={2000}
              cursorColor="#ffff"
              multiText={["Software Developer", "Front End Engineer"]}
              multiTextDelay={1000}
              typeSpeed={50}
              multiTextLoop
            />
          </span>
        </Typography>
      </Paper>
    </>
  );
};

export default Muilayout;
