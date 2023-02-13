import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Grid,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
//NavLink----------------------------------------------
// import { NavLink } from "react-router-dom";

const CardTitle = ({ text }) => (
  <Typography
    variant="h5"
    component="h3"
    sx={{
      textAlign: {
        xs: "center",
        sm: "center",
        md: "center",
        lg: "center",
        xl: "center",
      },
    }}
  >
    {text}
  </Typography>
);
const CardText = ({ text }) => (
  <Typography
    variant="subtitle1"
    component="h4"
    sx={{
      textAlign: {
        xs: "center",
        sm: "center",
        md: "center",
        lg: "center",
        xl: "center",
      },
    }}
  >
    {text}
  </Typography>
);

const MuiCards = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container my={2} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Box>
            {/* almenia */}
            <Card>
              <CardMedia
                component="img"
                height="250px"
                image={require("./Img/armenia.jpg")}
                alt="armenia"
                title="Armenia's blog"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <CardTitle text="Almenia" />
                </Typography>
                <Typography variant="body" color="text.secondary">
                  <CardText text="2022/03~2022/08" />
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  size="medium"
                  variant="contained"
                  sx={{ width: 260, ":hover": { color: "white" } }}
                  onClick={() => navigate("Almenia")}
                >
                  Blog & Gallery
                </Button>
                {/* <Button size="medium" variant="contained"
                  sx={{ width: 130, ":hover": { color: "white" } }}
                  onClick={() => navigate('AlmeniaGallery')}
                > */}
                {/* NavLink */}
                {/* <NavLink to='/AlmeniaGallery'>
                  Gallery
                  </NavLink>
                </Button> */}
              </CardActions>
            </Card>
          </Box>
        </Grid>
        {/* Thailand */}
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Box>
            <Card>
              <CardMedia
                component="img"
                height="250px"
                image={require("./Img/thailand.jpg")}
                alt="armenia"
                title="Armenia's blog"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <CardTitle text="Thailand" />
                </Typography>
                <Typography variant="body" color="text.secondary">
                  <CardText text="2022/01~2022/03" />
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  size="medium"
                  variant="contained"
                  sx={{ width: 260, ":hover": { color: "white" } }}
                  onClick={() => navigate("Thailand")}
                >
                  Blog & Gallery
                </Button>
                {/* <Button size="medium" variant="contained"
                  sx={{ width: 130, ":hover": { color: "white" } }}>
                  Gellery
                </Button> */}
              </CardActions>
            </Card>
          </Box>
        </Grid>
        {/* India */}
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Box>
            <Card>
              <CardMedia
                component="img"
                height="250px"
                image={require("./Img/india-traficjam.jpg")}
                alt="India"
                title="India's blog"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <CardTitle text="India" />
                </Typography>
                <Typography variant="body" color="text.secondary">
                  <CardText text="2016/07~2017/02" />
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  size="medium"
                  variant="contained"
                  sx={{ width: 260, ":hover": { color: "white" } }}
                  onClick={() => navigate("India")}
                >
                  Blog & Gallery
                </Button>
                {/* <Button size="medium" variant="contained"
                  sx={{ width: 130, ":hover": { color: "white" } }}>
                  Gallaery
                </Button> */}
              </CardActions>
            </Card>
          </Box>
        </Grid>
        {/* Vietnam */}
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Box>
            <Card>
              <CardMedia
                component="img"
                height="250px"
                image={require("./Img/vietnam-market.jpg")}
                alt="vietnam"
                title="Vietnam's blog"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <CardTitle text="Vietnam" />
                </Typography>
                <Typography variant="body" color="text.secondary">
                  <CardText text="2017/01~2021/12" />
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  size="medium"
                  variant="contained"
                  sx={{ width: 260, ":hover": { color: "white" } }}
                  onClick={() => navigate("Vietnam")}
                >
                  Blog & Gallery
                </Button>
                {/* <Button size="medium" variant="contained"
                  sx={{ width: 130, ":hover": { color: "white" } }}>
                  Gellery
                </Button> */}
              </CardActions>
            </Card>
          </Box>
        </Grid>
        {/* China */}
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Box>
            <Card>
              <CardMedia
                component="img"
                height="250px"
                image={require("./Img/china.jpg")}
                alt="china"
                title="China's blog"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <CardTitle text="China" />
                </Typography>
                <Typography variant="body" color="text.secondary">
                  <CardText text="2018/08" />
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  size="medium"
                  variant="contained"
                  sx={{ width: 260, ":hover": { color: "white" } }}
                  onClick={() => navigate("China")}
                >
                  Blog & Gallery
                </Button>
                {/* <Button size="medium" variant="contained"
                  sx={{ width: 130, ":hover": { color: "white" } }}>
                  Gellery
                </Button> */}
              </CardActions>
            </Card>
          </Box>
        </Grid>
        {/* Georgia */}
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Box>
            <Card>
              <CardMedia
                component="img"
                height="250px"
                image={require("./Img/georgia.jpg")}
                alt="Georgia"
                title="Georgia's blog"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <CardTitle text="Georgia" />
                </Typography>
                <Typography variant="body" color="text.secondary">
                  <CardText text="2022/08~2022/10" />
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  size="medium"
                  variant="contained"
                  sx={{ width: 260, ":hover": { color: "white" } }}
                  onClick={() => navigate("Georgia")}
                >
                  Blog & Gallery
                </Button>
                {/* <Button size="medium" variant="contained"
                  sx={{ width: 130, ":hover": { color: "white" } }}>
                  Gellery
                </Button> */}
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MuiCards;
