import React from "react";
import MuiNavbar from "../components/MuiNavbar";
import "../Gallery.css";
// import Post from "../components/post/Post";
// import BorderdBottomBox2 from "../Wrapper/BorderedBottomBox-2";
// import { Grid, Stack } from "@mui/material";

import Img1 from "./assets/AR/AR-BBQ.jpg";
import Img2 from "./assets/AR/AR-Breakfast.jpg";
import Img3 from "./assets/AR/AR-Cascade.jpg";
import Img4 from "./assets/AR/AR-Center.jpg";
import Img5 from "./assets/AR/AR-Coffee.jpg";
import Img6 from "./assets/AR/AR-Dinner.jpg";
import Img7 from "./assets/AR/AR-Garden.jpg";
import Img8 from "./assets/AR/AR-Lake.jpg";
import Img9 from "./assets/AR/AR-Park.jpg";
import Img10 from "./assets/AR/AR-River.jpg";
import Img11 from "./assets/AR/AR-Station.jpg";
import Img12 from "./assets/AR/AR-Train.jpg";
import Img13 from "./assets/AR/AR-Winter.jpg";

const Almenia = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
    },
    {
      id: 13,
      imgSrc: Img13,
    },
  ];

  return (
    <>
      <MuiNavbar />
      <h1 style={{ textAlign: "center" }}>Almenia Gallery</h1>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img src={item.imgSrc} alt="almenia" style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
      {/* <BorderdBottomBox2 />
      <Grid container rowSpacing={2} columnSpacing={1} justifyContent="center">
        <Grid item xs={3}>
            <Post />
            <Post />
            <Post />
            <Post />
        </Grid>
      </Grid> */}
    </>
  );
};

export default Almenia;
